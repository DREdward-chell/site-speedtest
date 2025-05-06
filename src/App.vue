<script setup>
import FaceRus from "@/components/FaceRus.vue";
import {ref, computed} from 'vue'
import FaceEng from "@/components/FaceEng.vue";

const routes = {
  '/': this,
  '/rus': FaceRus,
  '/eng': FaceEng
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <header>
  </header>
  <main>
    <p>F5 для сброса/перезагрузки</p>

    <div>
      <button><a href="#/rus">Русский</a></button>
      <button><a href="#/eng">English</a></button>
    </div>
    <component :is="currentView"/>
  </main>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
  gap: 5%
}

button {
  margin: auto;
  min-width: 15%;
  padding-top: 2%;
  padding-bottom: 2%;
  outline: none;
  border-radius: 10px;
  border: black solid;
  background: transparent;
}

a:link {
  color: black;
}

a:visited {
  color: black;
}
</style>
