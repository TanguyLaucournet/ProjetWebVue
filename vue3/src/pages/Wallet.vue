<template>
  <div class="parent">
    <div class="child">
    <h1 class="text-2xl md:text-4xl my-2">ETH Balance Fetcher</h1>
    <form class="mt-10" @submit.prevent="checkWallet">
      <input
        class="border rounded px-2"
        v-model="newHero"
        placeholder="Entrez votre adresse ETH"
        ref="adresse"
      />
      <button
        class="border rounded bg-gradient-to-r from-blue-700 to-black text-white ml-2 px-2"
        type="submit"
      >
        Check Wallet
      </button>
    </form>
   
    <p class="mt-10"  ref="amount" id="result"></p>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import Web3 from 'web3'

export default {
  name: 'CheckWallet',
  setup() {
    const adresse = ref('')
    let amount = ref('')
    const w = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/e7ff0d744db146bb8bcc8f2ef4a0c608"))

    const checkWallet =  async () => {
      amount.value.innerText = `${w.utils.fromWei(await w.eth.getBalance(adresse.value.value), 'ether')} ETH`
  }
    return {adresse, checkWallet, amount}
  }
}
</script>
<style scoped>

.parent {
  display: grid;
  place-items: center;
  
  background:#FFFFFF;
  width: 100%;
  height: 100%;
  
  
  overflow: auto;
}

.child {
  
  padding: 0.5rem;
  border-radius: 10px;
  border: 2px solid rgba(39, 38, 39, 0.418);
  background: rgb(160, 156, 216);
  font-size: 2rem;
  text-align: center;
}

body {
  font-family: system-ui, serif;
}
</style>