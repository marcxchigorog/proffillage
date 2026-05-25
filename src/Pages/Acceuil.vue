<template>
    <v-sheet color="indigo-darken-4" height="350px">
        <!-- les filters selon les domaines -->
        <v-row class="overflow-y1" justify="center" no-gutters>
            <v-sheet align-self="center" class="ml-2 mr-2 mt-4 rounded3 bg-surface-variant max"
                v-if="$vuetify.display.mdAndUp" elevation="9">
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-thermostat">Tous</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-school">education</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-hospital-box">Santé</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-laptop">Informatique</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-car">Automobile</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-briefcase">Finance</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-scale-balance">Droit</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-hammer">BTP</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-Palette">Art</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-sprout">Agriculture</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-airplane">Aviations</v-btn>
                <v-btn variant="outlined" class="ma-1 rounded3" prepend-icon="mdi-basketball">Sport</v-btn>
            </v-sheet>
        </v-row>
        <!-- la case pour afficher le detail information sur le  membre  -->
        <v-row no-gutters justify="center">
            <v-card v-for="users in ListeUsers" :key="users.id" elevation="3" class="ma-3 width8">
                <v-row no-gutters>
                    <v-col>
                        <v-sheet color="grey" class="ma-2 rounded-2 photoprofilUp">
                            <v-img :src="photo_elie" class="photoprofilUp"></v-img>
                        </v-sheet>
                    </v-col>
                    <!-- pour le format de laptop et ipad -->
                    <v-col v-if="$vuetify.display.mdAndUp" class="mt-2" cols="7">
                        <v-chip class="ma-1 rounded3" width="200px"> {{ users.nom }} </v-chip>
                        <v-chip class="ma-1 rounded3" width="200px">  {{ users.prenom }}</v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.profession }} </v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.email }}</v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.sexe }}</v-chip>
                        <template v-if="$vuetify.display.mdAndUp">
                            <v-chip class="ma-1 rounded3">{{ users.telephone }}</v-chip>
                        </template>
                        <v-btn color="indigo-darken-4" v-if="theme === 'light'" @click="opendialoguedetail(users)" class="ma-2  rounded3"
                            width="90%"> DETAILS </v-btn>
                        <v-btn color="yellow" v-if="theme === 'dark'" @click="opendialoguedetail(users)" class="ma-2  rounded3"
                            width="90%"> DETAILS </v-btn>
                    </v-col>
                    <!-- pour la visualisation sur le smartphone -->
                    <v-col v-if="$vuetify.display.xs" class="mt-2" cols="6">
                        <v-chip class="ma-1 rounded3" width="200px"> {{ users.prenom }}</v-chip>
                        <v-chip class="ma-1 rounded3" width="200px"> {{ users.nom }}</v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.profession }} </v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.email }}</v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.sexe }}</v-chip>
                        <template v-if="$vuetify.display.mdAndUp">
                            <v-chip class="ma-1 rounded3">{{ users.telephone }}</v-chip>
                        </template>
                        <v-btn color="indigo-darken-4" v-if="theme === 'light'" @click="opendialoguedetail(users)" class="ma-2  rounded3"
                            width="90%"> DETAILS </v-btn>
                        <v-btn color="yellow" v-if="theme === 'dark'" @click="opendialoguedetail(users)" class="ma-2  rounded3"
                            width="90%"> DETAILS </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-card  class="  ma-5  mt-8 pa-5  rounded " v-if="!ListeUsers && $vuetify.display.lg">
                <br>
                <center> <img src="../../public/photo principale.png" width="70" /></center>
                <br>
                <v-row justify="center" class="biggest">Bienvenue sur <CENTER>Whatdu_youdu</CENTER></v-row>
                <br>
                <br>
                <v-sheet class="bg-surface-variant pa-2 rounded">
                    Ce site, vous permettra de chercher et des trouver d'emploi ; disons pas immediatemment ni facilement mais
                    rapidement
                    en fonction
                    de tes competences.
                </v-sheet>
            </v-card>
            <!-- la carte qui s'affiche une fois que la connexion n'est pas ouvert -->
            <v-card  class="  ma-5  mt-8 pa-5  rounded " elevation="16" v-if="!ListeUsers && $vuetify.display.xs">
                <br>
                <center> <img src="../../public/photo principale.png" width="80" /></center>
                <br>
                <v-row justify="center" class="biggest pa-2">Bienvenue sur <br><center>Whatdu_youdu</center></v-row>
                <br>
                <br>
                <v-sheet class="bg-surface-variant pa-2 rounded">
                Nous sommes une communauté sous-traitante ,nous pourons afficher vos compètences ainsi que vos forces 
                    professionnelles  dependant de votre profession.
                </v-sheet>
                <v-sheet class="pa-2 mt-3 rounded" variant="outlined">
                    L'insertion dans votre domaine professionnel est notre priorité mais selon
                    votre niveau d'évaluation acquèrie sur le site 
                  <br>
                    Prendre une inscriptions dans la communauté 
                    <br> <center>
                        <v-btn @click="inscription" v-if="theme === 'light'" class="rounded3 mt-3" color="indigo-darken-4"  width="80%">Inscription</v-btn>
                        <v-btn @click="inscription" v-if="theme === 'dark'" class="rounded3 mt-3" color="yellow" width="80%">Inscription</v-btn>
                    </center>
                </v-sheet>
                
            </v-card>

        </v-row>

        <detail ref="dialoguedetail" />
    </v-sheet>


</template>
<script setup>
import { onMounted,onUnmounted, ref } from 'vue'
import axios from 'axios'

// les importation des autres composants
import detail from "@/Pages/src/detail.vue"
import router from '@/router'
const theme = ref ('light')
const photo_elie = ref("http://localhost/API_SPP/Src_Media/elie.jpg")

const ListeUsers = ref()

// importantion des donnees depuis le backend pour les clients
async function mounted_one() {
    theme.value = sessionStorage.getItem('theme')

    const response = await axios.get("http://localhost/API_SPP/Door/Clients/ListeData.php?type=listDocker")
    ListeUsers.value = response.data

}

let interval = (null)
onMounted(() => {
    interval = setInterval(() => {
        mounted_one()
    },1000)
})
onUnmounted(() => {
    clearInterval(interval)
})


// initialisation des vars
const dialoguedetail = ref()
const inscription = () => {
    router.push('/inscription')
}

function opendialoguedetail(item) {
    const client_id = item.ID
    dialoguedetail.value.opendialdet(client_id)
}



</script>
