using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class BallotBox
    {
   
        public int id { get; set; }
        public int numBallot { get; set; }
        public int cityId { get; set; }

        public virtual City City { get; set; }

        public static DAL.BallotBox ConvertToDB(Models.BallotBox bal)
        {
            return new DAL.BallotBox()
            {
                numBallot=bal.numBallot,
                id=bal.id,
                cityId=bal.cityId,
                City=Models.City.convertToDB(bal.City)
            };
        }

        public static Models.BallotBox ConvertToDto(DAL.BallotBox bal)
        {
            if (bal == null)
                return null;
            return new Models.BallotBox()
            {
                numBallot = bal.numBallot,
                id = bal.id,
                cityId = bal.cityId,
                City = Models.City.convertToDto(bal.City)
            };
        }
    }
}