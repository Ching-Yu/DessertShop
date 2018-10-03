<template>
<div>
    <div class="subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-flex align-items-center">
                    <img src="../assets/images/logo&img/logo-light.png" alt="">
                    <span class="subscribe-text">訂閱你我的甜蜜郵件</span>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text first"><i class="fas fa-envelope"></i></span>
                    </div>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                    <div class="input-group-append">
                        <button class="btn">
                        <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-section">
        <div class="container">
        <div class="row">
            <div class="col-md-6">
            <img src="../assets/images/logo&img/logotype.png" alt="">

            <p class="contact">
                07-1234-5678<br/>
                sweetaste@email.com<br/>
                800 高雄市新興區幸福路 520 號
            </p>
            </div>
            <div class="col-md-6 text-right">
            <img src="../assets/images/logo&img/sm-今天是個吃甜點的好日子.png" alt="">
            </div>
        </div>
        </div>
    </div>

    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                <div class="contact-icon">
                    <a href="#"><i class="fas fa-at"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                </div>
                </div>
                <div class="col-md-6 footer-right">
                <p>© 2018 Sweetaste* All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    
</script>

<style lang="scss" scoped>
$color1: #3F5D45;
$color2: #FFE180;
$color3: #EAF0ED;
$color4: #8DA291;
.subscribe{
      background: $color1;
      padding: 24px 0;
      img{
        height: 40px;
      }
      
      span{
        display: inline-block;
        color: white;
        font-size: 24px;
        margin-left: 20px;
      }
      
      .input-group{
        
        .input-group-prepend{
          
          .input-group-text{
            border: 0;
            padding: 0 0 0 20px;
            border-radius: 0;
            background: $color3;
            color: $color1;
            margin-left: 0;
            i{
              line-height: 68px;
            }
          }
        }
        
        .form-control{
          height: 68px;
          border-color: #fff;
          background: $color3;
          &:focus{
            outline: 0;
          }
        }
        
        .input-group-append{
          
          .btn{
            margin: 0;
            border: 0;
            padding: 16px 24px;
            border-radius: 0;
            color: $color1;
            background: $color2;
          }
        }
      }
    }

    .contact-section{
      background: $color3;
      padding-top: 40px;
    }

    .contact{
      color: $color1;
      margin: 115px 0 30px 0;
    }

    .contact-icon a{
      font-size: 32px;
      color: $color1;
      padding-right: 8px;
      &:hover{
        text-decoration: none;
        color: $color1;
      }
    }

    .footer{
      background: $color3;
    }
    
    .footer-right{
      color: $color1;
      font-size: 16px;
      p{
        text-align: right;
        line-height: 48px;
        margin: 0;
      }
    }

@media(max-width: 576px){
  .subscribe{
    padding: 40px 25px;
    .col-lg-6{
      justify-content: center;
    }

    .col-lg-6:first-child{
      padding-bottom: 32px;
    }

    span.input-text-first{
      margin: 0;
    }
  }

  p.contact{
    margin-top: 40px;
  }

  .text-right{
    display:none;
  }

  .footer-right p{
    text-align: left;
  }
}

@media(min-width: 577px) and (max-width: 768px){
.subscribe{
    .col-lg-6{
      justify-content: center;
    }

    .col-lg-6:first-child{
      padding-bottom: 32px;
    }

    span.input-text-first{
      margin: 0;
    }
  }
}
</style>

