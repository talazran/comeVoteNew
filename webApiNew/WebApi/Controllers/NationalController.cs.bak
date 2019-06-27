using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using System.Web.Http.Description;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
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
            Factions faction = db.Factions.Single(x => x.Id == idFaction);
            faction.voters += 1;
            db.SaveChanges();
            return Ok(faction);
        }
        //הפונקציה עבדה
        //הוספת תעודת זהות של אזרח המציין שהוא רשאי לבחירה
        [HttpPost]
        [ActionName("addTzNationalToList")]
        [ResponseType(typeof(IsAgreeToVote))]
        [Route("addTzNationalToList")]
        public IHttpActionResult AddTzNationalToList(National tzToNational) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //ברגע שמצא את התעודת זהות לא ניתן להוסיף שוב
            IsAgreeToVote n = db.IsAgreeToVote.FirstOrDefault(x => x.tz == tzToNational.Identity);
            if (n != null)
                return BadRequest(ModelState);

            //ברגע שלא מצא את התעודת זהות
            try
            {
                IsAgreeToVote isAgree = new IsAgreeToVote();
                isAgree.tz = tzToNational.Identity;

                db.IsAgreeToVote.Add(isAgree);
                db.SaveChanges();
               
            }
            catch (Exception ex)
            {
                return BadRequest(ModelState);
            }
            return CreatedAtRoute("DefaultApi", new { id = tzToNational.Identity }, tzToNational);
        }
        //הפונקציה עבדה
        [HttpGet]
        [Route("checkIsExistNational/{Identity}")]
        public bool CheckIsExistNational(string Identity)
        {
            //בדיקה האם הוא קיים בטבלה
            IsAgreeToVote isAgreeNational = db.IsAgreeToVote.FirstOrDefault(x=>x.tz==Identity);
            if (isAgreeNational != null)
                return true;
            return false;
        }
        //הפונקציה עבדה
        //הסרת האזרח מהטבלה
        [HttpDelete]
        [ResponseType(typeof(IsAgreeToVote))]
        [Route("deleteTzNationalToList/{Identity}")]
        public IHttpActionResult DeleteTzNationalToList(string Identity)
        {
            IsAgreeToVote isAgree = db.IsAgreeToVote.FirstOrDefault(x=>x.tz==Identity);
            if(isAgree==null)
            {
                return NotFound();
            }
            db.IsAgreeToVote.Remove(isAgree);
            db.SaveChanges();

            return Ok(isAgree);
        }
    }
}