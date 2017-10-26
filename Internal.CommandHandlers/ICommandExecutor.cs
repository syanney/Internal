using Internal.CommandHandlers.Commands;
using System.Threading.Tasks;

namespace Internal.CommandHandlers
{
    public interface ICommandExecutor
    {
        Task ExecuteAsync<TCommand>(TCommand command) where TCommand : Command;
    }
}
