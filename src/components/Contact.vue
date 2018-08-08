<template>
<div>

    <section class="section-75 section-bottom-60 section-md-100 bg-default bg-image">
    <h1>erold</h1>
    <div class="container">
     <div class="row row-40 no-gutters justify-content-center justify-content-md-end align-items-center">
       <div class="col-sm-10 col-md-7 col-lg-6 col-xl-5" style="max-width:430px;">
         <div class="box bg-cello section-relative">
           <h3 class="text-white abouts_h ">Contact </h3>
           <p class="text-white abouts_p">I'm dedicated to providing professional service with the highest degree of honesty and integrity, and strive to add value to our tax and consulting services.</p>

           <div class="button-block"><router-link to="/about" class="btn btn-icon btn-icon-right btn-white-outline" ><span class="icon icon-xs-smaller fa-angle-right text-primary"></span>About</router-link></div>
         </div>
       </div>

     </div>
    </div>
    </section>





<section id="contact">
    <div class="section-content">
      <h1 class="section-header">Get in <span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with Me</span></h1>
      <h3>Working as a team has always been a great motivation for me to work hard and improve myself. I'm excited to work on a real-world project with you.
      </h3>
    </div>

    <div class="contact-section">
       <div class="container" fom-style>


           <form>
          <div class="row">
              <div class="col-md-6  col-lg-12 col-xs-12 col-sm-12">
                 <div class="form-group">
                     <label for="exampleInputUsername">Your name</label>
                    <input type="text" class="form-control" id="exampleInputUsername" placeholder=" Enter Name" v-model="newBook.name">
                   </div>
                <div class="form-group">
                  <label for="exampleInputEmail">Email Address</label>
                   <input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id" v-model="newBook.email" >
                 </div>

            </div>



           <div class="col-md-6  col-lg-12 col-xs-12 col-sm-12">
               <div class="form-group">
                <label for ="description"> Message</label>
                  <textarea  class="form-control"  id="description" placeholder="Enter Your Message" v-model="newBook.subject"></textarea>
                </div>
               <button type="button" class="btn btn-primary submit" v-on:click="addBook"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
             </div>


        </div>

</form>
         </div>
        </div>
</section>




</div>
</template>

<script>




    import {namesRef} from '../firebase';


    export default {


        data() {

            return {

                newBook: {
                    name: "",
                    email: "",
                    subject: ""
                }
            }


        },


        methods: {
            addBook: function () {
                namesRef.push(this.newBook);
                
            }
            // methods:{
            //send:function () {
            //console.log(this.contact);


            // }

            //listen to the event

            //}

        }
    }
</script>

<style scoped>

.bg-image{
margin:40px auto;
width:100%;
background-image: url(../assets/images/contact.jpg);
   background-size: cover;
   background-position: center top;
    background-repeat: no-repeat;
}

. abouts_h{
text-align:center;
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

/*contact banner*/


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
top:40%;
width:100%;
text-align:center;
}

.inner-banner h1{
color:#349BDB;
}

.inner-banner button{
color:#fff;
background-color:#349BDB;
}

/* contact**/
.contact-section{
width: 1000px;
 margin: 20px auto;

 border: 1px solid #349BDB;
 -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
         box-sizing: border-box;
background-color:#222222;
}
.contact-section{
  padding-top: 40px;
}

.section-header{
margin-top:20px;
}

form label{
color:#fff;
}


form textarea{
 height: 236px;
}

/*



.footer{
background-color:#349BDB;
margin:40px auto;

}

.socialMedia-footer {
  margin-bottom: 20px;
}
.socialMedia-footer > a {
  display: inline-block;
  margin: 0 8px;
}
.footer-bottom-layout {
  text-align: center;
}


.footer-bottom-layout .copyright-tag {
  color:#fff;
}

.socialMedia-footer{
width:50%;

}


.socialMedia-footer img{
width:30px;



}
*/
</style>
