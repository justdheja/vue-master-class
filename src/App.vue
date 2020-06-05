<template>
  <div id="app">
    <TheNavbar/>
    <div class="container">
    <router-view :key="$route.path" v-show="showPage" @ready="pageReady"/>
    <AppSpiner v-show="!showPage"/>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import AppSpiner from './components/AppSpiner'
import NProgress from 'nprogress'

export default {
  components: {
    TheNavbar,
    AppSpiner
  },
  data() {
    return {
      showPage: false
    }
  },

  methods: {
    pageReady () {
      this.showPage = true
      NProgress.done()
    }
  },

  created() {
    NProgress.configure({
      speed: 200,
      showSpinner: false
    })
    this.$router.beforeEach((to, from, next) => {
      this.showPage = false
      NProgress.start()
      next()
    })
  }
}
</script>

<style>
@import url('./assets/css/style.css');
@import '~nprogress/nprogress.css';

#nprogress .bar {
  background: #57ad8d;
}
</style>
