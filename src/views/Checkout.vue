<template>
    <div>
        <Navbar></Navbar>
        <div>
            <div class="container header">
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
                                    <div class="col-6">
                                        <label for="lastname">姓氏</label><br>
                                        <input type="text" id="lastname" placeholder="姓氏">
                                    </div>
                                    <div class="col-6">
                                        <label for="firstname">名字</label><br>
                                        <input type="text" id="firstname" placeholder="名字">
                                    </div>
                                    <div class="col-12">
                                        <label for="phone">電話</label><br>
                                        <input type="text" id="phone" placeholder="0912-345-678">
                                    </div>
                                    <div class="title-address col-12 mb-1">地址</div>
                                     <div class="col-6">
                                        <select class="custom-select">
                                            <option selected>請選擇</option>
                                            <option value="1">台北市</option>
                                            <option value="2">新北市</option>
                                            <option value="3">桃園市</option>
                                        </select>
                                    </div>
                                     <div class="col-6">
                                        <select class="custom-select">
                                            <option selected>請選擇</option>
                                            <option value="1">信義區</option>
                                            <option value="2">新莊區</option>
                                            <option value="3">龜山區</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <input type="text" placeholder="中正路 123號">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="next-button">
                            <router-link to="/payment" href="#">下一步</router-link>
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
@import '../assets/css/Checkout.scss';
</style>

