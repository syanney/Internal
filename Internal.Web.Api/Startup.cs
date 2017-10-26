using Castle.Facilities.TypedFactory;
using Castle.Windsor;
using Castle.Windsor.Installer;
using Castle.Windsor.MsDependencyInjection;
using Internal.SqlDataSource.DbContexts;
using Internal.Web.Api.Middleware;
using Internal.Web.Api.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Reflection;

namespace Internal.Web.Api
{
    public class Startup
    {
        private IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }
      
        /// <summary>
        /// This method gets called by the runtime, before the Configure() method. Use this method to add services to the container.
        /// </summary>      
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<InternalDbContext>(options => options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));   
            services.AddCors();
            services.AddMvc();
            services.Configure<CorsOptions>(_configuration.GetSection("Cors"));

            // Note:
            // Each services.Add<ServiceName> extension method adds(and potentially configures) services.
            // For example, services.AddMvc() adds the services MVC requires.It's recommended that you 
            // follow this convention, placing extension methods in the Microsoft.Extensions.DependencyInjection namespace, 
            // to encapsulate groups of service registrations.                     

            // Note: 
            // If you register the same DI mapping via IServiceCollection and also 
            // via Castle Windsor, the regisatration that was done first wins. Therefore, all
            // registrations of custom types should be done via Castle Windsor.

            IServiceProvider serviceProvider = SetupWindsorContainer(services);
            return serviceProvider;
        }
        
        /// <summary>
        /// This method gets called by the runtime, after the ConfigureServices() method. Use this method to configure the HTTP request pipeline.
        /// </summary>    
        /// <remarks>
        /// The order that middleware components are added in the Configure method defines the order in which 
        /// they are invoked on requests, and the reverse order for the response. This ordering is critical for 
        /// security, performance, and functionality.
        /// </remarks>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IOptionsSnapshot<CorsOptions> corsOptions)
        {
            // Exception-handling delegates need to be called early in the pipeline, so they can catch exceptions 
            // that occur in later stages of the pipeline.            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            // This must come after the call to app.UseDeveloperExceptionPage(), for it to work.
            app.UseGlobalExceptionHandler();            

            app.UseCors(builder => builder.WithOrigins(corsOptions.Value.PermittedOriginsUrlsArray)
                                        .AllowAnyMethod() // Refers to HTTP methods
                                        .AllowAnyHeader());
            app.UseMvc();
        }       

        private IServiceProvider SetupWindsorContainer(IServiceCollection services)
        {
            // Needed to install the Castle.Windsor.MsDependencyInjection nuget package.
            
            var container = new WindsorContainer();
            container.Kernel.AddFacility<TypedFactoryFacility>();
            ActivateAllWindsorInstallers(container);
            return WindsorRegistrationHelper.CreateServiceProvider(container, services);
        }

        private static void ActivateAllWindsorInstallers(WindsorContainer container)
        {
            container.Install(FromAssembly.InThisApplication(Assembly.GetExecutingAssembly()));
        }        
    }
}
