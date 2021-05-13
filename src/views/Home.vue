<template>
  <div class="w-full pb-10">
    <section class="">
      <div class="flex items-center justify-between text-gray-300 pt-12">
        <router-link :to="{ path: '/' }">
          <div class="flex justify-center items-center">
            <img
              src="../assets/logo.png"
              alt="currency-conversion-logo"
              class="w-12 h-12 rounded-full"
            />
            <p class="uppercase font-bold ml-4 md:text-base text-sm">
              currency-converter
            </p>
          </div></router-link
        >
      </div>
      <div class="flex justify-between mt-16">
        <div class="space-y-14">
          <p class="w-3/4 text-white text-7xl font-semibold">
            Created for easy currency-conversion.<br />
            World-class currency conversion tool.
          </p>
        </div>
        <div>
          <img src="../assets/logo.png" alt="" />
        </div>
      </div>
      <!--  -->
      <div class="mt-16 w-full bg-white rounded-xl p-8">
        <div class="flex w-full items-center">
          <div class="border border-gray-200 rounded-xl p-5">
            <p class="font-medium text-lg">You Send</p>
            <div class="flex items-center">
              <div class="w-full">
                <input
                  v-model="send"
                  type="number"
                  class="pr-4 w-full font-semibold border-none text-4xl focus:outline-none"
                />
              </div>
              <div class="flex items-center">
                <div class="h-10 w-10">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png"
                    alt="Country Flag"
                    class="object-cover inset-0 rounded-full w-full h-full"
                  />
                </div>
                <div>
                  <p class="text-4xl pl-3">EUR</p>
                </div>
                <div>
                  <i
                    @click="sendDropDown = !sendDropDown"
                    class="p-3 fa fa-chevron-down"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <!-- Country Drop Down -->
          <div v-if="sendDropDown" class="fixed left-96 ml-48 bottom-10">
            <vs-select v-model="currency">
              <vs-option
                v-for="country1 in exchangeData.rates"
                :key="country1.index"
                :label="country1"
                value="country1"
              >
                {{ country1 }}
              </vs-option>
            </vs-select>
          </div>
          <!--  -->
          <div
            class="-ml-5 bg-white z-10 p-8 flex justify-center items-center h-12 w-12 rounded-full border-l border-r border-gray-300"
          >
            <i class="fas fa-exchange-alt text-lg"></i>
          </div>

          <div class="-ml-5 border border-gray-200 rounded-xl p-5 pl-10">
            <p class="font-medium text-lg">Recipient Gets</p>
            <div class="flex items-center justify-end">
              <div class="w-full">
                <p class="w-full font-semibold text-4xl">{{ send.toLocaleString() }}</p>
              </div>
              <div class="flex items-center">
                <div class="h-10 w-10">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png"
                    alt="Country Flag"
                    class="object-cover inset-0 rounded-full w-full h-full"
                  />
                </div>
                <div>
                  <p class="text-4xl pl-3">EUR</p>
                </div>
                <div>
                  <i class="p-3 fa fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      send: 1200,
      recieve: 0,
      currency: "USD",
      sendDropDown: false,
      exchangeData: {},
    };
  },

  computed: {},

  methods: {
    async exchange() {
      await axios
        .get("https://api.exchangerate-api.com/v4/latest/usd")
        .then((response) => {
          console.log(response);
          this.exchangeData = response.data;
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.exchange();
  },
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
