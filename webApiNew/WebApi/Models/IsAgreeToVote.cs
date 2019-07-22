using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class IsAgreeToVote
    {
        public int id { get; set; }
        public string tz { get; set; }

        public static DAL.IsAgreeToVote ConvertToDB(Models.IsAgreeToVote isAgree)
        {
            return new DAL.IsAgreeToVote()
            {
                id = isAgree.id,
                tz = isAgree.tz
             };
        }

        public static Models.IsAgreeToVote ConvertToDto(DAL.IsAgreeToVote isAgree)
        {
            if (isAgree == null)
                return null;
            return new Models.IsAgreeToVote()
            {
                id = isAgree.id,
                tz = isAgree.tz

            };
        }
    }
}