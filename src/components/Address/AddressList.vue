<template>
  <div class="container px-2 pt-5">
    <div class="d-flex d-flex-justify-center">
      <div class="px-1 my-3 text-right header-page">
      <span class="t16 w400 text-black">
       آدرس ها و مشخصات
      </span>
      </div>
    </div>
      <AddressCard/>
  </div>
</template>

<script>
import  AddressCard from  './AddressCard.vue'
import Address from '../../composables/Address'
export default {
  components:{
    AddressCard
  },
  setup(){
    const {
      address , getAddress
    } = Address();
    return{
      address , getAddress
    }
  },

  mounted() {
    this.getAddress()
  }
}
</script>