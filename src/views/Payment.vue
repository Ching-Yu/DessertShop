<template>
    <div>
        <Navbar></Navbar>
        <div>
            <div class="header container">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="ship-wrapper">
                            <div class="top">
                                <div class="title d-flex justify-content-between align-items-center">
                                    <h2 class="d-inline-block">
                                        運送
                                    </h2>
                                    <div class="progress-rate d-flex justify-content-between align-items-center">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </div>
                                </div>

                                <div class="row">
                                     <div class="col-12">
                                        <label for="card-number">信用卡卡號</label><br>
                                        <div class="input-group mb-3">
                                          <input type="text" id="card-number" placeholder="9012-3456-7890-1234" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
                                          <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon1"><i class="far fa-credit-card"></i></span>
                                          </div>
                                      </div>
                                    </div>
                                    <div class="card-title col-12">
                                      <label for="card-lastname">持卡人姓名</label>
                                    </div>
                                    <div class="col-6">
                                        <input type="text" id="card-lastname" placeholder="王">
                                    </div>
                                    <div class="col-6">
                                        <input type="text" id="card-firstname" placeholder="小明">
                                    </div>
                                    <div class="title-time col-12 mb-1">有效期限</div>
                                     <div class="col-6">
                                        <select class="custom-select">
                                            <option selected>請選擇</option>
                                            <option v-for=" i in 12" :value="i" :key="i">{{i}}月</option>
                                        </select>
                                    </div>
                                     <div class="col-6">
                                        <select class="custom-select">
                                            <option selected>請選擇</option>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <label for="card-password">背面末三碼</label>
                                        <input type="text" placeholder="123" id="card-password">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="next-button">
                            <router-link to="/invoice" href="#">下一步</router-link>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <order></order>
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
import Order from '../components/Order.vue'
export default {
  components: {
    Navbar,
    Footer,
    Order,
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/Payment.scss';
</style>

