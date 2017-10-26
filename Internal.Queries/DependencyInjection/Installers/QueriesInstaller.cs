using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Internal.Queries.Repositories;

namespace Internal.Queries.DependencyInjection.Installers
{
    public class QueriesInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Component.For<IEmployeesRepository>()
                                        .ImplementedBy<EmployeesRepository>()
                                        .LifestyleTransient());
        }
    }
}
