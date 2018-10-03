<template>
    <div>
        <Navbar></Navbar>
        <div class="login-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 login-box">
                            <h2>
                            會員登入
                            </h2>
                            <div class="login-group-rwd">
                                <div class="login-button-wrapper">
                                     <a href="#" class="connect-button-rwd">
                                    <img src="../assets/images/logo&img/fb.jpg" alt="">
                                    </a>
                                    <a href="#" class="connect-button-rwd">
                                        <img src="../assets/images/logo&img/google.jpg" alt="" style="height: 34px;">
                                    </a>
                                    <a href="#" class="connect-button-rwd">
                                        <img src="../assets/images/logo&img/yahoo.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            
                        <div class="login-group">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-user-alt"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="電子信箱/手機號碼" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="請輸入使用者密碼" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                    記住我
                                </label>
                            </div>
                        </div>
                        <div class="login-button">
                            <a href="#">登入帳號</a>
                        </div>
                    </div>

                    <div class="col-sm-6 connect-wrapper">
                        <div class="connect-box">
                            <h3>
                                —— 連結社群帳號 ——
                            </h3>
                            <a href="#" class="connect-button">
                                <img src="../assets/images/logo&img/fb.jpg" alt="">
                            </a>
                            <a href="#" class="connect-button">
                                <img src="../assets/images/logo&img/google.jpg" alt="" style="height: 34px;">
                            </a>
                            <a href="#" class="connect-button">
                                <img src="../assets/images/logo&img/yahoo.jpg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/Login.scss';
</style>

