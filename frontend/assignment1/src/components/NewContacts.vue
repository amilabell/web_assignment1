<template>
 <div class="container">
    <NavBar></NavBar>
    <br>
    <form>
      <div class="card">
          <div class="card-title p-2">New Contact</div>
        <div class="card-body text-left">
        <div class="form-group" >
          <label class="">Contact ID* </label>
          <input type="text" class="form-control" v-model="contact.contactid">
        </div>
        <div class="form-group" >
          <label class="pull-left">FirstName* </label>
          <input  class="form-control" v-model="contact.firstName" required />
        </div>
        <div class="form-group" >
          <label class="pull-left">LastName* </label>
          <input  class="form-control" v-model="contact.lastName">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><img src="http://www.pngmart.com/files/1/Phone-Transparent-Background.png" width="15px"/></span>
          </div>
           <input type="text" class="form-control" placeholder="phone number"aria-label="Phone" aria-describedby="basic-addon1" v-model="contact.phone">*
          </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" class="form-control" placeholder="email" aria-label="Email" aria-describedby="basic-addon1" v-model="contact.email">
        </div>
        <div class="form-group" >
          <label class="pull-left">Facebook </label>
          <input  class="form-control" placeholder="Facebook">
        </div>
        <div class="form-group" >
          <label class="pull-left">imgURL </label>
          <input  class="form-control" placeholder="imgURL" v-model="contact.image_url">
        </div>
              <button type="submit" id="submit" class="btn btn-success" @click=sendContact>Submit</button>
        <router-link :to="{name: 'ListContacts'}">
              <button class="btn btn-info">Go Back</button>
        </router-link>
      </div>
      </div>
    </form>
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
    return ("");
}
import NavBar from './NavBar';
import axios from 'axios'
export default {
  name: 'NewContacts',
  components: {
    NavBar
  },data () {
    return {
      contacts: [],
      contact: {
        "contactid": "",
        "firstName": "",
        "lastName": "",
        "email": "",
        "image_url": "",
        "facebook": "",
        "phone": "",
        "image_url": "",
        "username": "",
      },
    }
  },
   
  methods: {
    sendContact () {
      let newContact = {
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        email: this.contact.email,
        image_url: this.contact.image_url,
        facebook: this.contact.facebook,
        phone: this.contact.phone,
        username: getCookie("user") 
      }
      console.log()

      if(getCookie("user") === ""){
        alert("You are not logged in")
      }else{
        if(this.contact.contactid === ""|| this.contact.firstName === "" || this.contact.lastName === "" || this.contact.phone === ""){
          alert("Please fill out all fields marked with *")
          //return null
        }else{
          axios.post('https://crud-tutorial-amilabell.c9users.io:8081/contacts/new', newContact)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
          this.$router.push('ListContacts')
        }
      }
    }
  }
}
</script>
