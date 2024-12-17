<template>
  <div>
    <Header/>
    <AddressList/>
  </div>
</template>

<script>
  import AddressList from '../components/Address/AddressList.vue'
  import Header from "../components/Public/Header.vue";
  export default {
    components:{
      Header,
      AddressList
    }
  }
</script>