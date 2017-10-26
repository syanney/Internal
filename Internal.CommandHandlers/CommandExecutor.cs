using Internal.CommandHandlers.Commands;
using Internal.CommandHandlers.Handlers;
using System.Threading.Tasks;

namespace Internal.CommandHandlers
{
    public class CommandExecutor : ICommandExecutor
    {
        private readonly ICommandHandlerFactory _commandHandlerFactory;

        public CommandExecutor(ICommandHandlerFactory commandHandlerFactory)
        {
            _commandHandlerFactory = commandHandlerFactory;
        }

        public async Task ExecuteAsync<TCommand>(TCommand command) where TCommand : Command
        {
            ICommandHandler<TCommand> handler = _commandHandlerFactory.Create<TCommand>();

            try
            {
                await handler.HandleAsync(command);
            }
            finally
            {
                _commandHandlerFactory.Release(handler);
            }
        }
    }
}
