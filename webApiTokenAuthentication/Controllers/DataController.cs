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
    public class DataController : ApiController
    {
        // Bu eylemi tüm anonim kullanıcılar için ekledim.
        //Kimliği doğrulanmış olsun veya olmasın, her tür talep bu işleme erişebilir.
      
        [AllowAnonymous]
        [HttpGet]
        [Route("api/data/forall")]
        public IHttpActionResult Get()
        {
            return Ok("Şu an Server'da zaman: " + DateTime.Now.ToString());
        }


        //Yönetici kullanıcısı veya normal kullanıcı olsun, kimliği doğrulanmış tüm kullanıcı türleri için bu eylemi ekledim.
        [Authorize]
        [HttpGet]
        [Route("api/data/authenticate")]
        public IHttpActionResult GetForAuthenticate()
        {
            var identity = (ClaimsIdentity)User.Identity;
            return Ok("Merhaba " + identity.Name);
        }
        //Sadece Admin Kullanıcılar için
        [Authorize(Roles = "admin")]
        [HttpGet]
        [Route("api/data/authorize")]
        public IHttpActionResult GetForAdmin()
        {
            var identity = (ClaimsIdentity)User.Identity;
            var roles = identity.Claims
                        .Where(c => c.Type == ClaimTypes.Role)
                        .Select(c => c.Value);
            return Ok("Merhaba " + identity.Name + " Role: " + string.Join(",", roles.ToList()));
        }
        //Sadece Admin Kullanıcılar için
        [Authorize(Roles = "admin")]
        [HttpGet]     
        [Route("api/data/ListCihaz")]
        public IHttpActionResult ListCihaz()
        {
            using (VkbAnalizEntities vk = new VkbAnalizEntities())
            {

                var trens = vk.Trens.Select(a => new
                {
                    a.TrenId,
                    a.TrenAd
                }).ToList();
                return Ok(trens);
            }
           
        }
    }
}
