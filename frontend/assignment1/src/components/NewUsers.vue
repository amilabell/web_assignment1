<template>
  <div class="container">
    <NavBar></NavBar>
    <br>
    <form>
      <div class="card bg-light">
        <div class="card-header text-info ">
          Sign Up
        </div>
        <div class="card-body text-left">
        <div class="form-group">
          <label >Firstname: </label>
          <input type="text" class="form-control" v-model="user.firstName">
        </div>
        <div class="form-group">
          <label >User Account: </label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group" >
          <label class="pull-left">Password: </label>
          <input type="password" class="form-control" v-model="user.password">
        </div class="m-0">
           <router-link :to="{name: 'Login'}">
                 <div class="btn btn-secondary">I already have an account</div>
            </router-link>
           <!-- <router-link :to="{name: 'ListContacts'}">-->
                 <div class="btn btn-submit btn-success" @click=sendUser>Submit</div>
            <!--</router-link>-->
          <div class="btn btn-submit btn-info">Go Back</div>
      </div>
      </div>
    </form>
  </div>

</template>
<script>
import NavBar from './NavBar';
import axios from 'axios';
export default {
  name: 'newUsers',
  components: {
    NavBar
  },
  data () {
    return {
      user: {
        "firstname": "",
        "username": "",
        "password": ""
      }
    }
  },methods: {
    sendUser () {
      let newUser = {
        firstName: this.user.firstName,
        username: this.user.username,
        password: this.user.password
      }
      var check
      axios.get('http://crud-tutorial-amilabell.c9users.io:8081/users/find?name=' + this.user.username)
        .then((response) => {
          console.log(response.data)
          
          check = response.data[0]
          console.log(check)
          if(check){
            alert("Username already taken")
          }else{
            axios.post('https://crud-tutorial-amilabell.c9users.io:8081/users/new', newUser)
            .then((response) => {
              console.log(response)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
          .catch((error)=> {
            console.log(error)
      })
      console.log("before " + check)
      
      //console.log(newUser)
        axios.post('https://crud-tutorial-amilabell.c9users.io:8081/users/new', newUser)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      //window.location.reload()
    }
}
}
</script>

<style scoped>
.container{
  border:solid;
  border-width: 1px;
  border-color: lightgrey;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 80vh;
}
form{
  width: 70%;
  margin-left: 15%;
}

</style>