using Internal.CommandHandlers.Commands;
using Internal.CommandHandlers.Handlers;

namespace Internal.CommandHandlers
{
    public interface ICommandHandlerFactory
    {
        ICommandHandler<TCommand> Create<TCommand>() where TCommand : Command;
        void Release<TCommand>(ICommandHandler<TCommand> handler) where TCommand : Command;
    }
}
