using Microsoft.EntityFrameworkCore;

namespace apiAcercaTest.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {           
        }

        public DbSet<Model.CarDeliveries> CarDeliveries { get; set; }
    }
}
