<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center my-4">Cryptos {{ CryptosCount }}</h1>
    <ul class="border rounded p-2">
      <li
        class="flex justify-between"
        v-for="(Crypto, index) in dcCryptos"
        :key="Crypto.name"
      >
        <div>
          {{ Crypto.name }}
        </div>
        <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addCrypto">
      <input
        class="border rounded px-2"
        v-model="newCrypto"
        placeholder="Type Crypto Name Here"
        ref="newCryptoRef"
      />
      <button
        class="border rounded bg-gradient-to-r from-blue-700 to-black text-white ml-2 px-2"
        type="submit"
      >
        Add Crypto
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const newCryptoRef = ref("");
    const newCrypto = ref("");
    const dcCryptos = ref([
      { name: "Bitcoin" },
      { name: "Ethereum" },
      { name: "Ripple" },
      { name: "Teaos" },
      
    ]);

    onMounted(() => {
      newCryptoRef.value.focus();
    });

    const CryptosCount = computed({
      get: () => dcCryptos.value.length,
    });

    function remove(index) {
      dcCryptos.value = dcCryptos.value.filter((Crypto, i) => i != index);
    }

    function addCrypto() {
      if (newCrypto.value !== "") {
        dcCryptos.value.unshift({ name: newCrypto.value });
        newCrypto.value = "";
      }
    }

    return { dcCryptos, newCrypto, remove, addCrypto, newCryptoRef, CryptosCount };
  },
};
</script>

<style></style>
