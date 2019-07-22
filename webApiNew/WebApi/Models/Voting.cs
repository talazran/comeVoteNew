using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Voting
    {

        public int kodVote { get; set; }
        public DateTime dateVote { get; set; }
        public TimeSpan ballotsOpen { get; set; }
        public TimeSpan ballotsClose { get; set; }

        public virtual ICollection<FinalResults> FinalResults { get; set; }

        public static DAL.Voting ConvertToDB(Models.Voting vot)
        {
            return new DAL.Voting()
            {
                kodVote= vot.kodVote,
                dateVote = vot.dateVote,
                ballotsOpen = vot.ballotsOpen,
                ballotsClose=vot.ballotsClose,
               // FinalResults = Models.FinalResults.ConvertToDB(vot.FinalResults)
            };
        }

        public static Models.Voting ConvertToDto(DAL.Voting vot)
        {
            if (vot == null)
                return null;
            return new Models.Voting()
            {
                kodVote = vot.kodVote,
                dateVote = vot.dateVote,
                ballotsOpen = vot.ballotsOpen,
                ballotsClose = vot.ballotsClose,
                // FinalResults = Models.FinalResults.ConvertToDB(vot.FinalResults)

            };
        }

    }
}