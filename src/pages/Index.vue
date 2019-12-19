<template>
  <div>
    <header class="bg-gradient" id="home">
      <div class="container mt-5">
        <img src="images/logosimotor.png" width="300px" class="img-fluid" />
        <br />
        <br />
        <a href="/">
          <img src="images/playstore.png" width="200px" />
        </a>
      </div>
      <br />
    </header>
    <br />
    <div>
      <!-- <div class="site-section" id="product">
        <div class="container">
          <div class="row mb-5 justify-content-center">
            <div class="col-md-6 text-center">
              <div class="f_icon">
                <img src="images/motor.png " alt="Image" class="img-fluid" />
      </div>-->
      <!-- <h2>Produk Kami</h2>
      <h6>Cek unit motor yang tersedia yuk!</h6>-->
      <!-- </div>
      </div>-->
      <!-- 
          <v-card class="mx-auto" outlined>
            <v-list class="blue lighten-3">
              <v-list-item>
                <v-list-item-subtitle class="headline2 mb-1">
                  <span style="color: blue">{{ item.created_at }}</span>
                </v-list-item-subtitle>

                <v-card-actions class="text-right">
                  <v-btn @click="GetUnitDetail(item.id)" text>Detail</v-btn>
                </v-card-actions>
              </v-list-item>
            </v-list>

            <v-divider light></v-divider>
            <v-list-item three-line>
              <v-list-item-avatar tile size="150" color="grey">
                <v-img :src="$url_img + item.foto_1"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <div
                  class="overline mb-4"
                  style="color: indigo darken-4"
                >{{ UnitsDetail.nama_user }}</div>

                <v-list-item-title class="headline2 mb-1">{{ item.type }}</v-list-item-title>
                <v-list-item-subtitle>
                  <span style="color: red">{{ item.merk }}</span>
                  Tahun {{ item.tahun }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <div class="overline mb-4">{{ item.moderasi_status }}</div>

                <v-list-item-title class="headline2 mb-1">Lokasi Dealer</v-list-item-title>
                <v-list-item-subtitle>
                  <span style="color: blue">
                    <b>{{ item.lokasi }}</b>
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <div class="overline mb-4"></div>

                <v-list-item-title class="headline2 mb-1">No. Polisi</v-list-item-title>
                <v-list-item-subtitle>
                  <span style="color: blue">
                    <b>{{ item.nomor_polisi }}</b>
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <div class="overline mb-4"></div>

                <v-list-item-title class="headline2 mb-1">Status Moderasi</v-list-item-title>
                <v-list-item-subtitle>
                  <span style="color: red">
                    <b>{{ item.status }}</b>
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
      </v-card>-->
      <!-- </div>
      </div>-->

      <section class="feature_area" id="about">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img src="images/mobilefront.png" width="300px" />
            </div>

            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="f_icon">
                <img src="images/mobilehand.png" width="80px" />
              </div>
              <div class="container">
                <h2>Apa itu SiMotor?</h2>

                <p>
                  Sepeda motor sudah menjadi gaya hidup atau lifestyle masyarakat di Indonesia, benar nggak?
                  Oleh karena itu, kebutuhan akan sepeda motor juga meningkat dan kamu pasti ingin motor yang bagus dan berkualitas kan?
                  Disinilah SiMotor hadir sebagai jawaban. Beli motor jadi semakin mudah, cepat, dan berkualitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="feature_area" id="features">
        <div class="container">
          <div class="section-title">
            <img src="images/icons.png" width="92px" alt />
            <h6>Apa aja fitur unggulan SiMotor?</h6>
            <h2>Fitur SiMotor</h2>
          </div>

          <div class="row feature_inner">
            <!-- <div class="col-lg-4 col-sm-6">
              <div class="feature_item">
                <div class="f_icon">
                  <img src="images/tools-color.png" alt />
                </div>
                <h4>Bengkel Terdekat</h4>
                <p>Butuh bengkel terdekat? atau butuh info tentang spare part motor? cek di simotor aja! udah ada fitur bengkel terdekat loh</p>
              </div>
            </div>-->
            <div class="col-lg-6 col-sm-6">
              <div class="feature_item">
                <div class="f_icon">
                  <img src="images/harga pas.png" width="120px" />
                </div>
                <h4>Harga Pas</h4>
                <p>
                  Fitur harga pas berguna banget untuk kamu yang nggak mau ribet menawar unit.
                  Penasaran? Yuk klik tombol dibawah!
                </p>
                <a href="#hargapas" target="_blank" class="btn btn-blue">Lihat Selengkapnya</a>
              </div>
            </div>

            <div class="col-lg-6 col-sm-6">
              <div class="feature_item">
                <div class="f_icon">
                  <img src="images/tawar bersama (paketan).png" width="120px" />
                </div>
                <h4>Tawar Bersama</h4>
                <p>
                  Jika kamu memiliki tiket tawar bersama kamu dapat menggunakan fitur ini.
                  Penasaran? Yuk klik tombol dibawah!
                </p>
                <a href="#tawarbersama" target="_blank" class="btn btn-blue">Lihat Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- // end .section -->

      <div class="section bn-gradient">
        <div class="container">
          <div class="section-title">
            <h6>Gimana cara transaksi di SiMotor?</h6>
            <h2 class="c_title">Yuk kita simak cara transaksi!</h2>
          </div>
          <ul class="nav nav-tabs nav-justified pd-gradient" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#iklan">1. Register/Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#schedule">2. Pasang Iklan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#messages">3. Telusuri Iklan</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="iklan">
              <div class="d-flex flex-column flex-lg-row">
                <img
                  src="images/loginillus.png"
                  width="400px"
                  alt="graphic"
                  class="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                />
                <div>
                  <h2>Registrasi/Login</h2>
                  <p>
                    Kamu harus mengunduh aplikasi SiMotor terlebih dahulu di Google PlayStore sebelum melakukan login atau registrasi pada aplikasi.
                    Setelah itu kamu dapat melakukan registrasi akun dengan menggunakan
                    nomor handphone, atau kamu juga dapat menggunakan akun Google kamu.
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="schedule">
              <div class="d-flex flex-column flex-lg-row">
                <img
                  src="images/tambah iklan unit.png"
                  width="400px"
                  alt="graphic"
                  class="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                />
                <div>
                  <h2>Pasang Iklan</h2>
                  <p class="lead">Iklan terbagi menjadi iklan harga pas dan iklan tawar bersama.</p>
                  <p>
                    Kamu dapat membuat iklan unit motormu sendiri di aplikasi android.
                    Unit harus ditambahkan terlebih dahulu sebelum kamu memasang iklan unit motormu tersebut.
                    Kelengkapan data-data unit motor sangat diwajibkan sehingga
                    informasi yang dimasukkan harus benar dan sesuai. Kamu juga bisa menawar unit motor yang
                    tersedia.
                  </p>
                  <p>
                    Kamu bisa memasang iklanmu sebagai iklan harga pas atau tawar bersama. Pada iklan harga pas
                    kamu menentukan harga unit motor dan pembeli tidak dapat menawar iklanmu. Sedangkan pada iklan tawar bersama
                    pembeli dapat melakukan penawaran pada iklan tersebut.
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="messages">
              <div class="d-flex flex-column flex-lg-row">
                <img
                  src="images/tawar bersama web.png"
                  alt="graphic"
                  width="400px"
                  class="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                />
                <div>
                  <h2>Telusuri Iklan</h2>
                  <p>
                    Sebagai pembeli, kamu dapat melakukan transaksi pada iklan harga pas dan
                    melakukan penawaran pada iklan tawar bersama melalui aplikasi SiMotor. Caranya mudah banget,
                    kamu hanya perlu menelusuri iklan pada halaman utama aplikasi SiMotor lalu pilih iklan yang sesuai dengan
                    keinginan kamu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/banner1.png" class="d-block w-75 align-middle" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="images/banner2s.png" class="d-block w-75 align-middle" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="images/vario.jpeg" class="d-block w-50" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>-->
      <!-- // end .section -->
      <!-- // end .section
      <div class="section light-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-8 d-flex align-items-center">
              <ul class="list-unstyled ui-steps">
                <li class="media">
                  <div class="circle-icon mr-4">1</div>
                  <div class="media-body">
                    <h5>Download Aplikasi</h5>
                    <p>Download dan install aplikasi simotor di google playstore.</p>
                  </div>
                </li>
                <li class="media my-4">
                  <div class="circle-icon mr-4">2</div>
                  <div class="media-body">
                    <h5>Login</h5>
                    <p>Lakukan login (Masukkan Nomor telepon untuk yang belum melakukan registrasi).</p>
                  </div>
                </li>
                <li class="media">
                  <div class="circle-icon mr-4">3</div>
                  <div class="media-body">
                    <h5>Klik Iklan</h5>
                    <p>Klik iklan yang akan dibeli.</p>
                  </div>
                </li>
                <li class="media my-4">
                  <div class="circle-icon mr-4">4</div>
                  <div class="media-body">
                    <h5>Klik "beli"</h5>
                    <p>Klik beli pada iklan yang diinginkan.</p>
                  </div>
                </li>
                <li class="media">
                  <div class="circle-icon mr-4">5</div>
                  <div class="media-body">
                    <h5>Transaksi ke penjual</h5>
                    <p>Lakukan transaksi langsung ke penjual.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <img src="images/samsung1.png" alt="handphone" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      -->
      <!-- //
      <div class="section light-bg" id="gallery">
        <div class="container">
          <div class="section-title">
            <small>GALLERY</small>
            <h3>App Screenshots</h3>
          </div>

          <div class="img-gallery owl-carousel owl-theme">
            <img src="images/screen1.jpg" alt="image" />
            <img src="images/screen2.jpg" alt="image" />
            <img src="images/screen3.jpg" alt="image" />
            <img src="images/screen1.jpg" alt="image" />
          </div>
        </div>
      </div>
      end .section-->

      <!-- <div class="section pt-0" id="faq">
        <div class="container">
          <div class="section-title">
            <small>FAQ</small>
            <h3>Frequently Asked Questions</h3>
          </div>

          <div class="row pt-4">
            <div class="col-md-6">
              <h4 class="mb-3">Kapan batas maksimal pembayaran tiket?</h4>
              <p
                class="light-font mb-5"
              >Batas maksimal pembayaran tiket adalah 3 x 24 Jam. Setelah itu, tiket akan hangus.</p>
              <h4 class="mb-3">Apakah HOAX?</h4>
              <p
                class="light-font mb-5"
              >Aplikasi SIMOTOR bukan hoax! Simotor adalah aplikasi online terpercaya yang sudah bekerja sama dengan dealer</p>
            </div>
            <div class="col-md-6">
              <h4 class="mb-3">Can I change my plan later?</h4>
              <p class="light-font mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum,
                urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.
                Vestibulum sit amet mattis ante.
              </p>
              <h4 class="mb-3">Do you have a contract?</h4>
              <p class="light-font mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum,
                urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.
                Vestibulum sit amet mattis ante.
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- // end .section -->
    </div>
  </div>
</template>

<script>
export default {
  //   name: "iklan",
  //   data() {
  //     return {
  //       loading: false,
  //       RenderIklan: true,
  //       IklanSimotor: [],
  //       page: 1,
  //       pageCount: 0,
  //       itemPerPage: 0
  //     };
  //   },
  //   async mounted() {
  //     this.GetIklanSimotor();
  //   },
  //   methods: {
  //     async Reload() {
  //       await this.GetIklanSimotor();
  //       this.forceRerender();
  //     },
  //     forceRerender() {
  //       this.RenderIklan = false;
  //       this.$nextTick(() => {
  //         this.RenderIklan = true;
  //       });
  //     }
  //   },
  //   async GetIklanSimotor(id) {
  //     const iklan = await this.$iklan.get("/v1/search", {
  //       params: {
  //         id: id,
  //         limit: 100
  //       }
  //     });
  //     // .then(response => (this.IklanSimotor = response.data.data))
  //     // .catch(error => {
  //     //   // this.$store.commit('TOGGLE_LOADING')
  //     //   console.log(error);
  //     // });
  //     this.IklanSimotor = iklan.data.data;
  //   }
  // };
};
</script>

