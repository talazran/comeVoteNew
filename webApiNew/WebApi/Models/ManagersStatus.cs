using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class ManagersStatus
    {
        public string numStatus { get; set; }
        public string status { get; set; }

        public static DAL.ManagersStatus ConvertToDB(Models.ManagersStatus man)
        {
            return new DAL.ManagersStatus()
            {
                numStatus = man.numStatus,
                status = man.status
            };
        }

        public static Models.ManagersStatus ConvertToDto(DAL.ManagersStatus man)
        {
            return new Models.ManagersStatus()
            {
                numStatus = man.numStatus,
                status = man.status
            };
        }
    }
}