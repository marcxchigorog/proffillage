<template>
    <v-sheet color="indigo-darken-4" height="300px">
        <v-container fluid>
            <!-- mode de toute les visuations pour les laptop -->
            <v-row v-if="$vuetify.display.mdAndUp">
                <v-col class="ml-20" cols="2">
                    <v-row justify="center">
                        <v-sheet class="photoprofil" color="grey">
                            <v-img :src="photo_profil" alt="Photo profil"></v-img>
                        </v-sheet>
                    </v-row>
                </v-col>

                <v-col cols="6" align-self="start">
                    <h1 id="nameprofil">{{ Membre?.Nom }} {{ Membre?.Postnom }} {{ Membre?.Prenom }} </h1>
                    <h2 id="card-title">{{ Membre?.profession }} , {{ Membre?.Nphone }}</h2>
                </v-col>
                <v-col align-self="center">
                    <v-btn @click="Modifier_indent" variant="outlined">
                        <v-icon size="30" color="yellow" start>mdi-pencil</v-icon>
                        <v-divider vertical :thickness="2" class="mr-1" opacity="1"></v-divider> Modifier
                    </v-btn>
                </v-col>
            </v-row>
            <!-- mode de visualisation pour toutes les smartphone -->
            <v-row class="ma-3" no-gutters v-if="$vuetify.display.xs">
                <v-row justify="center">
                    <v-sheet class="photoprofilDown" color="grey">
                        <v-img :src="photo_profil"></v-img>
                    </v-sheet>
                </v-row>
                <v-row class="ma-1" align-self="start">
                    <h1 id="nameprofilDown doo" align="center" v-if="Membre?.Sexe === 'Masculin'">Monsieur : {{
                        Membre?.Postnom }}</h1>
                    <h1 id="nameprofilDown" align="center" v-if="Membre?.Sexe === 'Feminin'"> Madame : {{
                        Membre?.Postnom }}</h1>
                    <!-- <v-row>
                        <v-col cols="7">
                            <h2 class="ml-1" id="namefooter">{{ Membre?.Nom }} {{ Membre?.Prenom }}</h2>
                        </v-col>
                    </v-row> -->
                </v-row>
            </v-row>
            <!-- la visualisation des details en mode laptop -->
            <v-container fluid v-if="$vuetify.display.mdAndUp">
                <v-card height="300px" class="ml-3" elevation="9">
                    <v-row justify="center">
                        <v-col class="ma-2 mt-4">
                            <v-row no-gutters>
                                <v-col>
                                    <v-cols>
                                        <v-card class="pa-3 ma-2 bg-surface-variant" height="125px">
                                            <div id="card-title_2">{{ Membre?.Pays }}</div>
                                            <v-row class="mt-1">
                                                <v-col>Province:<div id="card-title_4"> {{ Membre?.Province }}</div>
                                                </v-col>
                                                <v-col>Ville:<div id="card-title_4"> {{ Membre?.Ville }}</div></v-col>
                                            </v-row>
                                        </v-card>
                                    </v-cols>
                                    <v-cols>
                                        <v-card class="pa-3 ma-2  bg-surface-variant" height="125px" color="grey">
                                            <v-row>
                                                <v-col>
                                                    <h4>Date naissance</h4>
                                                    <div id="card-title">{{ Membre?.Date_birth }}</div>
                                                </v-col>
                                                <v-col>
                                                    <h4>Genre</h4>
                                                    <div id="card-title">{{ Membre?.Sexe }}</div>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-cols>
                                </v-col>
                                <v-col>
                                    <!-- le partie du curiculum vitae du client -->
                                    <v-cols>
                                        <v-card v-ripple @click="openedCurVitae(Membre)"
                                            class="hover-effect bg-surface-variant pa-3 ma-2" height="125px">
                                            <h4>visualisation</h4>
                                            <div id="card-title"> Curiculum Vitae</div>
                                        </v-card>
                                    </v-cols>
                                    <v-cols>
                                        <v-card class="pa-3 bg-surface-variant ma-2" height="125px">
                                            <h3>Profession principale</h3>
                                            <div id="card-title">{{ Membre?.profession }}</div>
                                            <v-row>
                                                <v-col></v-col>
                                                <v-col cols="8">Depuis {{ Membre?.annee_insert }} dans carriere</v-col>
                                            </v-row>
                                        </v-card>
                                    </v-cols>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col class="ma-2 mt-4">
                            <v-row no-gutters>
                                <v-col>
                                    <v-cols>
                                        <v-card class="pa-3 bg-surface-variant ma-2 " height="125px">
                                            <v-row justify="center" class="mt-4">
                                                <v-rating hover :length="6" :size="50" :model-value="3"
                                                    active-color="yellow" />
                                            </v-row>
                                            <v-row justify="center">
                                                <h2>Nombre d'etoiles</h2>
                                            </v-row>
                                        </v-card>
                                    </v-cols>
                                    <v-cols>
                                        <v-sheet v-ripple class="pa-3 ma-2 bg-surface-variant rounded hover-effect"
                                            @click="openDial" height="125px">
                                            <v-row no-gutters>
                                                <v-col cols="5">
                                                    <v-row no-gutters justify="center" height="100%">
                                                        <v-icon color="indigo-darken-4"
                                                            size="100px">mdi-floor-plan</v-icon>
                                                    </v-row>
                                                </v-col>
                                                <v-col>
                                                    <h2>Nombre de Projet</h2>
                                                    <h2>0</h2>
                                                </v-col>
                                            </v-row>
                                        </v-sheet>
                                    </v-cols>
                                </v-col>
                                <v-col>
                                    <v-cols>
                                        <v-card class="pa-3 bg-surface-variant ma-2" height="125px">
                                            <v-row no-gutters>
                                                <v-col>
                                                    <v-row no-gutters justify="center" height="100%">
                                                        <v-icon size="100px">mdi-school</v-icon>
                                                    </v-row>
                                                </v-col>
                                                <v-col>
                                                    <h2>Nombre de diplomes:</h2>
                                                    <h2>0</h2>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-cols>
                                    <v-cols>
                                        <v-card class="pa-3 bg-surface-varia ma-2" height="125px" variant="outlined">
                                            <v-row no-gutters>
                                                <v-col>
                                                    <v-row no-gutters justify="center" height="100%">
                                                        <v-col align-self="center" cols="2">
                                                            <v-icon color="indigo-darken-4" v-if="Status"
                                                                size="80px">mdi-check-decagram-outline</v-icon>
                                                            <v-icon color="error" v-if="!Status"
                                                                size="80px">mdi-cancel</v-icon>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                                <v-col>
                                                    <h2>Status:</h2>
                                                    <h2>{{ deliberant }}</h2>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-cols>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
            <!-- la visualisation des details en mode smarthphone -->
            <v-template fluid v-if="$vuetify.display.xs">
                <v-card elevation="5" class="pa-2">
                    <h2>Details informations</h2>
                    <v-row class="mt-1">
                        <v-col>
                            <div><b>Postnom</b></div>
                            <div><b>Nom & Prenom</b></div>
                            <div><b>Date de Naissance</b></div>
                            <div><b>Profession</b></div>
                            <div><b>Province</b></div>
                            <div><b>Ville</b></div>
                        </v-col>
                        <v-col>
                            <div>{{ Membre?.Postnom }}</div>
                            <div>{{ Membre?.Nom }} {{ Membre?.Prenom }}</div>
                            <div>{{ Membre?.Date_birth }}</div>
                            <div>{{ Membre?.profession }}</div>
                            <div>{{ Membre?.Province }}</div>
                            <div>{{ Membre?.Ville }}</div>
                        </v-col>
                    </v-row>
                    <v-col align="center">
                        <v-btn @click="openedCurVitae(Membre)" variant="outlined" width="90%">Curriculum Vitae</v-btn>
                    </v-col>
                </v-card>
                <v-card elevation="5" class="pa-2 mt-2">
                    <h2>Statistiques Clés</h2>
                    <v-card variant="outlined" class="pa-1 ma-1" heigth="20px" color="grey">
                        <v-row justify="center" class=" ma-1">
                            <v-rating hover :length="6" :size="50" :model-value="3" active-color="yellow" />
                            <h4>Nombre d'etoiles</h4>
                        </v-row>
                    </v-card>
                    <v-card class="pa-1 ma-1" color="grey"><v-row no-gutters>
                            <v-col cols="5">
                                <v-row no-gutters justify="center" height="100%">
                                    <v-icon color="indigo-darken-4" size="80px">mdi-floor-plan</v-icon>
                                </v-row>
                            </v-col>
                            <v-col>
                                <h2>Nombre de Projet</h2>
                                <h3>0</h3>
                            </v-col></v-row>
                    </v-card>
                    <!-- la colonne du visualisation du status ou non employe -->
                    <v-cols>
                        <v-card class="pa-1 ma-1" variant="outlined">
                            <v-row no-gutters>
                                <v-col align="center">
                                    <v-icon color="indigo-darken-4" v-if="Status"
                                        size="80px">mdi-check-decagram-outline</v-icon>
                                    <v-icon color="red" v-if="!Status" size="80px">mdi-cancel</v-icon>
                                </v-col>
                                <v-col>
                                    <h2>Status:</h2>
                                    <h2> {{ deliberant }}</h2>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-cols>
                    <v-card class="pa-1 ma-1" color="grey">
                        <v-row no-gutters>
                            <v-col>
                                <v-row no-gutters justify="center" height="100%">
                                    <v-icon size="60px">mdi-school</v-icon>
                                </v-row>
                            </v-col>
                            <v-col>
                                <h2>nombre de diplomes</h2>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-card>
            </v-template>
            <!-- les trois autres carte deu bas de la page -->
            <v-container fluid>
                <v-row fluid>
                    <v-col>
                        <!-- ici vient le v-card contenant le switch pour changer le Status -->
                        <v-card class="pa-3 ma-1" height="180px" elevation="8">
                            <h2>Competences</h2>
                            <v-row no-gutters justify="center">
                                <v-btn class="ma-1 rounded3" color="indigo-darken-4" variant="outlined">ajouter</v-btn>
                                <v-btn class="ma-1 rounded3" color="red" variant="outlined">supprimer</v-btn>
                            </v-row>
                            <v-row no-gutters class="ma-2" justify="center">
                                <v-col>Changer votre status de <br> employé a Non employe </v-col>
                                <v-col class="eliegrizzly" cols="2">
                                    <v-switch @click="changeStatut()" v-model="Status" color="indigo-darken-4" inset
                                        hide-details="ml-4"></v-switch>
                                </v-col>

                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="pa-3 ma-1" height="180px" elevation="8">

                            <h2>Historiques</h2>
                            <h3>12/Mai/2005</h3>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="pa-3 ma-1" height="180px" elevation="8">

                            <h2>Contacts</h2>
                            <h3>+243 900 236 435</h3>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </v-sheet>
    <Dialogue ref="dialOpenProjet" />
</template>
<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import Dialogue from '@/Pages/extensions/filterheader.vue'
import { useSnackbar } from '@/design/useSnackbar'

const { show } = useSnackbar()
const Status = ref()
const dialOpenProjet = ref(false)
const deliberant = ref()
const photo_profil = ref("http://localhost/API_SPP/pdf/MDIcons/profil.jpg")
const Membre = ref(null)
const FormData = ref({
    user: 'null',
    vStatusend: '',
})

function changeStatut(client) {
    Status.value = !Status.value
    //utlisation des sessionsStorage au lie de localstorage
    sessionStorage.setItem('status professionnel', Status.value ? 'Employé' : 'Non Employé')

}
function find_id_user() {
    const membre = JSON.parse(sessionStorage.getItem('Membre'));
    const elie = membre
    return elie.id

}
// Fonction pour prendre le donnees dans le sessionStorage avec la methode JSON.parse
let interval = null
onMounted(async () => {
    const membre = JSON.parse(sessionStorage.getItem('Membre'));
    Membre.value = membre ?? null;
    interval = setInterval(async () => {
        //Charger la valuer du status profesionnel sauvergarder ou utiliser la preferences du systeme
        const statussession = sessionStorage.getItem('status professionnel')
        deliberant.value = statussession
        console.error(deliberant.value)
        if (statussession === 'Employé') {
            Status.value = true
            FormData.value.user = find_id_user()
            FormData.value.vStatusend = 1
            await axios.post('http://localhost/API_SPP/Door/Clients/ConfirmStatut.php', FormData.value)
        }
        else {
            Status.value = false
            FormData.value.user = find_id_user()
            FormData.value.vStatusend = 0
            await axios.post('http://localhost/API_SPP/Door/Clients/ConfirmStatut.php', FormData.value)
        }
    },10000)
})
onUnmounted(() => {
    clearInterval(interval) // important pour eviter la fuite de memoire
})
// ============ pour la fonction de modification =================
function Modifier_indent() {

}
function sendTheFileToBDD(){
    show("modification du profil en cours ", "indigo-darken-4")
}
async function openedCurVitae(item) {
    if (!item || !item.id) {
        console.error('ID Manquant')
        return
    }
    const url = `http://localhost/API_SPP/pdf/CurVitae.php?id=${encodeURIComponent(item.id)}`;
    window.open(url, '_blank')
}

function openDial() {
    dialOpenProjet.value.openDialConfirm()
}

</script>