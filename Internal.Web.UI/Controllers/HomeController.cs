using Microsoft.AspNetCore.Mvc;

namespace Internal.Web.UI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {            
            return View();
        }
    }
}