using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace WebApi.Controllers
{
    [EnableCors(origins:"*", headers:"*", methods:"*")]
    [RoutePrefix("api/City")]
    public class CityController : ApiController
    {
        //מופע מסוג המסד נתונים
        DAL.ComputerizedVotingNewEntities db = new ComputerizedVotingNewEntities();

        // GET api/<controller>
        [HttpGet]
        [Route("getAllCities")]
        public List<Models.City> GetAllCities()//מחזיר את רשימת הערים
        {
            List<Models.City> cities = new List<Models.City>();
            foreach (var item in db.City)
            {
                cities.Add(Models.City.convertToDto(item));
            }
            return cities ;
        }


        //הגדלת הכמות שבחרו בכל עיר
        [HttpGet]
        [ResponseType(typeof(City))]
        [Route("PutNowCountValidInCity/{cityId}")]
        public IHttpActionResult PutNowCountValidInCity(int cityId)
        {
            City city = db.City.Single(x => x.id == cityId);
            city.nowCountValid+=1;
            db.SaveChanges();
            return Ok(city);
        }
    }
}