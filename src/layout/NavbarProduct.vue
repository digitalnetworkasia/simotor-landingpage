<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(21, 46, 48);">
      <img src="images/logo.png" width="30px" alt="logo" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link active" href="http://simotor.id/#/" target="_self">
              HOME
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#products" target="_blank">PRODUCT</a>
          </li>-->
          <b-nav-item-dropdown text="FEATURES">
            <b-dropdown-item href="/#/hargapas" target="_self">Harga Pas</b-dropdown-item>
            <b-dropdown-item href="/#/tawarbersama" target="_self">Tawar Bersama</b-dropdown-item>
          </b-nav-item-dropdown>
          <li class="nav-item">
            <a class="nav-link" href="/#/faq" target="_self">FAQ</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#contact" target="_blank">CONTACT</a>
          </li>-->
          <b-nav-item-dropdown text="PANDUAN PENGGUNA">
            <b-dropdown-item href="/#/panduan" target="_self">PANDUAN PENGGUNA PEMBELI</b-dropdown-item>
            <b-dropdown-item href="/#/panduan2" target="_self">PANDUAN PENGGUNA PENJUAL</b-dropdown-item>
          </b-nav-item-dropdown>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            href="http://simotor.co.id:44/"
            target="_blank"
          >Login</button>
        </form>-->
      </div>
    </nav>
  </div>
</template>
  <script>
</script> 
