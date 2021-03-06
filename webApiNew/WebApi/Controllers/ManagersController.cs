﻿using BLL;
using DAL;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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
        string destination = HttpContext.Current.Server.MapPath("~")+ "//Files//";
        //הזדהות במערכת לגבי מנהל ראשי
        //הפונקציה עובדת
        [HttpGet]
        [Route("findHeadManager/{identity}/{password}")]
        public bool FindHeadManager(string identity, string password)
        {
            //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
            //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה

            //חיפוש המנהל על פי שם משתמש וסיסמא
            //החזרת הסטטוס שלו
            var kindOfManager = db.Managers.FirstOrDefault(x => x.MPassword == password && x.MIdentity == identity);
            if (kindOfManager != null && kindOfManager.NumStatus == "1")
                return true;
            return false;
        }

        //הזדהות במערכת לגבי מנהל עיר
        //הפונקציה עבדה
        [HttpGet]
        [Route("findCityManager/{identity}/{password}/{cityOfManager}")]
        public bool FindCityManager(string identity, string password, int cityOfManager)
        {
            //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
            //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה

            //שליפת קוד עיר על פי שם עיר
            //var idCity = from c in db.City
            //             where c.cityName == cityOfManager
            //             select c.id;



            //חיפוש המנהל על פי שם משתמש וסיסמא
            //החזרת הסטטוס שלו
            var kindOfManager = db.Managers.FirstOrDefault(x => x.MPassword == password && x.MIdentity == identity && x.MCity.Value==cityOfManager);
            if (kindOfManager != null && kindOfManager.NumStatus == "2")
                return true;
            return false;
        }




        //הזדהות במערכת לגבי מנהל קלפי
        //הפונקציה עבדה
        [HttpGet]
        [Route("findBallotBoxManager/{identity}/{password}/{numOfBalloBox}/{cityOfBallotBox}")]
        public bool FindBallotBoxManager(string identity, string password, int numOfBalloBox, string cityOfBallotBox)
        {
            //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
            //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה

            //שליפת הקוד של הקלפי שהוכנס
            var idBallotBox = from b in db.BallotBox
                              where b.numBallot.Equals(numOfBalloBox)
                              select b.id;

            //חיפוש המנהל על פי שם משתמש וסיסמא
            //החזרת הסטטוס שלו
            var kindOfManager = db.Managers.FirstOrDefault(x => x.MPassword == password && x.MIdentity == identity && x.MNumBallotBox == idBallotBox.FirstOrDefault() && x.MCity.ToString() == cityOfBallotBox);
            if (kindOfManager != null && kindOfManager.NumStatus == "3")
                return true;
            return false;
        }

        [HttpPut]
        [Route("editFaction/{id}")]
        public async System.Threading.Tasks.Task<bool> EditFactionAsync()
        {
            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                {
                    throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
                }

                string root = HttpContext.Current.Server.MapPath("~/App_Data");
                var provider = new MultipartFormDataStreamProvider(root);
                try
                {
                    await Request.Content.ReadAsMultipartAsync(provider);

                    NameValueCollection formdata = provider.FormData;
                    ///כל האוביקט שנשלח
                    Factions factions = JsonConvert.DeserializeObject<Factions>(formdata["res"].ToString());

                    foreach (MultipartFileData file in provider.FileData)
                    {
                        var fileName = file.Headers.ContentDisposition.FileName.Replace("\"", string.Empty);
                        byte[] documentData = File.ReadAllBytes(file.LocalFileName);
                        if (Directory.GetFiles(destination, fileName).Length == 0)
                        {
                            string destFile = System.IO.Path.Combine(destination, fileName);
                            ///destFile-ניתוב לשמירת התמונה אצלכם בפרויקט עצמו
                            File.Copy(file.LocalFileName, destFile);
                        }
                        var fac = db.Factions.First(p => p.Id == factions.Id);
                        fac.factionName = factions.factionName;
                        fac.factionPic =  fileName;
                        fac.IsAgree = factions.IsAgree;
                        db.SaveChanges();
                        return true;
                    }
                    return true;
                }
                catch (System.Exception e)
                {

                    return false;
                }
            }
            catch (Exception e)
            {
                return false;
            }

        }
        [HttpGet]
        [Route("deleteFaction/{id}")]
        public bool DeleteFaction(int id)
        {
            try
            {
                var fac = db.Factions.First(p => p.Id == id);
                db.Factions.Remove(fac);
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost]
        [Route("addFaction")]
        public async System.Threading.Tasks.Task<bool> AddFactionAsync()
        {
            //try
            //{
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            string root = HttpContext.Current.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);
            try
            {
                await Request.Content.ReadAsMultipartAsync(provider);

                NameValueCollection formdata = provider.FormData;
                ///כל האוביקט שנשלח
                Factions factions = JsonConvert.DeserializeObject<Factions>(formdata["res"].ToString());

                foreach (MultipartFileData file in provider.FileData)
                {
                    var fileName = file.Headers.ContentDisposition.FileName.Replace("\"", string.Empty);
                    byte[] documentData = File.ReadAllBytes(file.LocalFileName);
                    if (Directory.GetFiles(destination, fileName).Length == 0)
                    {
                        string destFile = System.IO.Path.Combine(destination, fileName);
                        ///destFile-ניתוב לשמירת התמונה אצלכם בפרויקט עצמו
                        File.Copy(file.LocalFileName, destFile);
                    }
                    factions.factionPic = fileName;
                    db.Factions.Add(factions);
                    db.SaveChanges();
                }
                return true;
                //}
                //catch (System.Exception e)
                //{

                //    return false;
                //}

                //return false;s
            }
            catch (Exception e)
            {
                return false;
            }
        }
        [HttpGet]
        [Route("getFactions")]
        public List<Models.Factions> getAllFactions()
        {
           List<Models.Factions> factions = new List<Models.Factions>();
            foreach (var item in db.Factions.ToList())
            {
                var i = Models.Factions.ConvertToDto(item);
                byte[] Bytes = new byte[10000000];
                string FileExtension = Path.GetExtension(i.factionPic);
                //resourcesPathShow.TypeFile = FileExtension;
                string root = HttpContext.Current.Server.MapPath("~");
                Bytes = File.ReadAllBytes(root+"//Files//"+i.factionPic);
                i.factionImageBase = Convert.ToBase64String(Bytes);
                factions.Add(i);
            }
            return factions;
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

        [HttpGet]
        [Route("getTimeVote")]
        public IHttpActionResult getTimeVote()
        {
            try
            {
               var vot= db.Voting.ToList().Last();
                if(DateTime.Now.DayOfYear<vot.dateVote.Date.DayOfYear)
                {
                    if((vot.dateVote- DateTime.Now).Days>7)
                        return Ok(false);
                    return Ok(true);
                }
                else if (DateTime.Now.TimeOfDay < vot.ballotsOpen)
                {
                    return Ok(true);

                }
                else return Ok(false);
            }

            catch (Exception ex)
            {

                return BadRequest();
            }
        }


        //[HttpPost]
        //[Route("addManagerCity")]
        //public IHttpActionResult PostManagerCity([FromBody]Models.Manager manager)
        //{
        //    try
        //    {

        //        var managerDal = Models.Manager.ConvertToDAL(manager);
        //        managerDal.City = db.City.First(p => p.id == manager.MCity);
        //        managerDal.ManagersStatus = db.ManagersStatus.FirstOrDefault(p => p.numStatus == "2");
        //        db.Managers.Add(managerDal);
        //        db.SaveChanges();
        //        return Ok();
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest();
        //    }
        //}

        [HttpPut]
        [Route("editManagerCity/{managerId}")]
        public IHttpActionResult PutManagerCity(string managerId, [FromBody]Models.Manager manager)
        {
            try
            {
                var manager1 = db.Managers.First(p => p.MIdentity == managerId);
                //manager1 = Models.Manager.ConvertToDAL(manager);
                manager1.City = db.City.First(p => p.id == manager.MCity);
                manager1.ManagersStatus = db.ManagersStatus.FirstOrDefault(p => p.numStatus == "2");
                manager1.MFullName = manager.MFullName;
                manager1.MailM = manager.MailM;
                db.SaveChanges();
                return Ok(true);
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

        [HttpPost]
        [ActionName("PostCityManager")]
        [ResponseType(typeof(Managers))]
        [Route("addManagerCity")]
        public IHttpActionResult PostCityManager(Managers addCityManager)//הוספת מנהל עיר חדש, 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //בדיקה שהמנהל לא קיים
            Managers m = db.Managers.FirstOrDefault(ma => ma.MIdentity == addCityManager.MIdentity);
            if (m != null)
                return BadRequest(ModelState);

            //הגרלת סיסמא של המנהל החדש 
            PasswordManager pm = new PasswordManager();
            string password = pm.RandomPassword();
            addCityManager.MPassword = password;
            try
            {
                addCityManager.NumStatus = "2";
                db.Managers.Add(addCityManager);
                //סיסמת המשתמש המונפקת עי המערכת
                db.SaveChanges();
                //שליחת הסיסמא למייל המנהל
                sendEmails se = new sendEmails();
                se.sendMailForPassword(addCityManager.MailM, addCityManager.MPassword);
            }
            catch (Exception ex)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }


        [HttpGet]//שליחת מיילים
        [Route("senfMailsToFaction/{id}")]
        public IHttpActionResult GetsendEmail(int id)
        {
            var q = from f in db.Factions//חיפוש כתובת המייל של המפלגה שנלחצה
                    where f.Id == id
                    select f.leadersMail;
            sendEmails se = new sendEmails();
            se.sendMailTest(q.ToString());//שליחת המייל של המפלגה לפונקציית שליחה
            return Ok();
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
                manager1.BallotBox = db.BallotBox.Where(p=>p.id==manager.MNumBallotBox).First();
                manager1.MFullName = manager.MFullName;
                manager1.MailM = manager.MailM;
                //manager1 = Models.Manager.ConvertToDAL(manager);
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
        private static Random random = new Random();

        public static string GetVoucherNumber(int length)
        {
            var chars = "abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var result = new string(
                Enumerable.Repeat(chars, length)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());

            return result;
        }

        [HttpPost]
        [ResponseType(typeof(Managers))]
        public IHttpActionResult PostBallotBoxManager([FromBody]Models.Manager manager)//הוספת מנהל קלפי חדש
        {
            try
            {
                var managerDal = Models.Manager.ConvertToDAL(manager);
                managerDal.ManagersStatus = db.ManagersStatus.FirstOrDefault(p => p.numStatus == "3");
                managerDal.MUserName = GetVoucherNumber(10);
                managerDal.MPassword = GetVoucherNumber(9);
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
        //הוספת רשומה לטבלת המאושרים
        //הוספת  קול לעיר של הבוחר

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
                db.IsAgreeToVote.Add(new IsAgreeToVote() { tz = national.Identity });
                City city = db.City.Single(x => x.id == national.cityId);
                city.nowCountValid += 1;
                db.SaveChanges();
                return Ok(national);
            }
            else
                return NotFound();
        }
        #endregion

        [HttpGet]
        [Route("getBallotBoxByCity/{idCity}")]
        public IHttpActionResult GetBallotBoxByCityId(int idCity)
        {
            return Ok(db.BallotBox.Where(p => p.cityId == idCity).ToList());
        }
    }
}