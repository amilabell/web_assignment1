<template>
  <div class="container">
      <NavBar></NavBar>
    <br>
    <form class="form-inline">
        <input id="searchfield" class="form-control mr-sm-2" type="search" placeholder="Search Contacts" aria-label="Search" v-model="search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <router-link :to="{name: 'NewContacts'}">
            <button id="addContact" class="btn btn-info my-2 my-sm-0">Add Contact</button>
        </router-link>
        
    </form> 
    <br>
<div id="contact_container">
    <div class="row" >
    
    <div class="col-sm" v-for="contact in filteredContacts" v-bind:key="contact._id">
        <img v-bind:src="contact.image_url" width="250px">
        <h3>{{contact.firstName}} {{contact.lastName}}</h3>
        <h6>phone: {{contact.phone}}</h6>
        <h6>email: {{contact.email}}</h6>
        <h6>facebook: {{contact.facebook}}</h6>
         <button class="btn btn-xs btn-danger" data-toggle="modal" data-target=".bd-example-modal-sm" @click="delContact(contact._id)"><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png" width="20px"/></button>
            <router-link :to="{ path: 'editContact/' + contact._id}">
               <button class="btn btn-xs btn-info"><img src="https://png.icons8.com/metro/1600/edit.png" width="20px"/></button>
            </router-link>
    </div>
</div>
</div>
</div>
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
    return "";
}
const url= 'http://crud-tutorial-amilabell.c9users.io:8081'
import axios from 'axios'
import NavBar from './NavBar';
import Search from './Search';
export default {
  name: 'ListContacts',
  components: {
    NavBar,
    Search
  },
  data() {
    return {
       contacts: [],
       search: "",
    }
  },
  methods: {
      delContact (contactid) {
      var url = 'http://crud-tutorial-amilabell.c9users.io:8081/contacts/delete?_id=' + contactid
      axios.delete(url)
        .then((response) => {
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
  },
    computed: {
        filteredContacts: function(){
            return this.contacts.filter((contact) => {
                return contact.firstName.match(this.search);
            });
    }
    },
  mounted() {
      console.log(getCookie("user"))
    axios.get('http://crud-tutorial-amilabell.c9users.io:8081/contacts/get?username='+ getCookie("user"))
      .then((response) => {
        this.contacts = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col-sm{
    float:none;
    margin: 5px;
    margin-bottom: 20px;
    border: solid 2px;
    padding: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 140em;
}
#contact_container{
   border: solid;
   border-width: 1.5px;
   border-color: lightgrey;
   padding: 15px;
   padding-left: 25px;
   padding-right: 25px;
}
form{
        width:80%;
        margin-left: 10%
    }
    #searchfield{
        width: 75%;
    }
    #addContact{
        margin-left: 8px;
    }
</style>
