using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class National
    {
        public string Identity { get; set; }
        public string fullName { get; set; }
        public string street { get; set; }
        public string zipCode { get; set; }
        public string numHouse { get; set; }
        public int cityId { get; set; }
        public int numBallot { get; set; }
        public bool IsChoose { get; set; }

        public virtual City City { get; set; }



        public static DAL.National ConvertToDB(Models.National nati)
        {
            return new DAL.National()
            {
                Identity = nati.Identity,
                fullName = nati.fullName,
                street = nati.street,
                zipCode = nati.zipCode,
                numHouse = nati.numHouse,
                cityId = nati.cityId,
                numBallot = nati.numBallot,
                IsChoose = nati.IsChoose,

                City = Models.City.convertToDB(nati.City)
            };
        }

        public static Models.National ConvertToDto(DAL.National nati)
        {
            if (nati == null)
                return null;
            return new Models.National()
            {
                Identity = nati.Identity,
                fullName = nati.fullName,
                street = nati.street,
                zipCode = nati.zipCode,
                numHouse = nati.numHouse,
                cityId = nati.cityId,
                numBallot = nati.numBallot,
                IsChoose = nati.IsChoose,

                City = Models.City.convertToDto(nati.City)
            };
        }
    }
}