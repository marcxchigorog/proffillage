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
                        <v-chip class="ma-1 rounded3" width="200px"> {{ users.nom }} {{ users.prenom }}</v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.profession }} </v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.email }}</v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.sexe }}</v-chip>
                        <template v-if="$vuetify.display.mdAndUp">
                            <v-chip class="ma-1 rounded3">{{ users.telephone }}</v-chip>
                        </template>
                        <v-btn color="indigo-darken-4" @click="opendialoguedetail(users)" class="ma-2  rounded3"
                            width="90%">
                            DETAILS </v-btn>
                    </v-col>
                    <!-- pour la visualisation sur le smartphone -->
                    <v-col v-if="$vuetify.display.xs" class="mt-2" cols="6">
                        <v-chip class="ma-1 rounded3" width="200px"> {{ users.nom }} {{ users.prenom }}</v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.profession }} </v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.email }}</v-chip>
                        <v-chip class="ma-1 rounded3">{{ users.sexe }}</v-chip>
                        <template v-if="$vuetify.display.mdAndUp">
                            <v-chip class="ma-1 rounded3">{{ users.telephone }}</v-chip>
                        </template>
                        <v-btn color="indigo-darken-4" @click="opendialoguedetail(users)" class="ma-2  rounded3"
                            width="90%">
                            DETAILS </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-card class="  ma-5  mt-8 pa-5  rounded " v-if="!ListeUsers">
                <br>
                <center> <img src="../../public/photo principale.png" width="70" /></center>
                <br>
                <v-row justify="center" class="biggest">Bienvenue sur <CENTER>Whatduyou</CENTER></v-row>
                <br>
                <br>
                <v-sheet class="bg-surface-variant pa-2 rounded">
                    Ce site, vous permettra de chercher et des trouver d'emploi ; disons pas immediatemment ni facilement mais
                    rapidement
                    en fonction
                    de tes competences.
                </v-sheet>

            </v-card>

        </v-row>

        <detail ref="dialoguedetail" />
    </v-sheet>


</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

// les importation des autres composants
import detail from "@/Pages/src/detail.vue"

const photo_elie = ref("http://localhost/API_SPP/Src_Media/elie.jpg")

const ListeUsers = ref()

// importantion des donnees depuis le backend pour les clients
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost/API_SPP/Door/Clients/ListeData.php?type=listDocker")
        ListeUsers.value = response.data
    }
    catch { }
})


// initialisation des vars
const dialoguedetail = ref([])

function opendialoguedetail(item) {
    const client_id = item.ID
    dialoguedetail.value.opendialdet(client_id)
}



</script>
