using Internal.CommandHandlers.Commands.Employee;
using Internal.SqlDataSource.DbContexts;
using Internal.SqlDataSource.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Internal.CommandHandlers.Handlers
{
    public class DeleteEmployeeCommandHandler : ICommandHandler<DeleteEmployeeCommand>
    {
        private readonly InternalDbContext _dbContext;

        public DeleteEmployeeCommandHandler(InternalDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task HandleAsync(DeleteEmployeeCommand command)
        {
            var entity = new EmployeeEntity { Id = command.EmployeeId };

            _dbContext.Entry(entity).State = EntityState.Deleted;
            await _dbContext.SaveChangesAsync();
        }
    }
}
