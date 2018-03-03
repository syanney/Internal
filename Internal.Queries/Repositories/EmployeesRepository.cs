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
            EmployeeDetailsDto employeeDetailsDto = null;

            var employeeEntity = await _dbContext.Employees.SingleOrDefaultAsync(employee => employee.Id == employeeId);
            if (employeeEntity != null)
            {
                employeeDetailsDto = new EmployeeDetailsDto(employeeEntity.Id, employeeEntity.FirstName, employeeEntity.MiddleName, employeeEntity.LastName);                
            }

            return employeeDetailsDto;
        }

        public async Task<IEnumerable<EmployeeSummaryDto>> GetEmployeesAsync()
        {
            var query = await _dbContext.Employees.ToListAsync();
            return query.Select(employeeEntity => new EmployeeSummaryDto(employeeEntity.Id, employeeEntity.FirstName, employeeEntity.LastName));
        }
    }
}
