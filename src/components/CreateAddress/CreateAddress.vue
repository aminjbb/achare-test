<template>
  <div class=" container px-2 pt-5">
    <div v-if="!success">
      <CreateAddressForm ref="CreateAddressFormRef" v-if="addAddressStep === 1"/>
      <LeafMap ref="addressMap" v-else-if="addAddressStep === 2"/>
      <div class="create-box">
        <input type="submit" @click="submit" value="ثبت و ادامه" v-if="!loading"/>
        <div class="loading" v-else>
          <div class="loader"></div>
        </div>

      </div>
    </div>
    <div v-else>
      <SuccessStatus/>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {ref, useTemplateRef} from "vue";
import CreateAddressForm from "./CreateAddressForm.vue";
import SuccessStatus from "./SuccessStatus.vue";
import LeafMap from "./LeafMap.vue";

const CreateAddressFormRef = useTemplateRef('CreateAddressFormRef')
const addressMap = useTemplateRef('addressMap')
const success = ref(false)
const loading = ref(false)
const addAddressStep = ref(1)
const addressDetail = ref(null)

async function submit() {
  if (addAddressStep.value === 1) {
    const validate = await CreateAddressFormRef.value.validateForm()
    if (validate) {
      addressDetail.value = CreateAddressFormRef.value.form
      addAddressStep.value = 2
    }
  } else if (addAddressStep.value === 2) {
    createAddress()
  }
}

function createAddress() {
  loading.value = true
  let formData = new FormData()
  formData.append('first_name', addressDetail.value.fristName)
  formData.append('last_name', addressDetail.value.lastName)
  formData.append('coordinate_mobile', addressDetail.value.mobile)
  if ( addressDetail.value.phone) formData.append('coordinate_phone_number', addressDetail.value.phone)
  formData.append('address', addressDetail.value.address)
  formData.append('region', '1')
  formData.append('gender', addressDetail.value.gender)
  formData.append('lat', addressMap.value.center[0])
  formData.append('lng', addressMap.value.center[1])
  axios.post('https://stage.achareh.ir/api/karfarmas/address', formData, {
    headers: {
      Authorization: `Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4`
    }
  }).then((response)=>{
    success.value = true
  }).finally(()=>{
    loading.value = false
  })
}

</script>