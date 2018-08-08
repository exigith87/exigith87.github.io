<template>
  <div >

         <header class="container-fluid header">
                <div class="container " >
                     <a href="#" class="logo"><img src="../assets/logo.png" style="width:65px"></a>

                     <nav class="menu">

                          <router-link to="/" exact>Home</router-link>

                          <router-link to="/about" exact>About</router-link>
                          <router-link to="/add" exact>Add new Blog</router-link>
                          <router-link to="/show" exact>showBlog</router-link>
                          <router-link to="/contact" exact>Contact</router-link>

                     </nav>
                </div>

          </header>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style scoped>
a, a:hover{
text-decoration:none
}


.header{
background-color:#349BDB;
height:70px;
line-height:70px
}
.logo{
color:#ffffff;
text-transform:uppercase;
font-wight:bold;
letter-spacing:1px;
float:left;
}

.menu{
float:right;
}

.menu a{
color:#ffffff;
margin-right:20px;
border-radius:40px;
padding:6px 8px;
}

.menu a:hover{
    color:#2C3E50;
}


.router-link-active{

background-color:#000000;

}


</style>
