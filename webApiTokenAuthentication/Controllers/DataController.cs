using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
    }
}
