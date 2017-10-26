using System;

namespace Internal.Web.Api.Options
{
    public class CorsOptions
    {
        public string PermittedOriginsUrls { get; set; }
        public string[] PermittedOriginsUrlsArray => PermittedOriginsUrls.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
    }
}
