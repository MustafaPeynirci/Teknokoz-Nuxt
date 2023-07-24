<template>
  <div id="app">
    <SeoKit />
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top navBlur shadow rounded-bottom">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold fs-3 b-resp" href="#">
          <img src="./assets/img/logo.png" width="130" alt="teknokoz">
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
          <a class="text-decoration-none fs-2 fw-bold s-resp" href="#">
            <img src="./assets/img/logo.png" width="200" alt="teknokoz">
          </a>
          <ul class="navbar-nav align-resp">
            <li class="nav-item">
              <a class="nav-link fs-19 fw-medium purple-hover-3 fs-unset" aria-current="page" href="#">Anasayfa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-19 fw-medium purple-hover-3 fs-unset" href="#biz">Biz Kimiz</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-19 fw-medium purple-hover-3 fs-unset" href="#firsat">Fırsatlar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-19 fw-medium purple-hover-3 fs-unset" href="#iletisim">İletişim</a>
            </li>
            <button type="button" class="btn btn-outline-secondary border border-dark rounded-pill d-flex justify-content-center align-items-center h-38 h-33 fs-unset fs-19 fw-medium m-12 ml-20" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Destek</button>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mb-5 padding-resp-3">
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Destek</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body mx-auto">
              <div class="d-flex flex-column g-20 mt-2 pb-2 text-start">
                <span class="fw-medium">
                  <i class="fa-solid fa-location-dot pe-2"></i> Konak, İzmir </span>
                <a class="fw-medium text-decoration-none grey-color" href="tel:05333108453">
                  <i class="fa-solid fa-phone pe-2"></i> 0533 310 84 53 </a>
                <a class="fw-medium text-decoration-none grey-color" href="tel:05441062138">
                  <i class="fa-solid fa-phone-volume pe-2"></i> 0544 106 21 38 </a>
                <a class="fw-medium text-decoration-none grey-color" href="mailto:info@teknokoz.com">
                  <i class="fa-solid fa-envelope pe-2"></i> info@teknokoz.com </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-start">
        <div class="col-md-5 mt-15-resp">
          <img src="./assets/img/1.png" class="w-100" alt="teknokoz">
        </div>
        <div class="col-md-7 pt-100 p-30">
          <h1 class="fw-bolder mb-0">Bi Tık Daha Fazlası!</h1>
          <span class="fw-medium fs-4">Teknokoz'da</span>
          <p class="mt-3"> Biz, yazılım hizmetleri alanında lider bir şirket olarak, işletmenizin dijital dönüşümünü sağlamak için gelişmiş çözümler sunuyoruz. Profesyonel ekibimiz, işletmenizin ihtiyaçlarına uygun özelleştirilmiş yazılım hizmetleriyle size rekabet avantajı sağlamayı hedefliyor. İşletmenizin dijital dünyada başarılı olması için sizinle yakın işbirliği içinde çalışıyoruz. İhtiyaçlarınızı anlamak ve hedeflerinize ulaşmanızı sağlamak için birinci sınıf yazılım çözümleri sunuyoruz. Web tabanlı uygulamalar, mobil uygulamalar, özel yazılımlar, veritabanı yönetimi ve daha birçok alanda uzmanlaşmış ekibimizle size en uygun çözümü sunmak için buradayız. </p>
          <a href="#iletisim" type="button" class="btn btn-secondary border border-secondary rounded-pill fs-14 fw-medium purple">Hemen Bilgi Alın</a>
        </div>
      </div>
      <a name="biz"></a>
      <div class="row text-start mt-10 display-flex-resp align-items-center">
        <div class="col-md-7 pe-5 pt-100 p-30">
          <span class="fw-medium fs-4">Tecrübeyle Sabit</span>
          <h1 class="fw-bolder ">Kusursuz <span class="red-1">Performans</span>
          </h1>
          <p class="mt-3"> Amacımız, müşterilerimize en üst düzeyde memnuniyet sağlayarak onların ihtiyaçlarını karşılamaktır. Güçlü bir geçmişe ve deneyime sahip olarak, hizmetlerimizde mükemmeliyeti ve profesyonelliği hedefliyoruz. Sektördeki uzmanlığımızı ve bilgimizi, müşterilerimize en iyi şekilde yansıtmaktayız. Tecrübe, başarının anahtarıdır. Yıllar boyunca kazandığımız birikim ve sektördeki deneyimimiz, kusursuz bir performans sunmamıza yardımcı olmaktadır. İşlerimizi titizlikle ve dikkatle yaparak müşterilerimize güven veriyoruz.</p>
        </div>
        <div class="col-md-5 img-resp-2">
          <img src="./assets/img/2.png" class="w-100" alt="teknokoz">
        </div>
        <div class="d-flex mt-10 text-webkit-center display-resp">
          <div class="h-zoom">
            <i class="fa-solid fa-circle-check fa-2x mb-4 text-body"></i>
            <p class="w-75">İşlerimizi titizlikle ve dikkatle yaparak müşterilerimize güven veriyoruz.</p>
          </div>
          <div class="h-zoom">
            <i class="fa-solid fa-code fa-2x mb-4 text-body"></i>
            <p class="w-75">Ekip üyelerimiz, kendi alanlarında uzmanlaşmış profesyonellerden oluşmaktadır.</p>
          </div>
          <div class="h-zoom">
            <i class="fa-solid fa-comments fa-2x mb-4 text-body"></i>
            <p class="w-75">İhtiyaçlarınızı ve beklentilerinizi dikkate alarak, size en uygun çözümleri sunuyoruz.</p>
          </div>
          <div class="h-zoom">
            <i class="fa-solid fa-wand-magic-sparkles fa-2x mb-4 text-body"></i>
            <p class="w-75">İşimizi zamanında ve hatasız bir şekilde tamamlamak için gereken çabayı gösteriyoruz.</p>
          </div>
        </div>
      </div>
      <div class="row text-start mt-10 align-items-center justify-content-center">
        <div class="col-md-3 img-resp">
          <img src="./assets/img/3.png" class="w-100" alt="teknokoz">
        </div>
        <div class="col-md-9 ps-5 pt-100 p-30">
          <span class="fw-medium fs-4">Yüksek Grafikler</span>
          <h1 class="fw-bolder ">
            <span class="text-warning">Mutlu</span> Müşteriler
          </h1>
          <p class="mt-3"> İyi tasarlanmış bir web sitesi, işletmenizin dijital varlığını temsil eder ve potansiyel müşterilere marka değerini yansıtır. Web siteleri, kullanıcı deneyimi, işlevsellik ve görsel çekicilik gibi faktörlerle müşterilerin memnuniyetini etkiler. Bir web sitesinin görsel çekiciliği, kullanıcıların sitenizde daha fazla zaman geçirmesini ve işletmenizin ürünlerine veya hizmetlerine daha olumlu bir şekilde bağlanmasını sağlar. Bu nedenle, yüksek kaliteli grafikler web sitenizin etkileyici bir şekilde sunulmasında büyük bir rol oynar.</p>
          <div class="d-flex g-40 mt-5 display-resp">
            <div>
              <i class="fa-solid fa-people-group fa-2x mb-2 purple-2"></i>
              <div class="h-zoom">
                <h2 class="fw-semibold">500+</h2>
                <span class="fw-medium">Mutlu Müşteri</span>
              </div>
            </div>
            <div>
              <i class="fa-solid fa-thumbs-up fa-2x mb-2 purple-2"></i>
              <div class="h-zoom">
                <h2 class="fw-semibold">1027+</h2>
                <span class="fw-medium">Tavsiye Edildi</span>
              </div>
            </div>
            <div>
              <i class="fa-solid fa-list fa-2x mb-2 purple-2"></i>
              <div class="h-zoom">
                <h2 class="fw-semibold">243+</h2>
                <span class="fw-medium">Çözümlenen Task</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-start mt-10 pb-4 align-items-center justify-content-center">
        <div class="col-md-7 pe-5 pt-100 p-30">
          <span class="fw-medium fs-4">Kullanıcı Deneyimi</span>
          <h1 class="fw-bolder ">Başarılı <span class="text-success">Portföy</span>
          </h1>
          <p class="mt-3"> Web sitelerimiz, kullanıcıların isteklerini, ihtiyaçlarını ve beklentilerini göz önünde bulundurarak onlara mükemmel bir deneyim sunmayı amaçlar. İster küçük bir işletme sahibi olun, ister büyük bir şirketin temsilcisi, size özel, kullanıcı dostu ve estetik açıdan etkileyici bir web sitesi oluşturmak için buradayız. İnsanların web sitenizi ziyaret ettiğinde kolayca gezinebilmeleri, bilgilere hızlı bir şekilde erişebilmeleri ve istedikleri eylemleri gerçekleştirebilmeleri önemlidir. Profesyonel ekibimizle, her projemizde kullanıcı deneyimini önceliklendiriyoruz ve kullanıcıların web sitenizi ziyaret ettiklerinde olumlu bir deneyim yaşamalarını sağlıyoruz. </p>
        </div>
        <div class="col-md-5 img-resp-2">
          <img src="./assets/img/4.png" class="w-100" alt="teknokoz">
        </div>
      </div>
    </div>
    <div class="position-relative d-flex justify-content-center align-items-center slider-resp">
      <div class="fw-bold text-white pt-4 position-absolute">
        <div class="position-relative display-resp-none">
          <div class="col-md-4 mx-auto h-100 pb-5">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <h1 class="fw-bold text-white pt-4">Sizden Gelenler</h1>
                <div class="carousel-item active">
                  <div class="row fw-normal">
                    <p class="text-white mt-4"> Etkileyici bir hizmet sunuyor. İşbirliği içinde çalıştığımız süre boyunca, yazılım ihtiyaçlarımızı tam anlamıyla anlamışlar ve harika bir çözüm sunmuşlardır. Ekibin uzmanlığı ve tecrübesi, projemizin başarılı bir şekilde tamamlanmasını sağladı. İletişimleri mükemmel ve sürekli güncellemeler sağladılar. Proje zamanında ve bütçe dahilinde teslim edildi. Ayrıca, müşteri odaklı yaklaşımları ve kalite odaklı çalışmaları takdire şayan.</p>
                    <span class="text-white mt-4"> Alev Yıldırım </span>
                    <span class="text-danger"> Designer, Zero </span>
                    <div class="d-flex justify-content-center g-10 mt-2">
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row fw-normal">
                    <p class="text-white mt-4"> Proje süreci boyunca iletişimleri sürekli ve etkiliydi, her adımda bizi bilgilendirdiler. Proje zamanında tamamlandı ve kalite standartlarımızı tam anlamıyla karşıladı. Ekibin teknik yetenekleri ve yaratıcılıkları, projemizi daha da geliştirmemize yardımcı oldu. Ayrıca, sonrasında sağladıkları destek ve müşteri odaklı yaklaşımları, şirketin profesyonelliğini ve iş ahlakını yansıtıyor. </p>
                    <span class="text-white mt-4"> Murat Kale </span>
                    <span class="text-danger"> Business Analyst, Craft </span>
                    <div class="d-flex justify-content-center g-10 mt-2">
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row fw-normal">
                    <p class="text-white mt-4"> İhtiyaçlarımızı tam olarak anlayarak, bize mükemmel bir çözüm sağladılar. Projemiz zamanında ve bütçe dahilinde tamamlandı ve sonuçlar beklediğimizin ötesine geçti. Ekibin teknik yetenekleri ve yaratıcılığı, işimizi daha verimli hale getirmemize yardımcı oldu. Ayrıca, müşteri memnuniyetine verdikleri önem ve sonrasında sağladıkları destek, şirketi gerçekten özel kılıyor. </p>
                    <span class="text-white mt-4"> Can Meydan </span>
                    <span class="text-danger"> Computer Engineer, Upliys </span>
                    <div class="d-flex justify-content-center g-10 mt-2">
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="./assets/img/gradient.png" class="w-100" alt="">
    </div>
    <a name="firsat"></a>
    <div class="container mt-6 mb-5 margin-resp-2 padding-resp-3">
      <h1 class="fw-bolder mb-0">Fırsatları Değerlendirin!</h1>
      <span class="mt-3 fw-medium">Size en uygun çözümü seçin.</span>
      <div class="row row-cols-1 row-cols-md-3 g-5 mt-3 padding-resp-2">
        <div class="col mt-15-resp">
          <div class="card h-zoom h-100 border-0 shadow">
            <img src="./assets/img/blog-1.jpg" class="card-img-top" alt="teknokoz">
            <div class="card-body text-start white">
              <h5 class="">Kurumsal Web Sitesi</h5>
              <p class="">Şirketinizin dijital kimliğini temsil eder ve müşterilerinize, ortaklarınıza ve potansiyel müşterilerinize bilgi sunmak için kullanabilirsiniz. Kurumsal web sitesi hizmeti, işletmenizin profesyonel bir çevrimiçi varlık oluşturmasına yardımcı olur. Marka tanınırlığını artırır ve müşterilerin şirketle bağlantı kurmalarını sağlar. Ziyaretçilere şirket hakkında detaylı bilgi sunar ve onlarla etkileşime geçme imkanı sağlar.</p>
            </div>
            <div class="card-footer white border-0 pb-3 text-start">
              <a href="#iletisim" type="button" class="btn btn-secondary border border-secondary rounded-pill fs-14 purple">Bilgi Alın</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-zoom h-100 border-0 shadow">
            <img src="./assets/img/blog-2.jpg" class="card-img-top" alt="teknokoz">
            <div class="card-body text-start white">
              <h5 class="">Özel Yazılım</h5>
              <p class="">Yazılım geliştirme sürecinde size tam kontrol sağlıyoruz. İhtiyaçlarınıza uygun özelliklerin eklenmesi, kullanıcı dostu arayüzlerin oluşturulması ve güvenlik önlemlerinin alınması konularında hassas bir şekilde çalışıyoruz. Amacımız, işletmenizin verimliliğini artırmak ve rekabet avantajı sağlamak için size özel bir yazılım çözümü sunmaktır.</p>
            </div>
            <div class="card-footer white border-0 pb-3 text-start">
              <a href="#iletisim" type="button" class="btn btn-secondary border border-secondary rounded-pill fs-14 purple">Bilgi Alın</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-zoom h-100 border-0 shadow">
            <img src="./assets/img/blog-3.jpg" class="card-img-top" alt="teknokoz">
            <div class="card-body text-start white">
              <h5 class="">Dijital Market</h5>
              <p class="">Dijital pazarlama konusundaki uzman ekibimiz, işletmenizin özel ihtiyaçlarına uygun çözümler sunmak için sürekli olarak güncel trendleri takip etmekte ve yenilikçi stratejiler geliştirmektedir. Web sitesi tasarımı ve geliştirme, arama motoru optimizasyonu (SEO), sosyal medya yönetimi, içerik pazarlaması, reklam kampanyaları ve analiz gibi geniş bir hizmet yelpazemizle işletmenizin dijital varlığını güçlendiriyoruz.</p>
            </div>
            <div class="card-footer white border-0 pb-3 text-start">
              <a href="#iletisim" type="button" class="btn btn-secondary border border-secondary rounded-pill fs-14 purple">Bilgi Alın</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5 padding-resp-3">
      <div class="fw-medium p-2 fs-18 text-start">Kullandığımız güncel teknolojiler, sizi bir adım <span class='fw-bold'>&nbsp;daha öteye</span> &nbsp;taşır.</div>
      <div class="row carousel-resp">
        <div class="col-md-12">
          <div class="lc-block">
            <div id="carouselLogos" class="carousel slide pt-5 pb-4" data-bs-ride="carousel">
              <div class="carousel-inner px-5">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="slider">
                      <div class="logos d-flex g-40">
                        <div class="col-6 col-md-3 col-lg-2 align-self-center">
                          <img class="d-block wp-100 px-3 mb-3" src="./assets/img/vue.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2  align-self-center">
                          <img class="d-block wp-100 px-3  mb-3" src="./assets/img/nuxt.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2  align-self-center">
                          <img class="d-block wp-100 px-3  mb-3" src="./assets/img/angular.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2  align-self-center">
                          <img class="d-block wp-100 px-3  mb-3" src="./assets/img/laravel.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2  align-self-center">
                          <img class="d-block wp-100 px-3  mb-3" src="./assets/img/codeigniter.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2  align-self-center">
                          <img class="d-block wp-100 px-3  mb-3" src="./assets/img/php.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2 align-self-center">
                          <img class="d-block wp-100 px-3 mb-3" src="./assets/img/tailwind.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2  align-self-center">
                          <img class="d-block wp-100 px-3  mb-3" src="./assets/img/node.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2  align-self-center">
                          <img class="d-block wp-100 px-3  mb-3" src="./assets/img/vue.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2  align-self-center">
                          <img class="d-block wp-100 px-3  mb-3" src="./assets/img/nuxt.png" alt="">
                        </div>
                        <div class="col-6 col-md-3 col-lg-2  align-self-center">
                          <img class="d-block wp-100 px-3  mb-3" src="./assets/img/angular.png" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a name="iletisim"></a>
    <div class="container mt-6 padding-resp-3">
      <div class="row mt-5 text-start">
        <div class="col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131.0135113063527!2d27.12926805229604!3d38.42011320048231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e3ac245af7%3A0x3585bde806b7c8e!2sKonak%2C%20Cumhuriyet%20Blv%20No%3A20%2C%2035251%20Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1688907105714!5m2!1str!2str" width="100%" height="350px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-3 border-0"></iframe>
        </div>
        <div class="col-md-6 ps-5 margin-resp">
          <h1 class="fw-bold">Adres</h1>
          <div class="row mt-4 text-start">
            <p> Müşteri memnuniyeti ve ihtiyaçlarınızı karşılama konusunda en üst düzeyde özenle çalışıyoruz. Birebir iletişim kurmak, ihtiyaçlarınızı daha iyi anlamak ve size özel çözümler sunmak için en etkili yoldur. Sizi ofisimizde görmekten mutluluk duyarız!</p>
            <div class="d-flex flex-column g-20 mt-2">
              <span class="fw-medium">
                <i class="fa-solid fa-location-dot pe-2"></i> Konak, İzmir </span>
              <a class="fw-medium text-decoration-none grey-color" href="tel:05333108453">
                <i class="fa-solid fa-phone pe-2"></i> 0533 310 84 53 </a>
              <a class="fw-medium text-decoration-none grey-color" href="tel:05441062138">
                <i class="fa-solid fa-phone-volume pe-2"></i> 0544 106 21 38 </a>
              <a class="fw-medium text-decoration-none grey-color" href="mailto:info@teknokoz.com">
                <i class="fa-solid fa-envelope pe-2"></i> info@teknokoz.com </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footerBlur rounded-top mt-6">
      <div class="container p-3 padding-resp-3">
        <h2 class="fw-bold text-start pt-3">Bizimle İletişime Geçin.</h2>
        <div class="col-md-12 d-flex display-resp">
          <div class="col-md-5 mt-4 d-flex flex-column g-20">
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" v-model="mailBody.name" placeholder="Ad Soyad" aria-label="adSoyad" aria-describedby="addon-wrapping">
            </div>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" v-model="mailBody.mail" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping">
            </div>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" v-model="mailBody.subject" placeholder="Konu" aria-label="konu" aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-md-7 mt-4 ps-4 padding-resp">
            <div class="form-floating h-100">
              <textarea class="form-control h-100" v-model="mailBody.message" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
              <label for="floatingTextarea2">Mesaj</label>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <button type="button" @click="postMail" class="btn btn-secondary border border-secondary rounded-pill purple w-100">Gönder</button>
        </div>
      </div>
      <div class="mt-5 pb-4 margin-resp">
        <span class="">© 2023 Teknokoz. Tüm Hakları Saklıdır.</span>
      </div>
    </div>
    <loading v-model:active="isLoading" :can-cancel="true" color="#4B0082" :is-full-page="fullPage" />
  </div>
</template>
<script setup>
useHead({
  title: 'Teknokoz | Yazılım',
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",
      crossorigin: "anonymous"
    },
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    }],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
      integrity: "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz",
      crossorigin: "anonymous"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
    },
    {
      src: "https://smtpjs.com/v3/smtp.js"
    }]
})
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
const isLoading = ref(true)
const fullPage = ref(true)
const swiper = Swiper
const swiperSlide = SwiperSlide
const modules = [Navigation]
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
const mailBody = ref({
  name: '',
  mail: '',
  subject: '',
  message: '',
})
const postMail = () => {
  if (mailBody.value.name == '') {
    useToast().warning('Lütfen Ad Soyad Giriniz.')
    return;
  }
  if (mailBody.value.mail == '') {
    useToast().warning('Lütfen Mail Adresinizi Giriniz.')
    return;
  }
  if (mailBody.value.subject == '') {
    useToast().warning('Lütfen Konu Giriniz.')
    return;
  }
  if (mailBody.value.message == '') {
    useToast().warning('Lütfen Mesajınızı Giriniz.')
    return;
  }
  let mail = `
      <b>Ad Soyad: </b> ${mailBody.value.name}

      <br>
      <b>Email: </b> ${mailBody.value.mail}

      <br>
      <b>Konu: </b> ${mailBody.value.subject}

      <br>
      <b>Mesaj: </b> ${mailBody.value.message}

      <br>
     `
  Email.send({
    SecureToken: "9478703d-4529-4815-ad72-f228ecddb115",
    To: "info@teknokoz.com",
    From: "info@teknokoz.com",
    Subject: mailBody.value.mail,
    Body: mail
  }).then(mailBody.value = {
    name: '',
    mail: '',
    subject: '',
    message: '',
  },
    useToast().success('Mailiniz başarıyla gönderildi.'));
}
</script>
<style>
#app {
  font-family: Montserrat, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #747779;
  background: url("./assets/img/background.png");
  background-size: contain;
  padding-top: 10%;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 18px;
}

div#staticBackdrop {
  backdrop-filter: blur(1.5px);
}

@media only screen and (max-width: 1335px) {
  .slider-resp {
    display: none !important;
  }
}

@media only screen and (max-width: 991px) {
  #app {
    background-size: cover;
  }

  .s-resp {
    display: none !important;
  }

  .m-12 {
    margin: 12px;
  }
}

@media only screen and (min-width: 992px) {
  .b-resp {
    display: none !important;
  }

  .ml-20 {
    margin-left: 20px;
  }

  .align-resp {
    align-items: center;
  }
}

@media only screen and (max-width: 767px) {
  .display-resp {
    display: block !important;
  }

  .display-resp-none {
    display: none !important;
  }

  .padding-resp {
    padding-left: 0 !important;
  }

  .padding-resp-2 {
    padding: 20px !important;
  }

  .padding-resp-3 {
    padding: 0px 20px !important;
  }

  .margin-resp {
    margin-top: 50px !important;
  }

  .margin-resp-2 {
    margin-top: 100px !important;
  }

  .display-flex-resp {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .img-resp {
    display: flex !important;
    justify-content: center !important;
    width: 60%;
    padding-top: 50px;
  }

  .img-resp-2 {
    width: 70%;
    margin-top: 50px;
  }

  .p-30 {
    padding: 30px !important;
  }

  .mt-15-resp {
    margin-top: 15px !important;
  }

  .fs-unset {
    font-size: unset !important;
  }

  .h-33 {
    height: 33px !important;
  }

  .slider {
    animation: slidein 10s linear infinite !important;
  }
}

.navbar-toggler:focus {
  box-shadow: none;
}

.mt-6 {
  margin-top: 6%;
}

.mt-10 {
  margin-top: 10%;
}

.mt-15 {
  margin-top: 15%;
}

.pt-100 {
  padding-top: 100px;
}

.fs-14 {
  font-size: 14px;
}

.purple {
  background-color: #4f63f8e0;
}

.purple:hover {
  background-color: #5d6bb3;
}

.purple-hover-2:hover {
  background-color: #4f63f8a3;
}

.purple-hover-3:hover {
  color: #373b3e !important;
}

.purple-2 {
  color: rgb(115 104 191);
}

.red-1 {
  color: rgb(230, 41, 82);
}

.white {
  background-color: #fff;
}

.grey-color {
  color: #747779;
}

.text-webkit-center {
  text-align: -webkit-center;
}

.g-10 {
  gap: 10px;
}

.g-20 {
  gap: 20px;
}

.g-40 {
  gap: 40px;
}

.l-0 {
  left: 0;
}

.fs-18 {
  font-size: 18px;
}

.fs-19 {
  font-size: 19px;
}

.wp-100 {
  width: 100px;
}

.h-38 {
  height: 38px;
}

.h-zoom {
  transition: transform .3s;
}

.h-zoom:hover {
  transform: scale(1.05);
}

.navBlur {
  backdrop-filter: blur(20px);
  background-color: #f8f9fade !important;
}

.footerBlur {
  backdrop-filter: blur(15px);
  background-color: rgb(116 119 121 / 10%) !important;
}

.shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1);
}

.carousel-resp {
  background: #dee2e65c;
  border-radius: 10px;
  margin: unset;
}

.slider {
  animation: slidein 30s linear infinite;
  white-space: nowrap;

  .logos {
    width: 100%;
    display: inline-block;
    margin: 0px 0;

    .fab {
      width: calc(100% / 5);
      animation: fade-in 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    }
  }
}

@keyframes slidein {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>