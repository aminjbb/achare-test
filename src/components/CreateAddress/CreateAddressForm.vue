<template>
  <div class="d-flex d-flex-justify-center">
    <div class="px-1 my-3 text-right header-page">
      <span class="t16 w400 text-black">
       ثبت آدرس
      </span>
    </div>
  </div>

  <div class="d-flex d-flex-justify-center">
    <div class="add-address-card position-relative  py-5">
      <div>
        <div class="text-right">
            <span class="text-black t12 w700 mx-2 my-2">
              لطفا مشخصات و آدرس خود را وارد کنید
            </span>
        </div>
        <form>
          <div class="form-item text-right my-3 mx-2">
            <div class="d-flex d-flex-justify-space d-flex-align-center">
               <span class="text-black t12 w500">
                نام
              </span>

            </div>
            <div class="my-3 px-2">
              <input v-model="form.firstName" type="text" placeholder="مثال: رضا" :class="nameError ?'error-input' :'' ">
              <div v-if="nameError">
                <span class="t10 w400 text-error">{{nameError}}</span>
              </div>
            </div>
          </div>
          <div class="form-item text-right my-3 mx-2">
            <div class="d-flex d-flex-justify-space d-flex-align-center">
             <span class="text-black t12 w500">
                نام خانوادگی
              </span>

            </div>
            <div class="my-3 px-2">
              <input v-model="form.lastName" type="text" placeholder="مثال: رضایی" :class="lastNameError ?'error-input' :'' ">
              <div v-if="lastNameError">
                <span class="t10 w400 text-error">{{lastNameError}}</span>
              </div>
            </div>
          </div>
          <div class="form-item text-right my-3 mx-2">
            <div class="d-flex d-flex-justify-space d-flex-align-center">
              <span class="text-black t12 w500">
                شماره تلقن همراه
             </span>

            </div>

            <div class="my-3 px-2">
              <input v-model="form.mobile" type="text" placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۸۷" :class="mobileError ?'error-input' :'' ">
              <div v-if="mobileError">
                <span class="t10 w400 text-error">{{mobileError}}</span>
              </div>
            </div>
          </div>
          <div class="form-item text-right my-3 mx-2">
            <div class="d-flex d-flex-justify-space d-flex-align-center">
              <span class="text-black t12 w500">
                شماره تلقن ثابت(اختیاری)
              </span>
              <span class="text-gray4 t10 w400">
                *با پیش شماره
              </span>
            </div>
            <div class="my-3 px-2">
              <input v-model="form.phone" type="text" placeholder="مثال: ۰۲۱۴۴۲۵۶۷۸۰">
            </div>
          </div>
          <div class="form-item full-width text-right my-3 mx-2">
            <div class="d-flex d-flex-justify-space d-flex-align-center">
              <span class="text-black t12 w500">
                آدرس
              </span>
            </div>
            <div class="my-3 px-2">
              <input v-model="form.address" type="text" placeholder="مثال: تهران خ آزادی" :class="addressError ?'error-input' :'' ">
              <div v-if="addressError">
                <span class="t10 w400 text-error">{{addressError}}</span>
              </div>
            </div>
          </div>
          <div class="form-item text-right my-3 mx-2 d-flex d-flex-align-center px-4">
            <div>
          <span class="text-black t12 w500">
            جنسیت
          </span>
            </div>
            <div class="my-3 px-2 d-flex">
              <form class="d-flex" >
                <label class="d-flex d-flex-align-center mx-3">
                  <input v-model="form.gender" class="radio" type="radio" name="choice" value="female" />
                  <span class="t12 w500">خانم</span>
                </label>
                <br />
                <label class="d-flex d-flex-align-center mx-3">
                  <input v-model="form.gender" class="radio"  type="radio" name="choice" value="male" />
                  <span class="t12 w500">آقا</span>
                </label>
              </form>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
const form = ref({
  firstName:null,
  lastName:null,
  mobile:null,
  phone:null,
  address:null,
  gender:'male',
})

const nameError = ref(null)
const lastNameError = ref(false)
const mobileError = ref(false)
const addressError = ref(false)


function  validateForm(){
  let validate = true
  const regex3Char = new RegExp (`^[\u0600-\u06FF]{3,}$`)
  const regex10Char = new RegExp (`^[A-Za-z\u0600-\u06FF]{10,}$`)
  const mobileRegex = new RegExp (`^09\\d{9}$`)
  // console.log(regex3Char.test(form.value.firstName))
  if (form.value.firstName == null && !regex3Char.test(form.value.firstName)){
    nameError.value =  'نام باید دارای ۳ کاراکتر باشد'
    validate = false
  }
  if (form.value.lastName == null && !regex3Char.test(form.value.firstName)){
    lastNameError.value =  'نام خانوادگی باید دارای ۳ کاراکتر باشد'
    validate = false
  }
  if (form.value.mobile == null && !mobileRegex.test(form.value.mobile) ){
    mobileError.value =  'شماره وارد شده معتبر نیست'
    validate = false
  } if (form.value.address == null && !regex10Char.test(form.value.address) ){
    addressError.value =  'آدرس باید دارای ۱۰  کاراکتر باشد'
    validate = false
  }
  return validate


}
defineExpose({
  form,
  validateForm
})
</script>