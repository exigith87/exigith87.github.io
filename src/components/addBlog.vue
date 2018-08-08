<template>

  <div id="addBlog">

<form>
<h3>Add New Blog</h3>
<label>Blog Title: </label>
<input type="text" required v-model.lazy="blog.title">
<label>Blog content: </label>
<textarea v-model.lazy="blog.content"></textarea>


<div id="checkboxes">

<label>Vuejs</label>
<input type="checkbox" value="Vuejs"  v-model="blog.categories">
<label>Html5</label>
<input type="checkbox" value="Html5"  v-model="blog.categories">

<label>CSS3</label>
<input type="checkbox" value="CSS3"  v-model="blog.categories">


</div>

<button @click="add()">Add Blog</button>
</form>

<div id="peview">
<h3>Preview Blog</h3>
<p>Blog Title:{{blog.title}}</p>
<p>Blog content:{{blog.content}}</p>
<p>{{blog.content}}</p>
<p>categories</p>
<ul>
<li v-for="category in blog.categories">{{category}}</li>
</ul>
</div>

  </div>

</template>

<script>



    export default {


       data()
       {

           return{

              blog:{
              title:'',
              content:'',
              categories:[]
              }


           }

       },

       methods:{

       add:function(){

       this.$http.post('http://jsonplaceholder.typicode.com/posts/1',{
       title:this.blog.title,
       body:this.blog.content,
       }).then(function(data){
       console.log(data);
       });
       }
       }

        //listen to the event

    }
</script>

<style scoped>
#addBlog *{
box-sizing:border-box;

}
#addBlog{

margin: 20px auto;
max-width:500px
}

label{
display:block;
margin: 20px 0 10px
}

input[type="text"], textarea{
display:block;
width:100%;
padding:8px

}

#peview{
padding: 10px 20px;
border: 2px solid #ccc;
margin: 30px 0;
}

h3{
margin-top:10px
}

#checkboxes input{
display:inline-block;
margin-right:10px;

}

#checkboxes label{
display:inline-block;

}

ul{
list-style-type: none
}


</style>
