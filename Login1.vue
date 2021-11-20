<template>
  <div class="main">
    <VueSparkles>
    <img src="../assets/trainin.jpeg" alt="">
    </VueSparkles>

    <h1>Login</h1>
    <div>
        <input type="text" v-model="name" placeholder="User_Name"><br><br>
        <input type="text" v-model="password" placeholder="Password"><br><br>
        <button type="button" @click="login()">Login</button>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
    name: 'Login',
    data() {
      return {
        name:'',
        password:'',
      }
    },
    methods: {
     Login: async function() {
        var results = await axios.post("https://jsonplaceholder.typicode.com/posts)",{
          name: this.name,
          password: this.password,
        });
        console.log("WARNING: ",results);
        if (results.status==201) {
          window.alert('signin Done')
          // kuladeep
          localStorage.setItem('user-info',JSON.stringify(results.data));
          this.$router.push({name:'home'})
        }
      }
    },
    mounted(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(Res)==> {
         this.datapacket =Res.data;
         console.log("fariahh",Res);
       }
      }
    }
}
</script>
<style>
.main{
  text-align: center;
}
img{
  height: 150px;
  width: 150px;
}
button{
  height: 30px;
  width: 200px;
}
input{
  height: 30px;
  width: 200px
}
</style>