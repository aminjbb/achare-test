<template>
  <div>
    <Header/>
    <CreateAddress/>

  </div>
</template>

<script>
import CreateAddress from '../components/CreateAddress/CreateAddress.vue'
import Header from '../components/Public/Header.vue'
export default {
  components:{
    CreateAddress,
    Header
  }
}
</script>