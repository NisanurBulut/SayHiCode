using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;
using System.Web.Http;
using System.Security.Claims;
using System.Collections.Generic;

[assembly: OwinStartup(typeof(webApiTokenAuthentication.Startup))]

namespace webApiTokenAuthentication
{
    public class Startup
    {
  
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
         
                //CORS istklerine izin ver
                app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

                var myProvider = new MyAuthorizationServerProvider();
                OAuthAuthorizationServerOptions options = new OAuthAuthorizationServerOptions
                {
                    AllowInsecureHttp = true,
                    TokenEndpointPath = new PathString("/token"),
                    AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),                   
                    Provider = myProvider,
                   
                };
                app.UseOAuthAuthorizationServer(options);
                app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());


                HttpConfiguration config = new HttpConfiguration();
                WebApiConfig.Register(config);
            
        }
       
    }
}
