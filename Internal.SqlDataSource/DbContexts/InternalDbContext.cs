using Internal.SqlDataSource.Entities;
using Microsoft.EntityFrameworkCore;

namespace Internal.SqlDataSource.DbContexts
{
    public class InternalDbContext : DbContext
    {
        public InternalDbContext(DbContextOptions<InternalDbContext> options) : base(options)
        {           
        }

        public DbSet<EmployeeEntity> Employees { get; set; }
    }
}
