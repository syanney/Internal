using Internal.CommandHandlers;
using Internal.CommandHandlers.Commands.Employee;
using Internal.Queries.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Threading.Tasks;

namespace Internal.Web.Api.Controllers
{
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly IEmployeesRepository _employeesRepository;
        private readonly ICommandExecutor _commandExecutor;

        public EmployeesController(IEmployeesRepository employeesRepository,
                                   ICommandExecutor commandExecutor)
        {
            _employeesRepository = employeesRepository;
            _commandExecutor = commandExecutor;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployeesList()
        {           
            return Ok(await _employeesRepository.GetEmployeesAsync());
        }
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployeeById(int id)
        {
            return Ok(await _employeesRepository.GetEmployeeByIdAsync(id));
        }
        
        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody]CreateEmployeeCommand command)
        {
            // TODO: DO WE NEED TO GET/RETURN THE NEWLY CREATED EMPLOYEE AFTER CREATION?
            await _commandExecutor.ExecuteAsync(command);

            // Need to return HttpStatusCode.NoContent because of a bug in .net core 2.0
            return StatusCode((int)HttpStatusCode.NoContent);
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, [FromBody]UpdateEmployeeCommand command)
        {
            await _commandExecutor.ExecuteAsync(command);
            // Need to return HttpStatusCode.NoContent because of a bug in .net core 2.0
            return StatusCode((int)HttpStatusCode.NoContent);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var command = new DeleteEmployeeCommand { EmployeeId = id };
            await _commandExecutor.ExecuteAsync(command);
            return StatusCode((int)HttpStatusCode.NoContent);
        }
    }
}
