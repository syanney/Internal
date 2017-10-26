using Internal.Web.UI.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Internal.Web.UI
{
    public class Startup
    {
        private IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime, before the Configure() method . Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.Configure<ApplicationDetailsOptions>(_configuration.GetSection("ApplicationDetails"));
        }

        // This method gets called by the runtime, after the ConfigureServices(). Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {           
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            // Had to add this, because .js files referenced in _Layout.cshtml were resulting in a 404 from the browser.
            app.UseStaticFiles();

            app.UseMvcWithDefaultRoute();
            app.UseMvc(routes =>
            {             
                // Do this in order to delegate routing to angular for urls that don't match any of our controllers/actions.
                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });           
        }
    }
}
