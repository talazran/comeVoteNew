using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using System.Web.Http.Description;
using System.Web.Http.Cors;

namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/National")]
    public class NationalController : ApiController
    {
        //מופע מסוג המסד נתונים
        ComputerizedVotingNewEntities db = new ComputerizedVotingNewEntities();

        //שמירת תעודות הזהות של האזרחים המורשים לבחירה
        public List<string> saveTzOfNational = new List<string>();

        //החזרת אוסף של האזרחים בקלפי הנוכחי
        [HttpGet]
        [Route("getNationalInBallotBox/{numBallotBox}/{cityOfBallotBox}")]
        public IHttpActionResult GetNationalInBallotBox(int numBallotBox, int cityOfBallotBox)
        {
            //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
            //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה


            //שליפת האזרחים לפי קוד העיר ולפי מספר קלפי
            var nationalInBallotBox = from n in db.National
                                      where n.cityId == cityOfBallotBox && n.numBallot.Equals(numBallotBox)
                                      select n;

            return Ok(nationalInBallotBox);
        }

        //מחזיר אובייקט של אזרח על פי תעודת זהות
        //ועל פי מספר קלפי ועיר
        [HttpGet]
        [ResponseType(typeof(National))]
        [Route("getNational/{tz}/{cityOfBallotBox}/{numBallotBox}")]
        public IHttpActionResult GetNational(string tz, int cityOfBallotBox, int numBallotBox)
        {
            National singleNationalInBallotBox = db.National.FirstOrDefault(item => (item.cityId == cityOfBallotBox) && (item.numBallot.Equals(numBallotBox)) && (item.Identity == tz));
            if (singleNationalInBallotBox != null)
                return Ok(singleNationalInBallotBox);
            return NotFound();
        }

        //הגדלת ערך הבוחרים לכל מפלגה
        [HttpGet]
        [ResponseType(typeof(National))]
        [Route("PutVotersInFaction/{idFaction}")]
        public IHttpActionResult PutVotersInFaction(int idFaction)
        {
            Factions faction = db.Factions.Single(x=>x.Id == idFaction);
            faction.voters +=1;
            db.SaveChanges();
            return Ok(faction);
        }

        //הוספת תעודת זהות של אזרח
        [HttpGet]
        [Route("addTzNationalToList/{Identity}")]
        public void AddTzNationalToList(string Identity)
        {
            int flag = 0;
            foreach (var item in saveTzOfNational)
            {
                if (item.Equals(Identity))
                {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0)//רק אם לא נמצאה התעודת זהות היא תתוסף
               saveTzOfNational.Add(Identity);
        }

        //בדיקה האם אזרח קיים באוסף
        [HttpGet]
        [Route("checkIsExistNational/{Identity}")]
        public bool CheckIsExistNational(string Identity)
        {
            int flag = 0;
            foreach (var item in saveTzOfNational)
            {
                if (item.Equals(Identity))
                {
                    flag = 1;
                    break;
                }
            }
            if (flag == 1)
                return true;
            return false;
        }

        //הסרת האזרח מהאוסף
        [HttpGet]
        [Route("deleteTzNationalToList/{Identity}")]
        public void DeleteTzNationalToList(string Identity)
        {
            foreach (var item in saveTzOfNational)
            {
                if (item.Equals(Identity))
                {
                    saveTzOfNational.Remove(Identity);
                    break;
                }
            }
        }
    }
}