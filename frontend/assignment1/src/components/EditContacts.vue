<template>
  <div class="container">
    <NavBar></NavBar>
    <br>
    <form>
      <div class="card">
          <div class="card-title p-2">Edit {{old.firstName}}</div>
        <div class="card-body text-left">
        <div class="form-group" >
          <label class="pull-left">FirstName </label>
          <input type="text" class="form-control" v-model="old.firstName">
        </div>
        <div class="form-group" >
          <label class="pull-left">LastName </label>
          <input type="text" class="form-control" v-model="old.lastName" >
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><img src="http://www.pngmart.com/files/1/Phone-Transparent-Background.png" width="15px"/></span>
          </div>
           <input type="text" class="form-control" v-model="old.phone" aria-label="Phone" aria-describedby="basic-addon1">
          </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" class="form-control" v-model="old.email" aria-label="Email" aria-describedby="basic-addon1">
        </div>
        <div class="form-group" >
          <label class="pull-left">Facebook </label>
          <input type="text" class="form-control" v-model="old.facebook">
        </div>
        <div class="form-group" >
          <label class="pull-left">imgURL </label>
          <input type="text" class="form-control" v-model="old.image_url">
        </div>
        <router-link :to="{name: 'ListContacts'}">
          <button type="submit" class="btn btn-success"  @click="updateToAPI">Submit</button>
        </router-link>
        <router-link :to="{name: 'ListContacts'}">
          <button class="btn btn-info">Go Back</button>
        </router-link>
      </div>
      </div>
    </form>
  </div>

</template>

<script>
import NavBar from './NavBar';
import axios from 'axios'
export default {
  name: 'EditContact',
  components: {
    NavBar,
  },
  data () {
    return {
      msg: 'Edit contact',
      old: []
    }
  },
  methods: {
    updateToAPI () {
      let newContact = {
        firstName: this.old.firstName,
        lastName: this.old.lastName,
        email: this.old.email,
        image_url: this.old.image_url,
        facebook: this.old.facebook,
        phone: this.old.phone
      }
      console.log(newContact)
      axios.put('https://crud-tutorial-amilabell.c9users.io:8081/contacts/changeContact?_id=' + this.$route.params.contactid, newContact)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      //window.location.reload()
    }
  },
  mounted () {
    axios.get('http://crud-tutorial-amilabell.c9users.io:8081/contacts/getOne?_id=' + this.$route.params.contactid)
      .then((response) => {
        this.old = response.data[0]
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>
    form{
        width: 80%;
        margin-left: 10%;
    }
</style>