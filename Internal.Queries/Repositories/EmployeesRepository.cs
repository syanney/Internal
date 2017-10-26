using Internal.Queries.Dtos;
using Internal.SqlDataSource.DbContexts;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Internal.Queries.Repositories
{
    public class EmployeesRepository : IEmployeesRepository
    {
        private readonly InternalDbContext _dbContext;

        public EmployeesRepository(InternalDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<EmployeeDetailsDto> GetEmployeeByIdAsync(int employeeId)
        {
            var employeeEntity = await _dbContext.Employees.SingleOrDefaultAsync(employee => employee.Id == employeeId);
            if (employeeEntity != null)
            {
                return new EmployeeDetailsDto
                {
                    Id = employeeEntity.Id,
                    FirstName = employeeEntity.FirstName,
                    MiddleName = employeeEntity.MiddleName,
                    LastName = employeeEntity.LastName
                };
            }

            return null;
        }

        public async Task<IEnumerable<EmployeeSummaryDto>> GetEmployeesAsync()
        {
            var query = await _dbContext.Employees.ToListAsync();

            return query.Select(employeeEntity => new EmployeeSummaryDto
            {
                Id = employeeEntity.Id,
                FirstName = employeeEntity.FirstName,
                LastName = employeeEntity.LastName
            });
        }
    }
}
