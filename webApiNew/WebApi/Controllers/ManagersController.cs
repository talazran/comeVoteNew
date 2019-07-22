using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
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

        //שינוי שדה המפלגה למאושרת 
        [HttpGet]
        [ResponseType(typeof(Managers))]
        [Route("putFieldAgreeFaction/{idFaction}")]
        public IHttpActionResult PutFieldAgreeFaction(int idFaction)
        {
            Factions faction = db.Factions.Single(x => x.Id == idFaction);
            if (faction.IsAgree == false)
            {
                faction.IsAgree = true;
                db.SaveChanges();
                return Ok(faction);
            }
            return BadRequest();
        }

        //שינוי שדה המפלגה ל-לא מאושרת 
        [HttpGet]
        [ResponseType(typeof(Managers))]
        [Route("putFieldNotAgreeFaction/{idFaction}")]
        public IHttpActionResult PutFieldNotAgreeFaction(int idFaction)
        {
            Factions faction = db.Factions.Single(x => x.Id == idFaction);
            if (faction.IsAgree == true)
            {
                faction.IsAgree = false;
                db.SaveChanges();
                return Ok(faction);
            }
            return BadRequest();
        }


        //שמירת פרטי בחירות לשנה הנוכחית
        [HttpPost]
        [Route("addTimeVoting")]
        [ResponseType(typeof(Voting))]
        public IHttpActionResult PostTimeVoting([FromBody]Models.Voting formVoting)
        {
            try
            {
                var voting = Models.Voting.ConvertToDB(formVoting);

                db.Voting.Add(voting);
                db.SaveChanges();
                return Ok();
            }

            catch (Exception ex)
            {

                return BadRequest();
            }
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
        [Route("deleteManagerCityOrBallotBox/{managerId}")]
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

        [HttpPut]
        [Route("editManagerBallotBox/{managerId}")]
        public IHttpActionResult PutManagerBallotBox(string managerId, [FromBody]Models.Manager manager)
        {
            try
            {
                var manager1 = db.Managers.First(p => p.MIdentity == managerId);
                manager1 = Models.Manager.ConvertToDAL(manager);
                manager1.City = db.City.First(p => p.id == manager.MCity);
                manager1.ManagersStatus = db.ManagersStatus.FirstOrDefault(p => p.numStatus == "3");
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [ResponseType(typeof(Managers))]
        public IHttpActionResult PostBallotBoxManager([FromBody]Models.Manager manager)//הוספת מנהל קלפי חדש
        {
            try
            {
                var managerDal = Models.Manager.ConvertToDAL(manager);
                managerDal.ManagersStatus = db.ManagersStatus.FirstOrDefault(p => p.numStatus == "3");
                db.Managers.Add(managerDal);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
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