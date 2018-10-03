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
                                    <div class="col-12 d-flex">
                                        <a href="#" class="invoice-category" :class="{ 'active':category == '1'}" @click="category = '1'">電子發票</a>  
                                        <a href="#" class="invoice-category" :class="{ 'active':category == '2'}" @click="category = '2'">郵寄發票</a>      
                                    </div>

                                    <div  class="col-12 px-0" v-if="category == '1'">
                                        <div class="col-12">
                                        <label for="email">電子郵件信箱</label>
                                        <input type="text" id="email" placeholder="example@email.com">
                                        </div>
                                        <div class="col-12">
                                        <label for="number">統一編號 (選填)</label>
                                        <input type="text" id="number" placeholder="12345678">
                                        </div>
                                    </div>
                                    
                                    <div class="col-12" v-if="category == '2'">
                                    <div class="title-address col-12 mb-1 pl-0 d-flex justify-content-between">地址
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label" for="defaultCheck1">
                                                同運送地址
                                            </label>
                                        </div>
                                    </div>
                                        <div class="row">
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
                                            <div class="col-12 mb-3">
                                                <input type="text" placeholder="中正路 123號">
                                            </div>
                                            <div class="col-12">
                                                <label for="number">統一編號 (選填)</label>
                                                <input type="text" id="number" placeholder="12345678">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="next-button">
                            <router-link to="/success" href="#">確認結帳</router-link>
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
  },
    data(){
        return{
            category: '1',
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/Invoice.scss'
</style>

