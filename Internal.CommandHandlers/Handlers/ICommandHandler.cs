using Internal.CommandHandlers.Commands;
using System.Threading.Tasks;

namespace Internal.CommandHandlers.Handlers
{
    public interface ICommandHandler<in TCommand> where TCommand : Command
    {
        Task HandleAsync(TCommand command);
    }
}
