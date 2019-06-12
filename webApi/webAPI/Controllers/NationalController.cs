using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
namespace webAPI.Controllers
{
    //[RoutePrefix("api/National")]

    public class NationalController : ApiController
    {
        ComputerizedVotingEntities1 db = new ComputerizedVotingEntities1();

        //    //צפייה בפתקי מפלגות
        //    // GET api/<controller>
        //[HttpGet]
        ////[Route("getAllFactionPic")]
        //public List<string> GetAllFactionPic()
        //{
        //    var q = from f in db.Factions
        //            select f.factionPic;
        //    return q.ToList();
        //}

        //    //החזרת אוסף של האזרחים בקלפי הנוכחי
        //    [HttpGet]
        //    //[Route("getNationalInBallotBox/{numBallotBox:string}/{cityOfManager:string}")]
        //    public IHttpActionResult GetNationalInBallotBox(string numBallotBox, string cityOfBallotBox)
        //    {
        //        //לקרוא לפונקציה שמצפינה את הסיסמא שהכניס
        //        //במקום ה-password להשתמש במשתנה שהוחזר החדש שמכיל את ההצפנה


        //        //שליפת קוד עיר לפי שם העיר שהוזנה
        //        var q = from c in db.City
        //                where c.city == cityOfBallotBox
        //                select c.id;

        //        //שליפת האזרחים לפי קוד העיר ולפי מספר קלפי
        //        var nationalInBallotBox = from n in db.National
        //                                  where n.cityId == Convert.ToInt32(q) && n.numBallot == numBallotBox
        //                                  select n;

        //        return Ok(nationalInBallotBox.ToList());
        //    }

        //    // GET api/<controller>/5
        //    public string Get(int id)
        //    {
        //        return "value";
        //    }

        //    // POST api/<controller>
        //    public void Post([FromBody]string value)
        //    {
        //    }

        //    // PUT api/<controller>/5
        //    public void Put(int id, [FromBody]string value)
        //    {
        //    }

        //    // DELETE api/<controller>/5
        //    public void Delete(int id)
        //    {
        //    }
    }
}