using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Internal.CommandHandlers.Handlers;
using Castle.Facilities.TypedFactory;
using System.Reflection;

namespace Internal.CommandHandlers.DependencyInjection.Installers
{
    public class CommandHandlersInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Component.For<ICommandHandlerFactory>()
                                        .AsFactory()
                                        .LifestyleTransient());
            container.Register(Component.For<ICommandExecutor>()
                                        .ImplementedBy<CommandExecutor>()
                                        .LifestyleTransient()); 
            container.Register(Classes.FromAssemblyInThisApplication(Assembly.GetExecutingAssembly())
                                        .BasedOn(typeof(ICommandHandler<>))
                                        .WithServiceAllInterfaces()
                                        .LifestyleTransient());
        }
    }
}
