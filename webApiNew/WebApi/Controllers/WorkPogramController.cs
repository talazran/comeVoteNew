using DAL;
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
        ComputerizedVotingNewEntities db = new ComputerizedVotingNewEntities();

        [HttpGet]
        [Route("api/getTimeVote")]
        public Models.Voting GetTimeVote()//מחזיר את רשימת הערים
        {          
          return Models.Voting.ConvertToDto( db.Voting.OrderByDescending(p => p.dateVote).FirstOrDefault());
        }
    }
}
