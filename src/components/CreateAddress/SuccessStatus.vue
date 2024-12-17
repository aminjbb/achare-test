<template>
  <div class="container">
      <div class="success-container d-flex d-flex-justify-center d-flex-align-center">
        <div>
          <img src="../../assets/images/success.svg">
          <div class="t14 w700 text-black">
            اطلاعات شما با موفقیت ثبت شد
          </div>
          <button class="mt-5" @click="$router.push('/')">
            <span class="t16 w700 text-primary">
              مشاهده اطلاعات
            </span>
          </button>
        </div>
      </div>
  </div>
</template>
<script setup>
</script>