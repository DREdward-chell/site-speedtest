    <script setup>
import {ID, useKeydownEvent, nextLetter} from '../scripts.js'
import text1 from '../texts/textRus.json'

let text = text1[Math.floor(1 + Math.random() * text1['size'])].toString();
let l = text.length;
let current_id = 0;
let errors = 0;
let clicks = 0;
let timer_is_ready = false;
let millis = 0;
let speed = 0.0;
let timer_interval = null;
let speed_interval = null;
let finnish = false;

function round(a) {
  try {
    return a.toString().split('.')[0] + '.' + a.toString().split('.')[1][0]
  } catch (e) {
    return a.toString()
  }
}

function timer() {
  timer_interval = setInterval(() => {
    millis++;
    ID('time').textContent = 'Время: ' + (millis / 10).toString();
  }, 100);
  speed_interval = setInterval(() => {
    speed += 0.1;
    ID('speed').textContent = 'Скорость: ' + round((clicks / speed) * 60);
  }, 100);
}

function letterCheck(e) {
  if (e.key.toString() === 'Shift' || e.key.toString() === 'shift' || e.key.toString() === 'alt' || e.key.toString() === 'tab')
    return;

  if (!timer_is_ready) {
    timer();
    timer_is_ready = true;
    finnish = false;
  }
  let id = current_id.toString();
  console.log(e.key)

  if (e.key === ID(id).textContent) {
    nextLetter(current_id);
    current_id++;
    clicks++;
  } else if (ID(id).className !== 'wrong' && !finnish) {
    ID(id).className = 'wrong';
    errors++;
    ID('error').textContent = 'Точность: ' + round(100 - 100 * (errors / l)) + '%';
    ID('errorCount').textContent = 'Ошибки: ' + errors.toString();
  }
  if (current_id === l) {
    clearInterval(speed_interval);
    clearInterval(timer_interval);
    finnish = true;
  }
}

useKeydownEvent(letterCheck)
</script>

<template>
  <div class="box">
    <div style="max-width: 80%; display: flex; flex-direction: column; justify-content: center; flex-grow: 1">
      <div>
        <span id="0" class="now">{{ text[0] }}</span>
        <span v-for="i in l" v-bind:id="i" class="">{{ text[i] }}</span>
      </div>
    </div>
    <div class="statistics">
      <div class="errorDisplay">
        <div id="error">Точность: 100%</div>
        <div id="errorCount">Ошибки: 0</div>
      </div>
      <div class="speedDisplay">
        <div id="speed">Скорость: 0.0</div>
        <div id="time">Время: 0.0</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrong {
  color: whitesmoke;
  border: transparent;
  border-radius: 4px;
  background: indianred;
}

.now {
  color: whitesmoke;
  border: transparent;
  border-radius: 4px;
  background: mediumseagreen;
}

.done {
  color: mediumseagreen;
}

.box {
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
  flex-flow: row;
  padding: 1%;
}

.statistics {
  flex-shrink: 0;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
}
</style>