import { ref } from 'vue'

const  snackbar = ref(false)
const message = ref ('')
const color = ref ('')

export function useSnackbar(){
    function show(msg,type){
        message.value = msg
        color.value = type
        snackbar.value = true
    }
    return {
        snackbar,
        message,
        color,
        show
    }
}