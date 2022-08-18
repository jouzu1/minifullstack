<template>
  <div class="container">
    <h2 class="text-center mt-5">List User</h2>
    <!--INPUT-->
    <div class="d-flex">
      <input v-model="username" type="text" placeholder = "Enter Username" class="form-control">
      <input v-model="email" type="text" placeholder = "Enter Email" class="form-control">
      <button @click="submitButton" class="btn btn-success rounded-0">SUBMIT</button>
    </div>
    <!--TASK TABLE-->
<table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Created At</th>
      <th scope="col">Updated At</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center"></th>
      <th scope="col" class="text-center"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in dataObj" :key="index">
      <td>{{ data.username }}</td>
      <td>{{ data.email }}</td>
      <td>{{ data.createdAt }}</td>
      <td>{{ data.updatedAt }}</td>
      <td class="text-center">
        <span class="fa fa-pen"></span>
      </td>
      <td class="text-center">
        <span class="fa fa-trash"></span>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
        id:0,
        username:"",
        email:"",
        createdAt:"",
        updatedAt:"",
        dataObj:[],
        dummy:[{username : "test1"}, {username : "test2"}]
    }
  },
  methods:{
    async getAll(){
      await axios.get(`http://localhost:8080/get`)
      .then((x)=>{
        this.dataObj = x.data
        this.dataObj.forEach(x=>console.log(x.username))
      })
      .catch(x=>console.log(x))
    },
    async get(username){
      await axios.post(`http://localhost:8080/findOne`,username).then(x=>console.log('ini findOne' , x.data)).catch(x=>console.log(x))
    },
    async create(data){
      await axios.post(`http://localhost:8080/create`,data).then(x=>console.log(x)).catch(x=>console.log(x))
    },
    async update(username, data){
      await axios.put(`http://localhost:8080/update/${username}`,data).then(x=>console.log('ini update' , x.data))
    },
    async delete(username){
      await axios.delete(`http://localhost:8080/delete/${username}`).then(x=>console.log('ini delete' , x.data))
    },

    submitButton(){
      if(this.username.length === 0 && this.email.length === 0){
        return
      }
      this.create({username : this.username, email : this.email})
      window.location.reload()
    }
  },
  mounted(){
    this.getAll();
    this.get("test");
    // this.create({username : "jouzu", email : "jouzu"}).
    // this.update("jouzu",{username : "test"})
    // this.delete("test")
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>