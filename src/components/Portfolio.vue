<template>


    <footer>

        <p>{{Copyright}} </p>


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

    footer{

        background-color: #222;
        padding: 6px;
        margin-top: 190px;
    }


    p{
       color: lightgreen;
        text-align: center;
    }
</style>
