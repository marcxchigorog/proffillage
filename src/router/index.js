import { createWebHistory,createRouter } from "vue-router"
import Acceuil from "@/Pages/Acceuil.vue"
import Pojet from "@/Pages/Pojet.vue"
import Message from "@/Pages/Message.vue"
import profils from "@/Pages/essent/profils.vue"
import inscr from "@/Pages/src/inscrit.vue"
import inscriProjet from "@/Pages/essent/inscriProjet.vue"
import notification from "@/Pages/essent/notification.vue"
import admin from "@/Pages/Admin.vue"
import Connexion from "@/Pages/src/connector.vue"
import convers from '@/Pages/essent/Discussion.vue'

const routes = [
    {path:'/',redirect:'/Acceuil'},
    {path:'/Acceuil',component:Acceuil},
    {path:'/Projet',component:Pojet},
    {path:'/Discussion',component:Message},
    {path:'/inscription',component:inscr},
    {path:'/notifs',component:notification},
    {path:'/NouveauProjet',component:inscriProjet},
    {path:'/Discussion1',component:convers,meta:{hideAppBar:true}},
    {path:'/AdminAccess',component:admin},
    {path:'/connexion',component:Connexion},
    {path:'/profils',component:profils}
]

const router = createRouter ({
    history:createWebHistory(),routes })

export default router