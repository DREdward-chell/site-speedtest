import {onMounted, onUnmounted} from "vue";

function ID(id) {
    return document.getElementById(id)
}

function useKeydownEvent(handler) {
    onMounted(() => document.addEventListener('keydown', handler));
    onUnmounted(() => document.removeEventListener('keydown', handler));
}

function nextLetter(curr_id) {
    ID(curr_id.toString()).className = 'done';
    try{ID((curr_id+1).toString()).className = 'now';}
    catch (e) {}
}

export {ID, useKeydownEvent, nextLetter}