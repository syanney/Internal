using Internal.CommandHandlers.Commands.Employee;
using Internal.SqlDataSource.DbContexts;
using Internal.SqlDataSource.Entities;
using System.Threading.Tasks;

namespace Internal.CommandHandlers.Handlers
{
    public class CreateEmployeeCommandHandler : ICommandHandler<CreateEmployeeCommand>
    {
        private readonly InternalDbContext _dbContext;

        public CreateEmployeeCommandHandler(InternalDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task HandleAsync(CreateEmployeeCommand command)
        {
            var entity = new EmployeeEntity
            {
                FirstName = command.FirstName,
                MiddleName = command.MiddleName,
                LastName = command.LastName
            };

            _dbContext.Employees.Add(entity);
            await _dbContext.SaveChangesAsync();
        }
    }
}
