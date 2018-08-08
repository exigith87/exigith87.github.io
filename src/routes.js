
import Home from './components/Home.vue'
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'



export default[
     {path: '/',    component:Home },
    {path: '/add',    component:addBlog },
    {path: '/show', component:showBlog },
    {path: '/contact', component:Contact },
    {path: '/about', component:About },


]
