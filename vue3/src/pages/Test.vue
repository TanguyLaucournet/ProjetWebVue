<template>
<div class="brr">
<div class="test">1</div>
<div class="test">2</div>
<div class="test">3</div>
<div> {{text}}</div>
</div>
</template>
<script>
export default {
    data() {
    return {
      text: "Test text",
      debounce: "",
    };
  },
}
</script>
<style>
.brr {
  display: grid;
  height: 100vh;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}



.test {
  display: grid;
  place-items: center;
  background: lightpink;
}


</style>