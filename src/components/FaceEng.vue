<script setup>
import SpeedTestEng from "@/components/SpeedTestEng.vue";
</script>

<template>
  <header>
  </header>

  <main>
    <div class="centered beautiful">
      <div style="text-align: left; display: flex; flex-direction: column; justify-content: center">
        <div>5: Скорость 191+</div>
        <div>4: Скорость 171+</div>
        <div>Точность: 98%+</div>
      </div>
      <SpeedTestEng class="limited"/>
    </div>
  </main>
</template>

<style scoped>
.centered {
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
  justify-self: center;
  padding: 10px;
  max-width: 80%;
  margin: auto;
  min-height: 100% !important;
}
.limited {
  max-width: 80%;
  flex-grow: 1;
}
.beautiful {
  border: transparent solid;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 10px grey;
}
p {
  font-size: 20px;
}
</style>
