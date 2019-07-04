using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Managers")]
    public class ManagersController : ApiController
    {
        DAL.ComputerizedVotingNewEntities db = new ComputerizedVotingNewEntities();

        //הזדהות במערכת לגבי מנהל ראשי
        //הפונקציה עובדת
        [HttpGet]
        [Route("findHeadManager/{userName}/{password}")]
        public bool FindHeadManager(string userName, string password)
        {
            //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
            //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה

            //חיפוש המנהל על פי שם משתמש וסיסמא
            //החזרת הסטטוס שלו
            var kindOfManager = db.Managers.FirstOrDefault(x => x.MPassword == password && x.MUserName == userName);
            if (kindOfManager != null && kindOfManager.NumStatus == "1")
                return true;
            return false;
        }

        //הזדהות במערכת לגבי מנהל עיר
        //הפונקציה עבדה
        [HttpGet]
        [Route("findCityManager/{userName}/{password}/{cityOfManager}")]
        public bool FindCityManager(string userName, string password, string cityOfManager)
        {
            //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
            //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה

            //שליפת קוד עיר על פי שם עיר
            var idCity = from c in db.City
                         where c.cityName == cityOfManager
                         select c.id;



            //חיפוש המנהל על פי שם משתמש וסיסמא
            //החזרת הסטטוס שלו
            var kindOfManager = db.Managers.FirstOrDefault(x => x.MPassword == password && x.MUserName == userName && x.MCity == idCity.FirstOrDefault());
            if (kindOfManager != null && kindOfManager.NumStatus == "2")
                return true;
            return false;
        }



        //הזדהות במערכת לגבי מנהל קלפי
        //הפונקציה עבדה
        [HttpGet]
        [Route("findBallotBoxManager/{userName}/{password}/{numOfBalloBox}/{cityOfBallotBox}")]
        public bool FindBallotBoxManager(string userName, string password, int numOfBalloBox, string cityOfBallotBox)
        {
            //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
            //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה

            //שליפת הקוד של הקלפי שהוכנס
            var idBallotBox = from b in db.BallotBox
                              where b.numBallot.Equals(numOfBalloBox)
                              select b.id;

            //חיפוש המנהל על פי שם משתמש וסיסמא
            //החזרת הסטטוס שלו
            var kindOfManager = db.Managers.FirstOrDefault(x => x.MPassword == password && x.MUserName == userName && x.MNumBallotBox == idBallotBox.FirstOrDefault() && x.MCity.ToString() == cityOfBallotBox);
            if (kindOfManager != null && kindOfManager.NumStatus == "3")
                return true;
            return false;
        }

        #region מנהל ראשי
        //הפונקציה עובדת
        [HttpGet]
        [Route("allFactions")]
        // GET api/<controller>
        public List<Factions> AllFactions()//מחזיר את רשימת המפלגות לבחירת המנהל הראשי
        {
            var q = from i in db.Factions
                    where i.IsAgree == true
                    select i;
            return q.ToList();
        }

        //שינוי שדה המפלגה למאושרת או לא מאושרת
        [HttpGet]
        [ResponseType(typeof(Managers))]
        [Route("putFieldIsAgree/{idFaction}")]
        public IHttpActionResult PutFieldIsAgree(int idFaction)
        {
            Factions faction = db.Factions.Single(x => x.Id == idFaction);
            if (faction.IsAgree == true)
                faction.IsAgree = false;
            else
                faction.IsAgree = true;
            db.SaveChanges();
            return Ok(faction);
        }

        [HttpPost]
        [Route("addManagerCity")]
        public IHttpActionResult PostManagerCity([FromBody]Models.Manager manager)
        {
            try
            {

                var managerDal = Models.Manager.ConvertToDAL(manager);
                managerDal.City = db.City.First(p => p.id == manager.MCity);
                managerDal.ManagersStatus = db.ManagersStatus.FirstOrDefault(p => p.numStatus == "2");
                db.Managers.Add(managerDal);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }

        }

        [HttpPut]
        [Route("editManagerCity/{managerId}")]
        public IHttpActionResult PutManagerCity(string managerId, [FromBody]Models.Manager manager)
        {
            try
            {
                var manager1 = db.Managers.First(p => p.MIdentity == managerId);
                manager1 = Models.Manager.ConvertToDAL(manager);
                manager1.City = db.City.First(p => p.id == manager.MCity);
                manager1.ManagersStatus = db.ManagersStatus.FirstOrDefault(p => p.numStatus == "2");
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }

        }

        [HttpDelete]
        [Route("deleteManagerCity/{managerId}")]
        public IHttpActionResult PutManagerCity(string managerId)
        {
            try
            {
                var manager1 = db.Managers.First(p => p.MIdentity == managerId);
                db.Managers.Remove(manager1);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }

        }

        #endregion


        #region מנהל עיר
        [HttpGet]
        [Route("allBallotBoxManagers")]
        public List<Models.Manager> AllBallotBoxManagers()//מחזיר את רשימת מנהלי הקלפיות
        {
            List<Models.Manager> managers = new List<Models.Manager>();
            var q = from m in db.Managers
                    where m.NumStatus.Equals("3")//מחפש את המנהלים שהסטטוס שלהם הוא 3 ז''א מנהלי קלפי
                    select m;
            foreach (var item in q.ToList())
            {
                managers.Add(Models.Manager.ConvertToDto(item));
            }
            return managers;
        }

        [HttpGet]
        [Route("allCityManagers")]
        public List<Models.Manager> AllCityManagers()//מחזיר את רשימת מנהלי ערים
        {
            List<Models.Manager> managers = new List<Models.Manager>();
            var q = from m in db.Managers
                    where m.NumStatus.Equals("2")//מחפש את המנהלים שהסטטוס שלהם הוא 3 ז''א מנהלי קלפי
                    select m;
            foreach (var item in q.ToList())
            {
                managers.Add(Models.Manager.ConvertToDto(item));
            }
            return managers;
        }

        [HttpPost]
        [ResponseType(typeof(Managers))]
        public IHttpActionResult PostBallotBoxManager(Managers addBallotBoxManager)//הוספת מנהל קלפי חדש
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Managers.Add(addBallotBoxManager);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = addBallotBoxManager.MIdentity }, addBallotBoxManager);
        }
        #endregion


        #region מנהל קלפי
        //שינוי שדה הבוחר ל-בחר
        [HttpGet]
        [ResponseType(typeof(Managers))]
        [Route("PutFieldIsChoose/{idVoter}")]
        public IHttpActionResult PutFieldIsChoose(string idVoter)
        {
            National national = db.National.Single(x => x.Identity == idVoter);
            if (national.IsChoose == false)
            {
                national.IsChoose = true;
                db.SaveChanges();
                return Ok(national);
            }
            else
                return NotFound();
        }
        #endregion
    }
}