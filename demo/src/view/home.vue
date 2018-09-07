<template>
  <div class="home">
    <div class="bannerItem">
      <mt-swipe :auto="4000" :show-indicators="true" :defaultIndex="1">
        <mt-swipe-item>
          <img src="../assets/images/lunbo1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/lunbo2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/lunbo3.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <mu-container class="nav">
      <mu-bottom-nav>
        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {

    }
  },
  mounted () {},
  methods: {

  }
  // components: {
  //   Radio
  // }
}

</script>

<style lang="scss">
  .home {
    .bannerItem {
      width: 100%;
      position: relative;
      padding-bottom: 42.5%;
      height: 0;
    }

    .bannerItem div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100% !important;
    }

    .mint-swipe-item img {
      width: 100%;
      height: 100%;
    }

    .mint-swipe-indicator {
      width: 8px !important;
      height: 8px !important;
    }
  }

  .nav {
    position: absolute;
    bottom: 0px;
  }

</style>
