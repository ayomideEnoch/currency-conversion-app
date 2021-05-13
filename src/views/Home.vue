<template>
  <div class="w-full md:p-20 p-12">
    <section class="">
      <div class="flex items-center justify-between text-gray-300">
        <router-link :to="{ path: '/' }">
          <div class="flex justify-center items-center">
            <img
              src="../assets/cc-logo.png"
              alt="currency-conversion-logo"
              class="w-12 h-12 rounded-full"
            />
            <p class="uppercase font-bold ml-4 md:text-base text-sm">
              currency-converter
            </p>
          </div></router-link
        >
        <div
          class="flex justify-center capitalize md:space-x-14 space-x-2 lg:mr-64 font-semibold md:text-base text-xs"
        >
          <p class=""><router-link :to="{ path: '/learn' }">learn</router-link></p>
          <p class="">
            <router-link :to="{ path: '/developers' }">developers</router-link>
          </p>
          <p class="">
            <router-link :to="{ path: '/enterprise' }">enterprise</router-link>
          </p>
          <p class="">
            <router-link :to="{ path: '/community' }">community</router-link>
          </p>
        </div>
      </div>
      <div class="flex justify-between mt-16">
        <div class="space-y-14">
          <p class="text-white text-7xl font-semibold">
            Created for easy currency-conversion.<br />
            World-class currency conversion tool.
          </p>
          <button
            class="bg-white text-base font-semibold capitalize rounded-lg py-3 px-4"
          >
            explore currency-converter
          </button>
        </div>
        <div>
          <img src="../assets/logo.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style></style>
