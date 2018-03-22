<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand"> Assignment </router-link>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li>
              <button id="logout" class="btn btn-danger btn-large" @click=loggingout>
                   <img src="https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png" width="20"> {{username}}</img>
              </button>
      
         <router-link :to="{name: 'Login'}">
              <button id="login" class="btn btn-success btn-large">
                   {{login_var}}
              </button>
         </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            
        }
    }
    return ("");
}
export default {
  name: 'NavBar',
  components: {
  },
  data() {
    return{
      username:"",
      login_var: "",
    }
  },
  mounted() {
    this.username = getCookie("user")
    if(getCookie("user") === ""){
      this.login_var = "Login"
      document.getElementById("login").disabled = false
      document.getElementById("logout").disabled = true
      
    }else{
      this.login_var = "You are logged in"
      document.getElementById("login").disabled = true
      document.getElementById("logout").disabled = false
    }
  },
  methods: {
    loggingout: function(){
      this.$router.push('Logout')
    }
  }
};
</script>

<style>
    nav{
        width: 104%;
        margin-left: -2%;
    }
</style>