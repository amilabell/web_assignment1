<template>
    <form class="form-inline">
        <input id="searchfield" class="form-control mr-sm-2" type="search" placeholder="Search Contacts" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <router-link :to="{name: 'NewContacts'}">
            <button id="addContact" class="btn btn-info my-2 my-sm-0">Add Contact</button>
        </router-link>
        
    </form> 
</template>

<script>

export default {
  name: 'Search',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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