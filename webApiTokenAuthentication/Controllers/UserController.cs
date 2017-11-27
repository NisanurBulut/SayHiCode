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
        //Yönetici kullanıcısı veya normal kullanıcı olsun, kimliği doğrulanmış tüm kullanıcı türleri için bu eylemi ekledim.
        [Authorize]
        [HttpGet]
        [Route("api/data/authenticate")]
        public IHttpActionResult GetDataOfTrens()
        {
            var identity = (ClaimsIdentity)User.Identity;
            return Ok("Merhaba " + identity.Name);
        }
    }
}
