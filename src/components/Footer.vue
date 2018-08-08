<template>




    <footer class="container-fluid footer">

        <div class="footer-bottom-layout">

            <div class="socialMedia-footer">
                <a href="#"><img src="../assets/images/fa.png" class="image-circle"></a>
                <a href="#"><img src="../assets/images/fa.png" class="image-circle"></a>
                <a href="#"><img src="../assets/images/fa.png" class="image-circle"></a>
            </div>
            <div class="copyright-tag">Copyright © 2017 company name. All Rights Reserved.</div>
        </div>


    </footer>
</template>

<script>



    export default {


       data()
       {

           return{
               Copyright:'Copyright  2018'

           }

       }

        //listen to the event

    }
</script>

<style scoped>

    .footer{
        background-color:#349BDB;
        margin-top:20px;
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

    .socialMedia-footer{
        width:50%;

    }


    .socialMedia-footer img{
        width:40px;



    }

    .footer-bottom-layout .copyright-tag {
        color:#fff;
    }
</style>
