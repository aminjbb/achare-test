<template>
  <div class="header px-10">
    <div>
        <img src="../../assets/images/logo.svg">
    </div>
    <div class="header-link d-flex d-flex-justify-end ">
      <router-link to="/create-address" active-class="activelink">
        <span>ساخت آدرس</span>
      </router-link>
      <router-link to="/" active-class="activelink">
        <span>مشاهده آدرس ها</span>
      </router-link>
    </div>
  </div>
</template>
<script setup></script>