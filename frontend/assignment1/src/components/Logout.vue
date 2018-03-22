<template>
  <div class="container">
    <NavBar></NavBar>
    <br>
    <form>
      <div class="card bg-light">
        <div class="card-header text-info ">
          Hello {{ usergreeting }},
        </div>
        <div class="card-body text-left">
            <div class="form-group">
              <label >Logout? </label>
              <p></p>
                <router-link :to="{name: 'Login'}">
                      <div class="btn btn-submit btn-danger" @click=logout>Yes! Log me out</div>
                </router-link>
                <router-link :to="{name: 'ListContacts'}">
                     <div class="btn btn-submit btn-info">No! Go back</div>
                </router-link>
            </div>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
import NavBar from './NavBar';
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

function setCookie(cname, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + expires + ";path=/";
}

function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export default {
  name: 'Logout',
  components: {
    NavBar
  },
  data () {
    return {
      usergreeting: ""
    }
  },
  methods: {
    logout(){
        delete_cookie("user")
      }
  },
  mounted() {
    this.usergreeting = getCookie("user")
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
