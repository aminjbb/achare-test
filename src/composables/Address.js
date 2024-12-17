import {ref} from "vue";
import axios from "axios";
export default function setup() {
    const address = ref(null)
    async function getAddress(){
        await axios.get('https://stage.achareh.ir/api/karfarmas/address' , {
            headers:{
                Authorization: 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4'
            }
        }).then((response) =>{
            console.log(response)
            address.value = response
        })

    }
    return {getAddress , address}
}

