using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Manager
    {
        public string MIdentity { get; set; }
        public string MFullName { get; set; }
        public string MUserName { get; set; }
        public string MPassword { get; set; }
        public string NumStatus { get; set; }
        public Nullable<int> MCity { get; set; }
        public Nullable<int> MNumBallotBox { get; set; }
        public string MailM { get; set; }

        public virtual BallotBox BallotBox { get; set; }
        public virtual City City { get; set; }
        public virtual ManagersStatus ManagersStatus { get; set; }

        public static Models.Manager ConvertToDto(DAL.Managers man)
        {
            return new Manager()
            {
                MailM = man.MailM,
                MCity = man.MCity,
                MFullName = man.MFullName,
                MIdentity = man.MIdentity,
                MNumBallotBox = man.MNumBallotBox,
                MPassword = man.MPassword,
                NumStatus = man.NumStatus,
                ManagersStatus = Models.ManagersStatus.ConvertToDto(man.ManagersStatus),
                BallotBox = Models.BallotBox.ConvertToDto(man.BallotBox),
                City = Models.City.convertToDto(man.City)
            };
        }


        public static DAL.Managers ConvertToDAL(Models.Manager man)
        {
            return new DAL.Managers()
            {
                MailM = man.MailM,
                MCity = man.MCity,
                MFullName = man.MFullName,
                MIdentity = man.MIdentity,
                MNumBallotBox = man.MNumBallotBox,
                MPassword = man.MPassword,
                NumStatus = man.NumStatus,
                ManagersStatus = man.ManagersStatus!=null? Models.ManagersStatus.ConvertToDB(man.ManagersStatus):null,
                BallotBox = man.BallotBox!=null? Models.BallotBox.ConvertToDB(man.BallotBox):null,
                City = man.City!=null ? Models.City.convertToDB(man.City) : null
            };
        }
    }
}