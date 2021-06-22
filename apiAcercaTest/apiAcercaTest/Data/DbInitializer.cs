using apiAcercaTest.Model;
using System;
using System.Linq;

namespace apiAcercaTest.Data
{
    public class DbInitializer
    {
        public static void Initialize(DataContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.CarDeliveries.Any())
            {
                return;   // DB has been seeded
            }
            var carDeliveries = new System.Collections.Generic.List<CarDeliveries> { };

            for (var i = 1; i < 100; i++)
            {
                carDeliveries.Add(new CarDeliveries
                {
                    OrderNumber = i,
                    VinNumber = i + "S3BMHB68B3286050",
                    Model = "Car model " + i,
                    LicensePlate = i + "2345GTH".Substring(i.ToString().Length,7- i.ToString().Length),
                    DeliveryDate = DateTime.Now
                });
            }

            //var carDeliveries = new CarDeliveries[]
            //{
            //    new CarDeliveries {OrderNumber = 1, VinNumber ="1S3BMHB68B3286050", Model = "Toyota Yaris",LicensePlate = "2345GTH", DeliveryDate = DateTime.Now},
            //    new CarDeliveries {OrderNumber = 2, VinNumber ="2S3BMHB68B3286050", Model = "Toyota Corolla",LicensePlate = "2345GTH", DeliveryDate = DateTime.Now},
            //    new CarDeliveries {OrderNumber = 3, VinNumber ="3S3BMHB68B3286050", Model = "Toyota Auris",LicensePlate = "2345GTH", DeliveryDate = DateTime.Now},
            //    new CarDeliveries {OrderNumber = 4, VinNumber ="4S3BMHB68B3286050", Model = "Toyota Prius",LicensePlate = "2345GTH", DeliveryDate = DateTime.Now},
            //    new CarDeliveries {OrderNumber = 5, VinNumber ="5S3BMHB68B3286050", Model = "Toyota Land Cruiser",LicensePlate = "2345GTH", DeliveryDate = DateTime.Now},
            //    new CarDeliveries {OrderNumber = 6, VinNumber ="6S3BMHB68B3286050", Model = "Toyota Rav4",LicensePlate = "2345GTH", DeliveryDate = DateTime.Now},
            //};

            foreach (var carDelivery in carDeliveries)
            {
                context.CarDeliveries.Add(carDelivery);
            }
            context.SaveChanges();            
        }
    }
}
