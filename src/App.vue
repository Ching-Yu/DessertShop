<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$color1: #3F5D45;
$color2: #FFE180;
$color3: #EAF0ED;
$color4: #8DA291;
#app {
  *{
    font-family: Microsoft JhengHei;
    .fas,.fa,.far,.fab{
        font-family: "Font Awesome 5 Free","Font Awesome 5 Brands";
    }
  }

  @media(min-width: 1200px){
     div.container{
      width: 1024px;
      padding: 0 42px;
    }
  }
 

  input{
    &:focus{
      outline: 0!important;
      box-shadow: 0 0 0 0!important;
    }
  }
}
#nav {
  // padding: 30px;
  // a {
  //   font-weight: bold;
  //   color: #2c3e50;
  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>
