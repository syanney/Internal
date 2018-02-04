using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Internal.Web.Api.Middleware
{
    public class GlobalExceptionHandler
    {
        private readonly RequestDelegate _next;

        public GlobalExceptionHandler(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception exception)
            {
                // TODO: Use a logging library, e.g. Serilog

                //using (StreamWriter writer = File.AppendText(@"D:\steve\Development\VS_Community_2017\Internal\Internal.Web.Api\logfile.txt"))
                //{
                //    writer.WriteLine(exception.ToString());
                //}

                throw;
            }
        }
    }
}
