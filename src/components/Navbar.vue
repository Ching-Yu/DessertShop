<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            <router-link to="/" class="navbar-brand navbar-brand-first" href="#"><img src="../assets/images/logo&img/logo-dark.png" alt=""></router-link>
            <router-link to="/" class="navbar-brand" href="#"><img src="../assets/images/logo&img/logotype-sm-dark@2x.png" alt=""></router-link>
            <router-link to="/cart" class="navbar-cart" href="#"><i class="fas fa-shopping-cart"></i></router-link>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <router-link to="/" class="nav-link" href="#">首頁</router-link >
                    </li>
                    <li class="nav-item">
                    <router-link to="/dessert" class="nav-link" href="#">甜點</router-link >
                    </li>
                    <li class="nav-item">
                        <router-link  to="/login" class="nav-link" href="#">登入</router-link >
                    </li>
                    <li class="nav-item">
                        <router-link  to="/cart" class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></router-link >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
$color1: #3F5D45;
$color2: #FFE180;
$color3: #EAF0ED;
$color4: #8DA291;

nav.navbar{
padding: 2rem 2.5rem;

    li.nav-item a.nav-link{
        padding-left: 4rem;
        font-size: 16px;
        font-weight: 600;
        color: #3F5D45;
    }

}

#navbarNav{
flex-direction: row-reverse;
}

.navbar-cart{
    display: none;
}

@media (max-width: 768px){

    nav.navbar{
        display: flex;
        justify-content: space-between;
        padding: 32px 40px;
        a.navbar-cart{
            color: $color1;
            display: inline-block;
            padding-top: 4px;
        }

        .navbar-toggler-icon{
            color: $color1;
        }

        button.navbar-toggler{
            padding: 0;
            line-height: 30px;
        }

        a.navbar-brand{
            padding: 0;
        }

        img{
            width: 114px;
            height: 17px;
        }
    }

    a.navbar-brand-first{
        display: none;
    }
}
</style>

