using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Factions
    {
        public int Id { get; set; }
        public string factionName { get; set; }
        public int voters { get; set; }
        public string leadersMail { get; set; }
        public string factionPic { get; set; }
        public string factionImageBase { get; set; }
        public bool IsAgree { get; set; }

        public virtual FinalResults FinalResults { get; set; }

        public static DAL.Factions ConvertToDB(Models.Factions fac)
        {
            return new DAL.Factions()
            {
                Id = fac.Id,
                factionName = fac.factionName,
                voters = fac.voters,
                leadersMail = fac.leadersMail,
                factionPic = fac.factionPic,
                IsAgree = fac.IsAgree,

                FinalResults = Models.FinalResults.ConvertToDB(fac.FinalResults)
            };
        }

        public static Models.Factions ConvertToDto(DAL.Factions fac)
        {
            if (fac == null)
                return null;
            return new Models.Factions()
            {
                Id = fac.Id,
                factionName = fac.factionName,
               // voters = fac.voters,
                leadersMail = fac.leadersMail,
                factionPic = fac.factionPic,
                IsAgree = fac.IsAgree,

               // FinalResults = Models.FinalResults.ConvertToDto(fac.FinalResults)
            };
        }
    }
}