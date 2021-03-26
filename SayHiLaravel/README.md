## SayHiLaravel
* php artisan serve

### Documentation
#### PHP Artisan
Artisan, Laravel ile birlikte gelen Komut Satırı Arayüzüne (CLI) denir.Komut satırından proje yönetimi sağlar.Uygulama geliştirirken bizim işimizi hızlandıracak bir takım komutlar içermektedir.
Örnek vermek gerekirse uygulama geliştirirke çokca duyduğunuz model-view-controller gibi dosyaları elle oluşturmak yerine tek komutla oluşturup projeye entegre edebilirsiniz. Veya database işlemlerini yine tek komutla yapabilirsiniz.
#### Blade
Blade aslında bir şablon sistemidir. İçerisine alışık olduğunu PHP kodlarını da yazabilmeniz bir çok yazılımcının Laravel öğrenirken kendini rahat hissetmesini sağlamaktadır.Bir ana şablon tanımlar ve diğer sayfaları bu şablonu ‘extend’ ederek oluşturursunuz.

### Installation
- composer global require laravel
- laravel new projectName
- php artisan serve
- npm install tailwindcss
- npm install

### Commands
- php artisan make:controller Auth/RegisterController
- php artisan make:controller DashboardController
- php artisan make:controller Auth/LoginController
- php artisan make:controller Auth/LogoutController
- php artisan make:controller PostController
- php artisan make:model Post -m -f
- php artisan tinker App\Models\Post::factory()->times(200)->create(['user_id'=>2])
- php artisan make:migration create_likes_table --create=likes
- php artisan make:model Like
- php artisan make:controller PostLikeController
- composer require barryvdh/laravel-debugbar --dev
- php artisan make:policy PostPolicy
- php artisan make:component Post
- php artisan make:component UserCard
- php artisan make:mail PostLiked --markdown=emails.posts.post_liked

### Helpfull Resources
[Laravel-artisan-blog](https://www.yasird.com/laravel-5-artisan-nedir/) [MailTrap](https://mailtrap.io/)