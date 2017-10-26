using Internal.Queries.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Internal.Queries.Repositories
{
    public interface IEmployeesRepository
    {
        Task<IEnumerable<EmployeeSummaryDto>> GetEmployeesAsync();
        Task<EmployeeDetailsDto> GetEmployeeByIdAsync(int employeeId);        
    }
}
