using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class WorkPogramController : ApiController
    {
        DAL.ComputerizedVoting1Entities db = new DAL.ComputerizedVoting1Entities();

        [HttpGet]
        [Route("api/getTimeVote")]
        public Models.Voting GetTimeVote()//מחזיר את רשימת הערים
        {          
          return Models.Voting.ConvertToDTO( db.Voting.OrderByDescending(p => p.dateVote).FirstOrDefault());
        }
    }
}
