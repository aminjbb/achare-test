<template>
  <div class="d-flex d-flex-justify-center mt-5">
    <div class="address-card py-2">
      <div class="address-card-item px-5 my-3 " v-if="screenType === 'desktop'">
        <div>
            <span class="t14 w400 text-gray ">
              نام
            </span>
        </div>
        <div>
            <span class="t14 w700 text-black">
              محمد محمدی
            </span>
        </div>
      </div>
      <div class="address-card-item px-5 my-3" v-if="screenType === 'desktop'">
        <div>
            <span class="t14 w400 text-gray ">
               نام خانوادگی
            </span>
        </div>
        <div>
            <span class="t14 w700 text-black">
              محمد محمدی
            </span>
        </div>
      </div>
      <div class="address-card-item px-5 my-3" v-if="screenType === 'mobile'">
        <div>
            <span class="t14 w400 text-gray ">
              نام و نام خانوادگی
            </span>
        </div>
        <div>
            <span class="t14 w700 text-black">
              محمد محمدی
            </span>
        </div>
      </div>
      <div class="address-card-item px-5 my-3">
        <div>
            <span class="t14 w400 text-gray">
              جنسیت
            </span>
        </div>
        <div>
            <span class="t14 w700 text-black">
                آقا
            </span>
        </div>
      </div>
      <div class="address-card-item px-5 my-3">
        <div>
            <span class="t14 w400 text-gray">
              شماره تلفن همراه
            </span>
        </div>
        <div>
            <span class="t14 w700 text-black">
                ۰۹۱۲۱۲۳۴۵۶۷
            </span>
        </div>
      </div>
      <div class="address-card-item  px-5 my-3">
        <div>
            <span class="t14 w400 text-gray">
              شماره تلفن ثابت
            </span>
        </div>
        <div>
            <span class="t14 w700 text-black">
                ۰۹۱۲۱۲۳۴۵۶۷
            </span>
        </div>
      </div>
      <div class="px-5 my-2" v-if="screenType === 'mobile'">
        <div class="divider"></div>
      </div>

      <div class="px-5">
        <div class="text-right"><span class="t14 w700 text-gray ">آدرس</span></div>
        <div class="text-right"><span class="t14 w700 text-black">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span></div>
      </div>
    </div>
  </div>

</template>
<script setup>
import {onMounted, onUnmounted, ref} from "vue";
const screenType = ref('desktop')
onMounted (()=>{
  window.innerWidth < 769 ? screenType.value = 'mobile' : screenType.value = 'desktop';
  window.addEventListener('resize' , ()=>{
    window.innerWidth < 769 ? screenType.value = 'mobile' : screenType.value = 'desktop';
  })
})

onUnmounted(()=>{
  window.removeEventListener('resize' , ()=>{
    window.innerWidth < 769 ? screenType.value = 'mobile' : screenType.value = 'desktop';
  })
})
</script>