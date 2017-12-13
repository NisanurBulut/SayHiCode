using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Http.Cors;
using webApiTokenAuthentication.Models;

namespace webApiTokenAuthentication.Controllers
{
    [EnableCors("*", "*", "*")]
    public class UserController : ApiController
    {
        //[Authorize]
        [AllowAnonymous]
        [HttpPost]
        [Route("api/user/signup")]
        public IHttpActionResult Signup(User userData)
        {
            using (VkbAnalizEntities vk = new VkbAnalizEntities())
            {
                Kullanici u = new Kullanici();
                u.UAd = userData.username;
                u.UPass = userData.password;
                u.PID = 0;//şimdilik default  ekliyoryum
                vk.Kullanicis.Add(u);
                vk.SaveChanges();               
                return Ok(u);
            }
            
        }
        [Authorize]
        [HttpGet]
        public IHttpActionResult GetClaims()
        {
            var identity = User.Identity as ClaimsIdentity;
           
            var claims = from c in identity.Claims
                         select new
                         {
                             subject = c.Subject.Name,
                             type = c.Type,
                             value = c.Value
                         };

            return Ok(claims);
        }
    }
}
