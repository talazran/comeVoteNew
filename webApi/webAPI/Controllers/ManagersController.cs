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

namespace webAPI.Controllers
{
    //[EnableCors(headers:"")]
    //[RoutePrefix("api/Managers")]
    public class ManagersController : ApiController
    {
        ComputerizedVotingEntities1 db = new ComputerizedVotingEntities1();

        ////שמירת שם המנהל והעיר בה הוא מנהל
        //public Dictionary<string, string> dicCityManager = new Dictionary<string, string>();

        ////הזדהות במערכת לגבי מנהל ראשי
        //[HttpGet]
        ////[Route("findHeadManager/{userName:string}/{password:string}")]
        //public IHttpActionResult FindHeadManager(string userName, string password)
        //{
        //    //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
        //    //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה


        //    //חיפוש המנהל על פי שם משתמש וסיסמא
        //    //החזרת הסטטוס שלו
        //    string kindOfManager = db.Managers.Where(x => x.MPassword == password && x.MUserName == userName).FirstOrDefault().NumStatus;
        //    if (kindOfManager != null && kindOfManager == "1")
        //        return Ok();
        //    return NotFound();
        //}

        ////הזדהות במערכת לגבי מנהל עיר
        //[HttpGet]
        ////[Route("findCityManager/{userName:string}/{password:string}/{cityOfManager:string}")]
        //public IHttpActionResult FindCityManager(string userName, string password, string cityOfManager)
        //{
        //    //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
        //    //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה

        //    //שמירת שם המנהל והעיר בה הוא מנהל
        //    dicCityManager.Add(userName, cityOfManager);

        //    //חיפוש המנהל על פי שם משתמש וסיסמא
        //    //החזרת הסטטוס שלו
        //    string kindOfManager = db.Managers.Where(x => x.MPassword == password && x.MUserName == userName).FirstOrDefault().NumStatus;
        //    if (kindOfManager != null && kindOfManager == "2")
        //        return Ok();
        //    return NotFound();
        //}


        ////הזדהות במערכת לגבי מנהל קלפי
        //[HttpGet]
        ////[Route("findBallotBoxManager/{userName:string}/{password:string}")]
        //public IHttpActionResult FindBallotBoxManager(string userName, string password)
        //{
        //    //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
        //    //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה

        //    //חיפוש המנהל על פי שם משתמש וסיסמא
        //    //החזרת הסטטוס שלו
        //    string kindOfManager = db.Managers.Where(x => x.MPassword == password && x.MUserName == userName).FirstOrDefault().NumStatus;
        //    if (kindOfManager != null && kindOfManager == "3")
        //        return Ok();
        //    return NotFound();
        //}

        //#region מנהל ראשי
        ////הפונקציה עובדת
        [HttpGet]
        //[Route("allFactions")]
        // GET api/<controller>
        public IQueryable<Factions> AllFactions()//מחזיר את רשימת המפלגות לבחירת המנהל הראשי
        {
            return db.Factions;
        }

        //#region טיוטה
        //// POST: api/categories 
        ////[HttpPost]
        ////[Route("postCityManager")]
        ////[ResponseType(typeof(Managers))]
        ////public IHttpActionResult PostCityManager(Managers cityManager)//הוספת מנהלי ערים חדשים
        ////{

        ////if (!ModelState.IsValid)
        ////{
        ////    return BadRequest(ModelState);
        ////}

        ////db.Managers.Add(cityManager);

        ////db.SaveChanges();

        ////return CreatedAtRoute("DefaultApi", new { id = cityManager.MIdentity }, cityManager);
        ////}

        ////[HttpGet]
        ////[Route("votersResulst")]
        ////public IEnumerable<Factions> VotersResulst()//צפייה בתוצאות ספירת קולות
        ////{

        ////}
        //#endregion

        //[HttpPost] //הוספת יום בחירות, קוד בחירות ושעת פתיחת קלפיות וסגירתם
        //[ResponseType(typeof(Voting))]
        //public IHttpActionResult PostVoting(Voting v)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Voting.Add(v);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = v.kodVote }, v);
        //}

        //[HttpPut]
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutOkFaction(Factions f, int Id)//מעדכן שהמפלגה מאושרת
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    if (Id != f.Id)
        //    {
        //        return BadRequest(); //הבקשה לא תקינה
        //    }
        //    db.Entry(f).State = EntityState.Modified; //הולך למסד הנתונים ומעדכן את המפלגה
        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        throw;
        //    }
        //    return StatusCode(HttpStatusCode.NoContent);
        //}


        //#endregion

        //#region מנהל עיר
        //// GET api/<controller>
        //[HttpGet]
        //[Route("allBallotBoxManagers")]
        //public List<Managers> AllBallotBoxManagers()//מחזיר את רשימת מנהלי הקלפיות
        //{
        //    var q = from m in db.Managers
        //            where m.NumStatus.Equals("3")//מחפש את המנהלים שהסטטוס שלהם הוא 3 ז''א מנהלי קלפי
        //            select m;
        //    return q.ToList();
        //}


        //// POST: api/categories 
        //[HttpPost]
        //[ResponseType(typeof(Managers))]
        //public IHttpActionResult PostBallotBoxManager(Managers addBallotBoxManager)//הוספת מנהל קלפי חדש
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Managers.Add(addBallotBoxManager);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = addBallotBoxManager.MIdentity }, addBallotBoxManager);
        //}

        //#region טיוטה
        ////// /GET api/<controller>
        ////[Route("getNationalInCity/{cityName:string}")]// אין את ההתחלה של הניתוב כפי שמופיע בדף ההגדרות
        ////[HttpGet]
        ////[ResponseType(typeof(List<National>))]
        ////public IHttpActionResult GetNationalInCity(string cityName)//מחזיר רשימת בוחרים בעיר מסוימת עד כה
        ////{
        ////    List<National> n = db.National.Where(x => x.city == cityName).ToList();
        ////    if (n == null)
        ////    {
        ////        return NotFound();
        ////    }
        ////    return Ok(n);
        ////}

        ////public IHttpActionResult GetOkNationalInCity(string cityName)//מחזיר רשימת בוחרים כשירה בעיר מסוימת
        ////{
        ////    if (db.City.Find(cityName) != null)//רק אם מצא עיר כזאת
        ////    {
        ////        return from c in db.National
        ////               where c.city == cityName && c.IsChoose.Equals("false")
        ////               select c;
        ////      }
        ////    else
        ////    {
        ////        return NotFound();

        ////    }
        ////}
        //#endregion

        //#endregion

        //#region מנהל קלפי
        //[HttpGet]
        ////מחזיר אובייקט של אזרח על פי תעודת זהות
        ////[Route("getNational/{tz:string}")]
        //public IQueryable<National> GetNational(string tz)
        //{
        //    var q = from m in db.National
        //            where m.Identity.Equals(tz)
        //            select m;
        //    return q;
        //}

        //[HttpPut]
        //[ResponseType(typeof(void))]
        ////שינוי שדה הבוחר ל-בחר
        //public IHttpActionResult PutNationalToChoose(string identity)
        //{
        //    National n = new National();
        //    var q = from m in db.National
        //            where m.Identity.Equals(identity)
        //            select m.IsChoose;

        //    if (q.Equals(false))
        //    {
        //        n.IsChoose = true;
        //        return Ok();
        //    }
        //    //אם שדה הבוחר שווה ל-לא הוא ישתנה ל-כן
        //    //אבל אם שדה הבוחר מסומן כ-בחר הפונקציה תחזיר דף שגיאה
        //    //כלומר אין באפשרותו לבחור שוב
        //    return NotFound();
        //}
        //#endregion
    }
}
