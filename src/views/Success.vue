<template>
    <div>
        <Navbar></Navbar>
        <div class="container header d-flex justify-content-center align-items-center">
            <div class="row">
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <div class="content">
                        <div class="progress-rate d-flex justify-content-between align-items-center">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                        <h1>
                            付款成功
                        </h1>
                        <router-link to="/" href="#" class="continue-button">繼續購物</router-link>
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
@import '../assets/css/Success.scss';
</style>

