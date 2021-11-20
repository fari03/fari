<template>
  <div class="main">
    <img src="../assets/far.jpeg" alt="">
    <h1>Login</h1>
    <div>
       <label for="Username"></label>
        <input type="text" v-model="name" placeholder="User_Name"><br><br>
        <label for="Password"></label>
        <input type="text" v-model="password" placeholder="Password"><br><br>
        <button type="button" @click="signin()">signin</button>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
    name: 'login',
    data() {
      return {
        name:'',
        password:'',
      }
    },
    methods: {
     signin: async function() {
        var results = await axios.post("http://localhost:3000/user",{
          name: this.name,
          password: this.password,
        });
        console.log("WARNING: ",results);
        if (results.status==201) {
          window.alert('Successfully Logged In')
          

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
