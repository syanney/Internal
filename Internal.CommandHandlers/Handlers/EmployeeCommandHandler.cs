using Internal.CommandHandlers.Commands.Employee;
using Internal.SqlDataSource.DbContexts;
using Internal.SqlDataSource.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Internal.CommandHandlers.Handlers
{
    public class EmployeeCommandHandler : ICommandHandler<CreateEmployeeCommand>,
                                          ICommandHandler<DeleteEmployeeCommand>,
                                          ICommandHandler<UpdateEmployeeCommand>
    {
        private readonly InternalDbContext _dbContext;

        public EmployeeCommandHandler(InternalDbContext dbContext)
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

        public async Task HandleAsync(UpdateEmployeeCommand command)
        {
            var entity = new EmployeeEntity
            {
                Id = command.Id,
                FirstName = command.FirstName,
                MiddleName = command.MiddleName,
                LastName = command.LastName
            };

            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task HandleAsync(DeleteEmployeeCommand command)
        {
            var entity = new EmployeeEntity { Id = command.EmployeeId };
                        
            _dbContext.Entry(entity).State = EntityState.Deleted;
            await _dbContext.SaveChangesAsync();
        }        
    }
}
