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
    public class AuthorizeRolesAttribute : AuthorizeAttribute
    {
        public AuthorizeRolesAttribute(params string[] roles) : base()
        {
            Roles = string.Join(",", roles);
        }
    }

    [EnableCors("*", "*", "*")]
    public class DataController : ApiController
    {
        // Bu eylemi tüm anonim kullanıcılar için ekledim.
        //Kimliği doğrulanmış olsun veya olmasın, her tür talep bu işleme erişebilir.

        private const string AdministratorRole = "admin";
        private const string AssistantRole = "bakim";
        private const string NormalRole = "normal";

        //Sadece Admin Kullanıcılar için
        [AuthorizeRoles(AdministratorRole, AssistantRole,NormalRole)]
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
        [AuthorizeRoles(AdministratorRole, AssistantRole, NormalRole)]
        [HttpGet]
        [Route("api/data/ListTren")]
        public IHttpActionResult ListTren(int id)
        {
            using (VkbAnalizEntities vk = new VkbAnalizEntities())
            {
                var trens = vk.Trens.Select(a => new
                {
                    TrenId = a.TrenId,
                    TrenAd = a.TrenAd,
                    countT = vk.TrenCihazs.Where(b => b.CTrenId == a.TrenId).Count()
                    
                }).ToList();
           
                if (id >= trens.Count)
                    return Json(false);
                else if (id > 0)
                    trens = trens.GetRange((id - 1), (trens.Count - id >= 20 ? 20 : trens.Count - id));
                else
                    trens = trens.GetRange(id, (trens.Count - id >= 20 ? 20 : trens.Count - id));
              
                return Ok(trens);
            }
        }
        //Sadece Admin Kullanıcılar için
        [AuthorizeRoles(AdministratorRole, AssistantRole, NormalRole)]
        [HttpGet]
        [Route("api/data/ListCihaz")]
        public IHttpActionResult ListCihaz(int id)
        {
            using (VkbAnalizEntities vk = new VkbAnalizEntities())
            {
                var tcihazs = vk.TrenCihazs.Where(a => a.CTrenId == id).Select(a => new
                {
                    a.CAd,
                    a.CDurum,
                    a.Cid,
                    a.CSonVeriTar,
                    a.CTrenId
                }).ToList();
                return Ok(tcihazs);
            }
        }
        //Sadece Admin Kullanıcılar için
        [AuthorizeRoles(AdministratorRole, AssistantRole, NormalRole)] //Şuan için herkesce erişim var
        [HttpGet]
        [Route("api/data/ListCihazDetay")]
        public IHttpActionResult ListCihazDetay(int id)
        {            
                using (VkbAnalizEntities vk = new VkbAnalizEntities())
                {               
                    var tcihazd = vk.CihazDetays.Where(a => a.DetayCihazId == id).Select(a => new
                    {
                        a.DetayCihazId,
                        a.DetayErisimSonTar,
                        a.DetayStr,
                        a.DetayId,
                        a.CSurum,
                        a.DSurum,
                        a.YSurum
                    }).ToList();              
                    return Ok(tcihazd);
                }               
            }
        }
    }
