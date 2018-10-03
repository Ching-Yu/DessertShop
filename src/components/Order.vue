<template>
    <div>
        <div class="order-box">
            <h4>訂單摘要</h4>
            <div class="order-content">
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
        </div>

        <div class="list-box">
            <h4>購物清單</h4>
            <div class="list-content">
                <div class="d-flex align-items-center justify-content-around">
                    <div class="flex-item flex-background"></div>
                    <div class="flex-item order-detail">
                        <p>焦糖馬卡龍</p>
                        <span>NT$ 900</span>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-around">
                    <div class="flex-item flex-background flex-background-second"></div>
                    <div class="flex-item order-detail">
                        <p>焦糖馬卡龍</p>
                        <span>NT$ 900</span>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-around">
                    <div class="flex-item flex-background flex-background-third"></div>
                    <div class="flex-item order-detail">
                        <p>焦糖馬卡龍</p>
                        <span>NT$ 900</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
// @ is an alias to /src
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
$color1: #3F5D45;
$color2: #FFE180;
$color3: #EAF0ED;
$color4: #8DA291;



.order-box{
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid $color3;
    .d-flex{
        padding-top: 8px;
        span{
         font-size: 16px;
         color: $color4;   
        }
    }

    .total-money {
        padding: 16px 0;
        span{
            font-size: 20px;
            font-weight: bold;
            color: $color1;
        }
    }
}

.order-content,.list-content{
    padding: 0 20px;
}

.checkout-button{
    text-align: center;
    background: $color2;
    
    a{
        width: 100%;
        display: inline-block;
        padding: 21px 0;
        font-size: 24px;
        color: $color1;
        font-weight: bold;
        &:hover{
            text-decoration: none;
            color: $color1;
        }
    }
}

h4{
    padding: 16px;
    text-align: center;
    color: $color1;
    background: $color3;
    font-weight: bold;
}

.list-box{
    padding: 0 20px;
}

.flex-background{
    width: 120px;
    height: 80px;
    margin-bottom: 20px;
    background: url(../assets/images/brenda-godinez-367708-unsplash.jpg);
    background-position: center center;
    background-size: cover;
}


.flex-background-second{
    width: 120px;
    height: 80px;
    background: url(../assets/images/food-photographer-jennifer-pallian-650641-unsplash.jpg);
    background-position: center center;
    background-size: cover;
}

.flex-background-third{
    width: 120px;
    height: 80px;
    background: url(../assets/images/brooke-lark-96398-unsplash.jpg);
    background-position: center center;
    background-size: cover;
}

.order-detail{
    color: $color4;
    
    p{
        margin-bottom: 5px;
        font-size: 20px;
    }

    span{
        font-size: 16px;
    }
}

@media (max-width: 576px){
    *{
        display: none;
    }
}

@media(min-width: 575px) and (max-width:768px){
    div.list-content{
        padding: 0;
    }
}
</style>

