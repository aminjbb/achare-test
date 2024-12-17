import {
    createRouter,
    createWebHistory
} from 'vue-router'
import  AddressListView from '../views/AddressListView.vue'
import  CreateAddressView from '../views/CreateAddressView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'AddressListView',
            component: AddressListView,
            meta: {
                name: 'لیست آدرس ها'
            }
        },
        {
            path: '/create-address',
            name: 'CreateAddress',
            component: CreateAddressView,
            meta: {
                name: 'ثبت آدرس '
            }
        }
    ]
})
export default router