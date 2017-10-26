using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Internal.Web.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Multiple calls to ConfigureServices append to one another. Multiple calls to Configure or UseStartup on 
        /// the WebHostBuilder replace previous settings.
        /// </remarks>
        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)           
                .UseStartup<Startup>()
                .Build();
    }
}
