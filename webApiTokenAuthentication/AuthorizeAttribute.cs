using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webApiTokenAuthentication
{
    public class AuthorizeAttribute : System.Web.Http.AuthorizeAttribute
    {
        protected override void HandleUnauthorizedRequest(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            if (!HttpContext.Current.User.Identity.IsAuthenticated)
            {
                base.HandleUnauthorizedRequest(actionContext);
            }
            else
            {
                actionContext.Response = new System.Net.Http.HttpResponseMessage(System.Net.HttpStatusCode.Forbidden);
            }
        }
    }
}


//Bir HTTP REST API'sini oluştururken, yanıtın durumunu belirtmek için uygun HTTP
//yanıt kodlarını kullanmalıyız. Kimlik doğrulama / yetkilendirme durumu almak için
//her zaman 401 ve 403 durum kodlarını kullanıyorum. 401 (Yetkisiz) - hedef kaynak için geçerli doğrulama
//kimlik bilgileri olmadığı için isteğin uygulanmadığını gösterir. ve 403 (Yasak) - kullanıcı kimliği doğrulanmış
//ancak verilen kaynakta istenen işlemi gerçekleştirme yetkisine sahip olmadığında.

//Ne yazık ki, ASP.NET MVC / Web API[Yetki] özniteliği bu şekilde davranmaz - 
//her zaman 401 yayınlar.Yani, burada Web API uygulamanızda, bu davranışı geçersiz kılmak için bir sınıf ekleyeceğim.
//    Burada, kullanıcı kimliği doğrulanmış ancak talep edilen işlemi gerçekleştirmek için yetkilendirilmemişken 403'ü geri getireceğiz.