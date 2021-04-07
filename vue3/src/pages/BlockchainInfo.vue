<template>
  <div class="parent">
    <div class="child">
    <h1 class="text-2xl md:text-4xl my-2">Check info</h1>
    <form class="mt-10" @submit.prevent="networkId">
      
      <button
        class="border rounded bg-gradient-to-r from-blue-700 to-black text-white ml-2 px-2"
        type="submit"
      >
        Check 
      </button>
    </form>
    
    <p class="mt-10"  ref="id" id="result"></p>
    <p class="mt-10"  ref="blockNumber" id="blockNumber"></p>
    <p class="mt-10"  ref="account" id="account"></p>

    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import Web3 from 'web3'


export default {
  name: 'CheckID',
  setup() {
    
    const ethEnabled = () => {
    if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();
    console.log(window.web3.currentProvider)
    return true;
    }
  return false;
  }

  if (!ethEnabled()) {
  alert("Please install MetaMask to use this dApp!");
}
    let id = ref('Id du network:')
    let blockNumber = ref('')
    let account = ref('')


    
    const networkId =  async () => {
      const res = await window.web3.eth.net.getId()
      const blockNumberRes = await window.web3.eth.getBlockNumber()
      blockNumber.value.innerText = `Numero du dernier block: ${ blockNumberRes }`
      id.value.innerText = `Id du network: ${ res }`
      account.value.innerText = window.web3.currentProvider.selectedAddress
    
     

    }
   

    return {networkId, account, id, blockNumber, }
  }
}
</script>
<style>

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