<template>
  <div class="container">
    <NavBar></NavBar>
    <br>
    <form>
      <div class="card bg-light">
        <div class="card-header text-info ">
          Login
        </div>
        <div class="card-body text-left">
        <div class="form-group">
          <label >User Account </label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group" >
          <label class="pull-left">Password: </label>
          <input type="password" class="form-control" v-model="user.password">
        </div class="m-0">
           <router-link :to="{name: 'NewUsers'}">
                 <div class="btn btn-secondary">I am not a user yet</div>
            </router-link>
                 <div class="btn btn-submit btn-success" @click=checkCredentials>Submit</div>
            <router-link :to="{name: 'ListContacts'}">
          <div class="btn btn-submit btn-info">Go Back</div>
          </router-link>
      </div>
      </div>
    </form>
  </div>

</template>

<script>
import NavBar from './NavBar';
import axios from 'axios'
function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                console.log("cookie set")
            }
export default {
  name: 'Login',
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
    
    checkCredentials () {
      //var check
      axios.get('http://crud-tutorial-amilabell.c9users.io:8081/users/find?name=' + this.user.username)
        .then((response) => {
          console.log(response.data)
          
          const check = response.data[0]
          console.log(check)
          if(!check){
            alert("no registered user")
          }else{
           if(this.user.password === check.password){
             alert("nicely done")
             setCookie("user", this.user.username, 1)
             this.$router.push('ListContacts')
           }else{
             alert("wrong password")
           }
        }
      }).catch((error)=> {
            console.log(error)
      })
},
 
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
