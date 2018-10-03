<template>
    <div>
        <Navbar></Navbar>
        <div class="header container">
            <div class="row">
                <div class="col-sm-8">
                    <h3>
                        您的購物車
                    </h3>
                    <div class="cart-detail">
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="flex-item flex-background col-sm-3 col-6"></div>

                            <div class="flex-item flex-item-second col-sm-6 col-6 d-flex align-items-center justify-content-center">

                                <div class="intro">
                                    <p>焦糖馬卡龍</p>
                                    <span>NT$ 450</span>
                                </div>
                                
                                <div class="flex-item d-flex button-group align-items-center">
                                    <button class="btn">-</button>
                                    <span>2</span>
                                    <button class="btn">+</button>
                                </div>
                            </div>

                            <div class="flex-item-fourth col-sm-2 col-12">NT$ 900</div>

                            <div class="flex-item-fifth col-sm-1 text-right">
                                <a href="#"><i class="far fa-trash-alt"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="cart-detail">
                        <div class="row d-flex align-items-center  justify-content-between">
                            <div class="flex-item flex-background flex-background-second col-sm-3 col-6"></div>

                            <div class="flex-item flex-item-second col-sm-6 col-6 d-flex align-items-center justify-content-center">

                                <div class="intro">
                                    <p>焦糖馬卡龍</p>
                                    <span>NT$ 450</span>
                                </div>
                                
                                <div class="flex-item d-flex button-group align-items-center">
                                    <button class="btn">-</button>
                                    <span>2</span>
                                    <button class="btn">+</button>
                                </div>
                            </div>

                            <div class="flex-item-fourth col-sm-2 col-12">NT$ 900</div>

                            <div class="flex-item-fifth col-sm-1 text-right">
                                <a href="#"><i class="far fa-trash-alt"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="cart-detail">
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="flex-item flex-background flex-background-third col-sm-3 col-6"></div>

                            <div class="flex-item flex-item-second col-sm-6 col-6 d-flex align-items-center justify-content-center">

                                <div class="intro">
                                    <p>焦糖馬卡龍</p>
                                    <span>NT$ 450</span>
                                </div>
                                
                                <div class="flex-item d-flex button-group align-items-center">
                                    <button class="btn">-</button>
                                    <span>2</span>
                                    <button class="btn">+</button>
                                </div>
                            </div>

                            <div class="flex-item-fourth col-sm-2 col-12">NT$ 900</div>

                            <div class="flex-item-fifth col-sm-1 text-right">
                                <a href="#"><i class="far fa-trash-alt"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-sm-4 checkout-wrapper">
                    <div class="order-box">
                        <h4>訂單摘要</h4>
                        <div class="d-flex justify-content-between">
                            <span>小計</span>
                            <span>NT$ 2,700</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>運費</span>
                            <span>NT$ 300</span>
                        </div>
                        <div class="d-flex justify-content-between total-money">
                            <span>總計</span>
                            <span>NT$ 3,000</span>
                        </div>
                    </div>
                    <div class="checkout-button">
                        <router-link to="/checkout" href="#">結帳</router-link>
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
@import '../assets/css/Cart.scss';
</style>

