using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class City
    {
        public int id { get; set; }
        public string areaKod { get; set; }
        public string cityName { get; set; }
        public int nowCountValid { get; set; }
        public int allCountValid { get; set; }

        public static Models.City convertToDto(DAL.City city)
        {
            return new City()
            {
                allCountValid = city.allCountValid,
                areaKod = city.areaKod,
                cityName = city.cityName,
                nowCountValid = city.nowCountValid,
                id = city.id
            };
        }

        public static DAL.City convertToDB(Models.City city)
        {
            return new DAL.City()
            {
                allCountValid = city.allCountValid,
                areaKod = city.areaKod,
                cityName = city.cityName,
                nowCountValid = city.nowCountValid,
                id = city.id
            };
        }
    }
}