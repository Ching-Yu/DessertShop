<template>
  <div>
    <Navbar></Navbar>
      <div class="container">
        <div class="row">
          <div class="col-12 header">
            <img src="../assets/images/logo&img/lg-想吃甜點是不需要理由的.png" alt="" class="img-absolute">
          </div>
        </div>
      </div>

      <div class="container content">
        <div class="row">
          <div class="col-md-4">
            <ul class="list-group">
              <li class="list-group-item active">甜點類別</li>
              <li class="list-group-item">所有甜點 (48)</li>
              <li class="list-group-item">本日精選 (10)</li>
              <li class="list-group-item">人氣推薦 (26)</li>
              <li class="list-group-item">新品上是 (12)</li>
            </ul>
          </div>

          <div class="col-md-8">
              <div class="row">
                <div class="col-sm-6 mb-4">
                    <div class="card" style="width: 18.75rem;">
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
                <div class="col-sm-6 mb-4">
                    <div class="card" style="width: 18.75rem;">
                        <div class="card-img-top second">
                          <span>本日精選</span>
                          <i class="far fa-heart"></i>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">焦糖馬卡龍<span class="font-weight-bold">$ 450</span></h5>
                          <a href="#" class="btn">加入購物車</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card" style="width: 18.75rem;">
                        <div class="card-img-top third">
                          <span>本日精選</span>
                          <i class="far fa-heart"></i>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">焦糖馬卡龍<span class="font-weight-bold">$ 450</span></h5>
                          <a href="#" class="btn">加入購物車</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card" style="width: 18.75rem;">
                        <div class="card-img-top fourth">
                          <span>本日精選</span>
                          <i class="far fa-heart"></i>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">焦糖馬卡龍<span class="font-weight-bold">$ 450</span></h5>
                          <a href="#" class="btn">加入購物車</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card" style="width: 18.75rem;">
                        <div class="card-img-top fifth">
                          <span>本日精選</span>
                          <i class="far fa-heart"></i>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">焦糖馬卡龍<span class="font-weight-bold">$ 450</span></h5>
                          <a href="#" class="btn">加入購物車</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card" style="width: 18.75rem;">
                        <div class="card-img-top sixth">
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

              <nav class="nav-page" aria-label="Page navigation example">
                <ul class="pagination d-flex justify-content-end">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true"><i class="fas fa-caret-left"></i></span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true"><i class="fas fa-caret-right"></i></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>

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
    Footer,
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/Dessert.scss'
</style>

