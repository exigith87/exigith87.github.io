<template>
<div >
            <section class="container-fluid banner">
                  <div class="ban">
                         <img src="../assets/images/banner.jpg" alt="site banner">
                  </div>

                  <div class="inner-banner">
                  <h1>Welcome to my vuejs and firebase app</h1>
                      <router-link to="/contact"> <button class="btn btn-custom">Contact Me</button></router-link>

                  </div>
            </section>


      <section class="container-fluid description ">


                <div class="container">

                    <div class="row">

                           <div class="col-md-4 col-sm-12 col-lgx-12">

                                  <router-link to="/about">
                               <div class="card">
                                  <div class="card-body">
                                    <h5 class="card-title">About Me</h5>
                                    <p class="card-text">This is a wider  supporting text  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod supporting text  Lorem ipsum </p>
                                   </div>

                                   <img class="card-img-bottom" src="../assets/logo.png" alt="Card image cap">

                                  </div>
                                     </router-link>
                           </div>


                         <div class="col-md-4 col-sm-12 col-lgx-12">


                           <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">Portofolio</h5>
                                <p class="card-text">This is a wider  supporting text  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod supporting text  Lorem ipsum </p>
                             </div>

                               <img class="card-img-bottom" src="../assets/logo.png" alt="Card image cap">
                           </div>
                       </div>
                     



                   <div class="col-md-4 col-sm-12 col-lgx-12">

                      <router-link to="/contact">
                       <div class="card">
                       <div class="card-body">
                            <h5 class="card-title">Contact Me</h5>
                            <p class="card-text">This is a wider  supporting text  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod supporting text  Lorem ipsum </p>
                         </div>
                           <img class="card-img-bottom" src="../assets/logo.png" alt="Card image cap">



                        </div>

                        </router-link>
               </div>




                           </div>

                  </div>
    </section>








</div>
</template>

<script>



    export default {


       data()
       {

           return{




           }

       },

       methods:{


       }

        //listen to the event

    }
</script>

<style scoped>

.container-fluid{
padding:0;
margin:0;

}
template{

padding:0;
margin:0;
}
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
}

.menu a:hover{
color:#2C3E50;

}

.banner{
width:100%;
max-width:100%;
}

.ban{
width:100%;
max-width:100%;
position:relative;
}

.ban img{
width:100%;
max-width:100%;
}

.inner-banner{
position:absolute;
top:20%;
width:100%;
text-align:center;
}

.inner-banner h1{
color:#fff;
}

.inner-banner button{
color:#fff;
background-color:#349BDB;
}

.inner-banner button:hover{
    color:#2C3E50;

}



.description{

margin: 80px auto;
}


.card-img-bottom{
width:100%;

}

</style>
