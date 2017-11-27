using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using webApiTokenAuthentication.Models;

namespace webApiTokenAuthentication.Controllers
{
    public class UserController : ApiController
    {
        //[Authorize]
        [AllowAnonymous]
        [HttpPost]
        [Route("api/user/signup")]
        public IHttpActionResult Signup(User userData)
        {
            var identity = (ClaimsIdentity)User.Identity;
            return Ok("Merhaba " + identity.Name);
        }
    }
}
