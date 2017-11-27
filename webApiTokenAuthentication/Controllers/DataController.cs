using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

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
            return Ok("Hello " + identity.Name);
        }
    }
}
