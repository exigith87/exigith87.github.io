<template>
<div class="container-fluid">
  <div id="app">
<app-header></app-header>

<router-view></router-view>
      <app-footer></app-footer>
 </div>
</div>

</template>

<script>

    import Home from './components/Home.vue';
    import addBlog from './components/addBlog.vue';
    import showBlog from './components/showBlog.vue';
    import Contact from './components/Contact.vue';
    import About from './components/About.vue';
   import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
   import Portfolio from './components/Portfolio.vue';





    export default {


components:{


      'add-home':Home,
      'add-blog':addBlog,

      'show-blog':showBlog,

      'show-contact':Contact,
        'show-about':About,
        'app-header':Header,
    'app-footer':Footer,
       'app-portfolio':Portfolio,


      },

  data () {
    return {

    }
  }

}
</script>

<style>



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
