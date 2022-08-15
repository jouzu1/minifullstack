<template>
  <div class="container">
    <h2 class="text-center mt-5">Todo App</h2>

    <!--INPUT-->
    <div class="d-flex">
      <input type="text" placeholder = "Enter Task" class="form-control">
      <button class="btn btn-success rounded-0">SUBMIT</button>
    </div>

    <!--TASK TABLE-->
<table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center"></th>
      <th scope="col" class="text-center"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sleep</td>
      <td>To-do</td>
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
// import Services from '../services'
import axios from "axios";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      data:{
        id:0,
        username:"",
        email:"",
        createdAt:"",
        updatedAt:"",
        data:{}
      }
    }
  },
  methods:{
    async getAll(){
      await axios.get(`http://localhost:8080/get`).then(x=>console.log(x.data))
    },
    async get(username){
      await axios.post(`http://localhost:8080/findOne`,username).then(x=>console.log('ini findOne' , x.data))
    },
    async create(data){
      await axios.post(`http://localhost:8080/create`,data).then()
    },
    async update(username, data){
      await axios.put(`http://localhost:8080/update/${username}`,data).then(x=>console.log('ini update' , x.data))
    },
    async delete(username){
      await axios.delete(`http://localhost:8080/delete/${username}`).then(x=>console.log('ini delete' , x.data))
    }
  },
  mounted(){
    this.getAll();
    this.get("test")
    // this.create({username : "jouzu", email : "jouzu"}).
    // this.update("jouzu",{username : "test"})
    // this.delete("test")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
