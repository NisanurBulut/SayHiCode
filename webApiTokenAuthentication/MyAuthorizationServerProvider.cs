using Microsoft.Owin.Security.OAuth;
using System.Security.Claims;
using System.Threading.Tasks;
using webApiTokenAuthentication.Models;
using System.Linq;
using Microsoft.Owin.Security;
using System.Collections.Generic;
using System.Web.Http.Cors;
using Microsoft.Owin.Security.Infrastructure;

namespace webApiTokenAuthentication
{
    [EnableCors("*", "*", "*")]
    public class MyAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
      
        VkbAnalizEntities vk = new VkbAnalizEntities();
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
           
            context.Validated(); // 
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var kullanicilist = vk.Kullanicis.ToList();
            Kullanici _kulllanici = vk.Kullanicis.Where(a=>a.UAd==context.UserName && a.UPass==context.Password).FirstOrDefault();

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            var props = new AuthenticationProperties(new Dictionary<string, string>
                {
                    {
                "role", "admin"
                }
                });
            if (_kulllanici.PID==1)//admin
            {
               
                identity.AddClaim(new Claim(ClaimTypes.Role, "admin"));
                identity.AddClaim(new Claim("username", "admin"));
                identity.AddClaim(new Claim(ClaimTypes.Name, _kulllanici.UAd));
                AuthenticationProperties properties = CreateProperties(context.UserName,
                    Newtonsoft.Json.JsonConvert.SerializeObject(identity.RoleClaimType));
                var ticket = new AuthenticationTicket(identity, props);
                context.Validated(ticket);
              
            }
            else if (_kulllanici.PID ==2 )//bakım
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, "bakim"));
                identity.AddClaim(new Claim("username", "bakim"));
                identity.AddClaim(new Claim(ClaimTypes.Name, "Bakim Kullanicisi"));
                var ticket = new AuthenticationTicket(identity, props);
                context.Validated(ticket);
            }
            else if (_kulllanici.PID == 3)//normal
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, "normal"));
                identity.AddClaim(new Claim("username", "user"));
                identity.AddClaim(new Claim(ClaimTypes.Name, "Normal Kullanici"));
                var ticket = new AuthenticationTicket(identity, props);
                context.Validated(ticket);
            }
            else
            {
                context.SetError("invalid_grant", "Provided username and password is incorrect");
                return;
            }
            
        }
     
        public static AuthenticationProperties CreateProperties(string userName, string Roles)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
        {
            { "userName", userName },
            {"roles",Roles}
        };
            return new AuthenticationProperties(data);
        }
    }
}