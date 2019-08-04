using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Faction
    {
        public int Id { get; set; }
        public string factionName { get; set; }
        public int voters { get; set; }
        public string leadersMail { get; set; }
        public string factionPic { get; set; }
        public bool IsAgree { get; set; }

        //public  FinalResults FinalResults { get; set; }
        public static DAL.Factions ConvertToDB(Faction faction)
        {
            return new DAL.Factions()
            {
                factionName = faction.factionName,
                factionPic = faction.factionPic,
                Id = faction.Id,
                IsAgree = faction.IsAgree,
                leadersMail = faction.leadersMail,
                voters = faction.voters
            };
        }

        public static Models.Faction ConvertToDto(DAL.Factions faction)
        {
            return new Models.Faction()
            {
                factionName = faction.factionName,
                factionPic = faction.factionPic,
                Id = faction.Id,
                IsAgree = faction.IsAgree,
                leadersMail = faction.leadersMail,
                voters = faction.voters
            };
        }
    }
}