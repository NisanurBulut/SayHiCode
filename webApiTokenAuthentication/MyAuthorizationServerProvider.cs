using Microsoft.Owin.Security.OAuth;
using System.Security.Claims;
using System.Threading.Tasks;
using webApiTokenAuthentication.Models;
using System.Linq;
namespace webApiTokenAuthentication
{
    public class MyAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {

        VkbAnalizEntities vk = new VkbAnalizEntities();
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated(); // 
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            Kullanici _kulllanici = vk.Kullanicis.Where(a=>a.UAd==context.UserName && a.UPass==context.Password).FirstOrDefault();

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);

            if (_kulllanici.PID==0)//admin
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, "admin"));
                identity.AddClaim(new Claim("username", "admin"));
                identity.AddClaim(new Claim(ClaimTypes.Name, _kulllanici.UAd));
                context.Validated(identity);
            }
            else if (_kulllanici.PID ==1 )//bakım
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, "bakim"));
                identity.AddClaim(new Claim("username", "bakim"));
                identity.AddClaim(new Claim(ClaimTypes.Name, "Bakim Kullanicisi"));
                context.Validated(identity);
            }
            else if (_kulllanici.PID == 2)//normal
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, "normal"));
                identity.AddClaim(new Claim("username", "user"));
                identity.AddClaim(new Claim(ClaimTypes.Name, "Normal Kullanici"));
                context.Validated(identity);
            }
            else
            {
                context.SetError("invalid_grant", "Provided username and password is incorrect");
                return;
            }
        }
    }
}