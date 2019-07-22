using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class FinalResults
    {

        public int idFaction { get; set; }
        public int idVote { get; set; }
        public int numberOfVote { get; set; }

        public virtual Factions Factions { get; set; }
        public virtual Voting Voting { get; set; }


        public static DAL.FinalResults ConvertToDB(Models.FinalResults Finalres)
        {
            return new DAL.FinalResults()
            {
                idFaction = Finalres.idFaction,
                idVote = Finalres.idVote,
                numberOfVote = Finalres.numberOfVote,
                Factions = Models.Factions.ConvertToDB(Finalres.Factions)
                //Voting = Models..convertToDB(bal.City)
            };
        }

        public static Models.FinalResults ConvertToDto(DAL.FinalResults Finalres)
        {
            if (Finalres == null)
                return null;
            return new Models.FinalResults()
            {
                idFaction = Finalres.idFaction,
                idVote = Finalres.idVote,
                numberOfVote = Finalres.numberOfVote,
                Factions = Models.Factions.ConvertToDto(Finalres.Factions)
                // Voting= Models..convertToDto(bal.City)

            };
        }






    }
}