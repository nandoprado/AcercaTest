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

            foreach (var carDelivery in carDeliveries)
            {
                context.CarDeliveries.Add(carDelivery);
            }
            context.SaveChanges();            
        }
    }
}
