<template>
  <div class="w-full p-14 text-white">
    <section class="flex justify-between">
<router-link :to="{path: '/'}"><div class="flex items-center justify-center">
<img src="../assets/logo.png" alt="currency-conversion-logo" class="w-12 h-12 rounded-full">
<p class="uppercase font-bold ml-3 ">currency-conversion</p>
</div></router-link>
<div class="flex justify-center capitalize space-x-7">
<p class="text-lg"><router-link :to="{path: '/learn'}">learn</router-link></p>
<p class="text-lg"><router-link :to="{path: '/developers'}">developers</router-link></p>
<p class="text-lg"><router-link :to="{path: '/enterprise'}">enterprise</router-link></p>
<p class="text-lg"><router-link :to="{path: '/community'}">community</router-link></p>
</div>
    </section>
  </div>
</template>

<script></script>

<style></style>
