<template>
  <div class="home">
      <navbar></navbar>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <img src="../assets/images/annie-spratt-133872-unsplash.jpg" class="img-fluid" alt="">
          </div>
        </div>
      </div>

      <div class="container category-container">
        <div class="row justify-content-center">
          <div class="col-4 col-md-3 d-flex align-items-center justify-content-center">
            <div class="category-background">
            </div>
            <a href="#">
              本日精選
            </a>
          </div>
          <div class="col-4 col-md-3 d-flex align-items-center justify-content-center">
            <div class="category-background-second">
            </div>
            <a href="#">
              人氣推薦
            </a>
          </div>
          <div class="col-4 col-md-3 d-flex align-items-center justify-content-center">
            <div class="category-background-third">
            </div>
            <a href="#">
              新品上市
            </a>
          </div>
        </div>
      </div>

      <div class="container rwd-title text-center py-5">
        <div class="col-12">
            <img src="../assets/images/logo&img/sm-為什麼選擇了做甜點.png" alt="">
          </div>
      </div>

      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="content-background"></div>
            </div>
            <div class="col-md-6 contnet-right">
              <img src="../assets/images/logo&img/lg-為什麼選擇了做甜點@2x.png" alt="" class="">
              <div class="text-wrapper">
                <p>
                青山依舊在，幾度夕陽紅。慣看秋月春風。
                一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
                <p>
                  是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="container rwd-title text-center py-5">
      <div class="col-12">
          <img src="../assets/images/logo&img/sm-為什麼一定要吃甜點.png" alt="">
        </div>
    </div>
      
     <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-6 content-background-second-rwd-wrapper">
              <div class="content-background content-background-second-rwd"></div>
            </div>
            <div class="col-md-6 contnet-right">
              <img src="../assets/images/logo&img/lg-為什麼選擇了做甜點@2x.png" alt="" class="">
              <div class="text-wrapper">
                <p>
                青山依舊在，幾度夕陽紅。慣看秋月春風。
                一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
                <p>
                  是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="content-background-second"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="container rwd-title text-center py-5">
        <div class="col-12">
          <img src="../assets/images/logo&img/sm-想吃甜點是不需要理由的.png" alt="">
        </div>
      </div>

      <div class="img-only d-flex justify-content-center">
        <img src="../assets/images/logo&img/lg-想吃甜點是不需要理由的.png" alt="">
      </div>


      <div class="cart-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-12">
                <div class="card" style="width: 300px;">
                    <div class="card-img-top">
                      <span>本日精選</span>
                      <i class="far fa-heart"></i>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">焦糖馬卡龍<span class="font-weight-bold">$ 450</span></h5>
                      <a href="#" class="btn">加入購物車</a>
                    </div>
                </div>
              </div>
            <div class="col-lg-4 col-12">
                <div class="card" style="width: 300px;">
                    <div class="card-img-top card-img-top-second">
                      <span>本日精選</span>
                      <i class="far fa-heart"></i>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">焦糖馬卡龍<span class="font-weight-bold">$ 450</span></h5>
                      <a href="#" class="btn">加入購物車</a>
                    </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
                <div class="card" style="width: 300px;">
                    <div class="card-img-top card-img-top-third">
                      <span>本日精選</span>
                      <i class="far fa-heart"></i>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">焦糖馬卡龍<span class="font-weight-bold">$ 450</span></h5>
                      <a href="#" class="btn">加入購物車</a>
                    </div>
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
@import '../assets/css/Home.scss';
</style>

