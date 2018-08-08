<template>
    <div>







        <section class="section-75 section-bottom-60 section-md-100 bg-default bg-image">
        <div class="container">
         <div class="row row-40 no-gutters justify-content-center justify-content-md-end ">
           <div class="col-sm-10 col-md-7 col-lg-6 col-xl-5" style="max-width:500px;">
             <div class="box bg-cello section-relative">
               <h3 class="text-white abouts_h ">About</h3>

               <p class="text-white abouts_p">I'M dedicated to providing professional service with the highest degree of honesty and integrity, and strive to add value to your web site projects.</p>

             </div>
           </div>

         </div>
        </div>
        </section>











<section class="container-fluid about" style="background-color:#3498d8;height:400px;margin:20px auto">


       <div class="container ">
       <div class="row e">
                <div class="col-md-6 para   aboutstyler ">
                 <article>
                       <img src="../assets/images/contact.jpg" class="img-circle imstyle">
                 </article>
                </div>




                         <div class="col-md-6 text-white aboutstyler ">
                          <article>
                                <p>My name is Exinord Marc Erold, I am xxx years old. I am Computer Science Ing, Web/Network Certified and I am passionate about programming.
                                      <p>My hobbies are informatique, configuration of computer devices. the sports,the Maths,and everything that's deal with creativity.And the benotevolat.
                                            

                                    </p>
                          </article>
                         </div>


       </div>
    </div>
</section>






  <section class="container-fluid">

            <div class="container skills">
                    <h2 id="about"> Skills</h2>
                    <hr class="separator">
                          <div class="row">

                                 <div class="col-md-6 col-lg-12">
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
                                                       <h5>BOOTSTRAP 10%</h5>
                                                   </div>
                                          </div>
                                       <div class="progress">
                                              <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                                         <h5>HTML 50%</h5>
                                                  </div>
                                        </div>
                                   <div class="progress">
                                             <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                                     <h5>CSS 30%</h5>
                                                </div>
                                          </div>


                                 <div class="progress">
                                         <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="50" style="width: 60%">
                                             <h5>configuration équipement informatique 60%</h5>
                                           </div>
                                           </div>
          </div>

                          </div>
                 </div>
</section>






<section class="container-fluid news">

    <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">

                 <h2 id="news">Career</h2>
                   <hr class="separator">

          <div class="container">

              <div class="row">



               <div class="col-sm-6">
                   <div class="education-block">
                       <h5>2001-2008</h5>
                       <span class="glyphicon glyphicon-education"></span>
                       <h3>Lycee Antenor Firmin("LAF")</h3>
                       <h5></h5>

                       <p>BAC 1$2 </p>



                    <!--college-->

                    <h5>2010-2014</h5>
                    <span class="glyphicon glyphicon-education"></span>
                    <h3>Ecole Superieure D'Infotronique D'haiti("ESIH")</h3>
                    <h5></h5>

                    <p>Science informatique </p>

                


                                        <!--college-->

                                        <h5>2015-2016</h5>
                                        <span class="glyphicon glyphicon-education"></span>
                                        <h3>Cisco Certified Network Associate("CCNA")</h3>
                                        <h5></h5>

                                        <p>Install and configure router and switches </p>




                                                                                <!--college-->

                                                                                <h5>2016-2017</h5>
                                                                                <span class="glyphicon glyphicon-education"></span>
                                                                                <h3>Formation("Web")</h3>
                                                                                <h5></h5>

                                                                                <p>PHP Certification </p>
                                                                                   <p>Laravel </p>
                                                                                   <p>Vuejs</p>
                                                                                <p>SQL SERVER Certification</p>


                                        <!--college-->

                                        <h5>2017-2018</h5>
                                        <span class="glyphicon glyphicon-education"></span>
                                        <h3>Digicel("")</h3>
                                        <h5></h5>

                                        <p>Install and configure Telecom devices </p>

                                        <h5>2018-until now</h5>
                                        <span class="glyphicon glyphicon-education"></span>
                                        <h3>MSPP("")</h3>
                                        <h5></h5>

                                        <p>Department Chief </p>




                   </div><!--en of education-block-->




                     </div>


</div>




              </div>





              <!--end of col-med-12--->
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

       }

        //listen to the event

    }
</script>

<style scoped>




.bg-image{
margin:40px auto;
width:100%;
background-image: url(../assets/images/about.jpg);
background-size: cover;
background-position: center top;
background-repeat: no-repeat;
    padding: 0;
}






.imstyle {
  border-radius: 50%;
  margin-right:15px;
  width:100%;

}

.ratio {
 background-image: url(../assets/images/contact.jpg);
  background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    height: 0;
    padding-bottom: 100%;
    position: relative;
    width: 100%;
}

.img-responsive {
    display: block;
    height: auto;
    max-width: 100%;
}

.separator3{
height: 3px;
width: 5%;
border:none;
box-shadow: none;
background-color: white;
}

.aboutstyler{
margin:30px auto;
font-size:18px
}




/*=========================
  Icons
 ================= */

/* skills*/


.skills {
    background-color: #fff;
}
.skills .heading h2 {
    color:#3498d8 ;
}
.skills .progress {
    height: 45%;
    margin: 30px 20px;

}
.skills .progress-bar {
    background-color:#3498D8;
}
.skills .progress h5 {
    text-shadow: 1px 1px 1px #000;
}


.separator{
height: 3px;
width: 5%;
border:none;
box-shadow: none;
background-color: #3498d8;
}

/* footer social icons */


#news{
  text-align: center;
  padding-top: 30%;
}
.news article{
  margin-top: 2%;
  margin-bottom: 2%;
}
.news article h2{
  text-align: center;
}


#education {
    background-color: #fff;
}

.education-block {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 30px;
    background-color: #ddd;
    border-radius: 10px;
    border: 2px solid #ccc;
    margin-bottom: 20px;
}

.education-block h5 {
    color: #888;
    font-size: 15px;
    margin-bottom: 15px;
}
.education-block .glyphicon {
    font-size: 40px;
}
.education-block h3 {
    color: #3498d8;
}
.education-block h4 {
    margin-bottom: 20px;
}
.education-block p {
    font-weight: bold;
}
.education-block .red-divider {
    margin-bottom: 20px;
}

</style>
