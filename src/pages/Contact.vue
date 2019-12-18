<template>
  <div>
    <header class="bg-gradient">
      <div class="container mt-5">
        <img src="images/banner contact us.png" width="800px" class="img-fluid" />
        <br />
        <br />
      </div>
    </header>

    <div class="site-section bn-gradient">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-6">
            <br />
            <h3 class="text-center">Silakan isi form dibawah ini:</h3>
            <br />
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Email Kamu"
                />
                <!-- <small
                  id="emailHelp"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>-->
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Nama Lengkap:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Masukkan Nama Lengkap Kamu"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Nomor Ponsel:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Masukkan Nomor Ponsel Kamu"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Pesan:</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Masukkan Pesan Kamu Disini"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>

    <!-- // end .section -->
  </div>
</template>