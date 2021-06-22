using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace apiAcercaTest.Model
{
    public class CarDeliveries
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid ID { get; set; }
        public long OrderNumber { get; set; }

        public string VinNumber { get; set; }

        public string Model { get; set; }

        public string LicensePlate { get; set; }

        public DateTime DeliveryDate { get; set; }
    }
}
