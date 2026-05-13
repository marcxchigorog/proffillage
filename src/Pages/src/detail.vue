<template>
    <v-dialog v-model="dialogdetail" persistent class="justify-center align-center" width="1500px">
        <v-card class="web28" elevation="23" v-if="$vuetify.display.mdAndUp">
            <v-container fluid>
                <v-card-title align="center">
                    <v-row justify="center">
                        <v-col align-self="center">
                            <h1 id="cursive">LE DETAIL DES INFORMATIONS</h1>
                        </v-col>
                        <v-col cols="3">
                            <v-icon v-if="Themesession === 'dark'" size="120px" color="yellow">
                                mdi-Account-hard-Hat-outline</v-icon>
                            <v-icon v-if="Themesession === 'light'" size="120px" color="indigo-darken-4">
                                mdi-Account-hard-Hat-outline</v-icon>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-divider align="center" opacity="1" :thickness="3" color="brown-darken-4" width="100%" />
                <v-divider opacity :thickness="3" color="brown-darken-4" width=100% />
                <v-card elevation="10">
                    <v-col>
                        <v-row class="ma-3">
                            <!-- la photo de profil du membre -->
                            <v-col cols="4" class="fonct123" align="center">
                                <center>
                                    <v-img :src="photo_profil" width="240"></v-img>
                                </center>
                            </v-col>
                            <!-- les label noms postnoms prenom du membre  -->
                            <v-col>
                                <v-row class="mb-1" justify="center">
                                    <h1> Niveau :</h1> <v-rating size="50" length="5" readonly></v-rating>
                                </v-row>
                                <v-sheet class="pa-3 rounded3" color="indigo-darken-4">
                                    <v-card class="pa-3 " elevation="9">
                                        <v-row no-gutters>
                                            <!-- le label selon les valeur  -->
                                            <v-col>
                                                <div class=" dix-2"> Nom </div>
                                                <div class=" dix-2">Age</div>
                                                <div class=" dix-2"><v-icon class="mr-3" v-if="Themesession === 'light'"
                                                        color="indigo-darken-4">mdi-Briefcase-outline</v-icon>
                                                    <v-icon color="yellow" class="mr-3"
                                                        v-if="Themesession === 'dark'">mdi-Briefcase-outline</v-icon>Profession
                                                </div>
                                                <div class=" dix-2"><v-icon class="mr-3" v-if="Themesession === 'light'"
                                                        color="indigo-darken-4">mdi-google-maps</v-icon>
                                                    <v-icon color="yellow" class="mr-3"
                                                        v-if="Themesession === 'dark'">mdi-google-maps</v-icon>Province
                                                </div>
                                                <div class=" dix-2"><v-icon class="mr-3" v-if="Themesession === 'light'"
                                                        color="indigo-darken-4">mdi-google-maps</v-icon>
                                                    <v-icon color="yellow" class="mr-3"
                                                        v-if="Themesession === 'dark'">mdi-google-maps</v-icon>Ville
                                                </div>
                                                <div class=" dix-2"><v-icon class="mr-3" v-if="Themesession === 'light'"
                                                        color="indigo-darken-4">mdi-email-outline</v-icon>
                                                    <v-icon color="yellow" class="mr-3"
                                                        v-if="Themesession === 'dark'">mdi-email-outline</v-icon>Email
                                                </div>
                                                <div class=" dix-2"><v-icon class="mr-3" v-if="Themesession === 'light'"
                                                        color="indigo-darken-4">mdi-phone-outline</v-icon>
                                                    <v-icon color="yellow" class="mr-3"
                                                        v-if="Themesession === 'dark'">mdi-phone-outline</v-icon>Telephone
                                                </div>
                                                <div class=" dix-2"><v-icon class="mr-3" v-if="Themesession === 'light'"
                                                        color="indigo-darken-4">mdi-download-outline</v-icon>
                                                    <v-icon color="yellow" class="mr-3"
                                                        v-if="Themesession === 'dark'">mdi-download-outline</v-icon>Date
                                                    insertion
                                                </div>
                                            </v-col>
                                            <v-col cols="7">
                                                <div class="uppercase dix-2">: {{ member.Nom }} {{ member.Postnom }} {{
                                                    member.Prenom }}</div>
                                                <div class=" dix-2">: Age</div>
                                                <div class="uppercase dix-2">: {{ member.Profession }}</div>
                                                <div class="uppercase dix-2">: {{ member.Province }}</div>
                                                <div class="uppercase dix-2">: {{ member.Ville }}</div>
                                                <div class="uppercase dix-2">: {{ member.Email }}</div>
                                                <div class="uppercase dix-2">: {{ member.Nphone }}</div>
                                                <div class="uppercase dix-2">: {{ member.Annee_insert }}</div>

                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-sheet>
                            </v-col>
                        </v-row>
                        <!-- les 3 papiers d'affichage selon certain nombres -->
                        <v-row no-gutter justify="center">
                            <v-sheet color="black" class="sheetone " elevation="8">
                                <!-- l'icone si une fois le status est vrai  -->
                                <v-row v-if="indetifiantmembre === 1" align-content="center" no-gutters>
                                    <v-col align="center">
                                        <v-icon color="indigo-darken-4" size="100px">mdi-Briefcase-outline</v-icon>
                                    </v-col>
                                    <v-col align-self="center">
                                        <div class="titlettk justify-center">
                                            <v-icon size="50">mdi-account-outline</v-icon>
                                            <br> Statut : Employé
                                        </div>
                                    </v-col>
                                </v-row>
                                <!-- l'icone si une fois le status est false  -->
                                <v-row v-if="indetifiantmembre === 0" align-content="center" no-gutters>
                                    <v-col align="center">
                                        <v-icon class="red" size="100px">mdi-Briefcase-outline</v-icon>
                                    </v-col>
                                    <v-col align-self="center" cols="7">
                                        <div class="titlesimba justify-center">
                                            <v-icon size="50">mdi-account-circle-outline</v-icon>
                                            <br>  Statut  : Non Employé
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-sheet>
                            <!-- le papier de nombre de projet deja effectuer par le membre -->
                            <v-sheet @click="goproject" v-ripple class="sheetone hover-effect" elevation="8"
                                color="indigo-darken-4">
                                <v-row no-gutters justify="center" class="yellow">
                                    <v-col>
                                        <div id="numberst">{{ projet }}</div>
                                    </v-col>
                                    <v-col>
                                        <div id="titletrt"><v-icon>mdi-briefcase-outline</v-icon> <br>Nombre projet(s)
                                        </div>
                                        <marquee behavior="" direction="">nombre de projet(s) dejà réalisés par sa
                                            personne physique.</marquee>
                                    </v-col>
                                </v-row>
                            </v-sheet>
                            <!-- le papier de nombre de dipplomes deja effectuer par le membre -->
                            <v-sheet color="yellow" class="sheetone " elevation="8">
                                <v-row no-gutters justify="center">
                                    <v-col cols="5">
                                        <div id="numbercnd">{{ diplome }}</div>
                                    </v-col>
                                    <v-col>
                                        <div id="titletth"><v-icon>mdi-school</v-icon> <br>Nombre diplome(s) </div>
                                        <marquee behavior="" direction="">nombre de diplome(s) accumulés le long de ces
                                            parcours academique ou de ses formations par sa personne physique.</marquee>
                                    </v-col>
                                </v-row>
                            </v-sheet>
                        </v-row>
                        <v-row>
                            <div class="ma-3" variant="outlined" label="province" readonly></div>
                            <div class="ma-3" variant="outlined" label="ville" readonly></div>
                            <div class="ma-3" variant="outlined" label="Telephone" readonly></div>
                        </v-row>
                    </v-col>

                </v-card>
            </v-container>
            <!-- les bouton principales du dialogues -->
            <v-row no-gutters justify="center">
                <!-- bouton contacter -->
                <v-sheet class="ma-1 ml-5 rounded3">
                    <v-btn variant="outlined" @click="open_chat_dialogs()" color="yellow-darken-4"
                        class="ma-2 rounded3">
                        <v-icon color="indigo-darken-4">mdi-chat</v-icon>Contacter</v-btn>
                </v-sheet>
                <!-- boutton fermer -->
                <v-sheet class="ma-1 ml-5 rounded3">
                    <v-btn @click="dialogdetail = !dialogdetail" variant="outlined" color="indigo-darken-4"
                        class="ma-2 rounded3">
                        <v-icon color="yellow-darken-4">mdi-cancel</v-icon> Fermer</v-btn>
                </v-sheet>
            </v-row>
        </v-card>
    </v-dialog>
    <!-- la partie du dialogue qui pourra s'ouvrira si l'user est sur android ou au formation -->
    <v-dialog v-model="dialogdetail" v-if="$vuetify.display.xs" persistent class="justify-center align-center"
        width="1500px" height="auto">
        <v-card class=" ma-1 pa-2 elie12">
            <!-- l'icone et le titre du card  -->
            <v-card-title align="center">
                <v-icon size="50px" color="indigo-darken-4"> mdi-Account-Hard-hat-outline</v-icon>
                <div id="title-auto">DETAIL INFORMATIONS </div>
            </v-card-title>
            <!-- la photo de profil du membre selectionner -->
            <center>
                <!-- la forme de visualisation si le theme est dark-->
                <v-sheet v-if="Themesession === 'dark'" elevation="9" class="pa-2  ma-1 rounded3" width="132px"
                    color="yellow">
                    <v-img width="130px" :src="photo_profil"></v-img>
                </v-sheet>
                <!-- la forme de visualisation si le theme est light-->
                <v-sheet v-if="Themesession === 'light'" elevation="9" class="pa-2  ma-1 rounded3" width="132px"
                    color="indigo-darken-4">
                    <v-img width="130px" :src="photo_profil"></v-img>
                </v-sheet>
            </center>
            <!-- les details des informations du membre  -->
            <v-card class="overflow-x bg-surface-variant pa-4 ma-1" elevation="9" variant="outlined" height="350px">
                <v-row no-gutters>
                    <!-- le label selon les valeur  -->
                    <v-col>
                        <div>Nom</div>
                        <div>Age</div>
                        <div>Profession</div>
                        <div>Province</div>
                        <div>Ville</div>
                        <div>Email </div>
                    </v-col>
                    <v-col cols="7">
                        <div class="uppercase">{{ member.Nom }}</div>
                        <div>Age</div>
                        <div class="uppercase">{{ member.Profession }}</div>
                        <div class="uppercase">{{ member.Province }}</div>
                        <div class="uppercase">{{ member.Ville }}</div>
                        <div class="uppercase">{{ member.Email }}</div>

                    </v-col>
                </v-row>
                <v-divider :thickness="2" class="ma-2" opacity="2"></v-divider>
                <v-row>
                    <!-- le label selon les   -->
                    <v-col>
                        <div><v-icon v-if="Themesession === 'dark'" color="indigo-darken-4">mdi-hammer</v-icon>
                            <v-icon color="yellow" v-if="Themesession === 'light'">mdi-hammer</v-icon> Projet
                        </div>
                        <div><v-icon v-if="Themesession === 'dark'" color="indigo-darken-4">mdi-school</v-icon>
                            <v-icon color="yellow" v-if="Themesession === 'light'">mdi-school</v-icon> Diplome
                        </div>
                        <div><v-icon v-if="Themesession === 'dark'" color="indigo-darken-4">mdi-download</v-icon>
                            <v-icon color="yellow" v-if="Themesession === 'light'">mdi-download</v-icon> Insertion
                        </div>
                        <div><v-icon v-if="Themesession === 'dark'" color="indigo-darken-4">mdi-phone</v-icon>
                            <v-icon color="yellow" v-if="Themesession === 'light'">mdi-phone</v-icon> Phone
                        </div>
                        <div><v-icon v-if="Themesession === 'dark'" color="indigo-darken-4">mdi-sprout</v-icon>
                            <v-icon color="yellow" v-if="Themesession === 'light'">mdi-sprout</v-icon> Statut
                        </div>
                    </v-col>
                    <!-- valeur -->
                    <v-col class="text-break" cols="7">
                        <div>: {{ projet }}</div>
                        <div>: {{ diplome }} </div>
                        <div>: {{ member.Annee_insert }}</div>
                        <div>: {{ member.Nphone }}</div>
                        <div>:<v-icon v-if="Themesession === 'dark'" class="ml-6"
                                color="indigo-darken-4">mdi-check-decagram</v-icon>
                            <v-icon color="yellow" class="ml-6"
                                v-if="Themesession === 'light'">mdi-check-decagram</v-icon>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
            <!-- le deux buttons pour contacter et aussi annuler -->
            <v-row no-gutters justify="center">
                <v-sheet class="ma-1 ml-2 rounded3">
                    <v-btn v-if="Themesession === 'dark'" @click="open_chat_dialog()" variant="outlined" color="yellow"
                        class="ma-2 rounded3">
                        <v-icon color="indigo-darken-4">mdi-phone</v-icon>Contacter</v-btn>
                    <v-btn v-if="Themesession === 'light'" @click="open_chat_dialog()" variant="outlined"
                        color="indigo-darken-4" class="ma-2 rounded3">
                        <v-icon color="yellow-darken-4">mdi-phone</v-icon>Contacter</v-btn>
                </v-sheet>
                <!-- bouton to close  -->
                <v-sheet class="ma-1 rounded3">
                    <v-btn v-if="Themesession === 'dark'" @click="dialogdetail = !dialogdetail" variant="outlined"
                        color="indigo-darken-4" class="ma-2 rounded3"><v-icon
                            color="yellow">mdi-cancel</v-icon>Fermer</v-btn>
                    <v-btn v-if="Themesession === 'light'" @click="dialogdetail = !dialogdetail" variant="outlined"
                        color="yellow-darken-4" class="ma-2 rounded3"><v-icon
                            color="indigo-darken-4">mdi-cancel</v-icon>Fermer</v-btn>
                </v-sheet>
            </v-row>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import router from "@/router/index"
import axios from 'axios'

const dialogdetail = ref(null)
const projet = 100
const diplome = 10
const client = ref()
const photo_profil = ('http://localhost/API_SPP/pdf/MDIcons/profil.jpg')
const Themesession = ref()
const member = ref([])
const statusMembre = ref()
const indetifiantmembre = ref()



async function opendialdet(Client) {
    dialogdetail.value = true
    client.value = Client
    Themesession.value = sessionStorage.getItem('theme')
    try {
        const response = await axios.get(`http://localhost/API_SPP/Door/Clients/DetailCustomer.php?id=${encodeURIComponent(client.value)}`,
            { withCredentials: true });
        if (response && response.data) {
            // support different shapes: res.data.client or res.data.data
            member.value = response.data.client
        }
    }
    catch (e) {
        console.error('Erreur fetchClientDetails', e);
    }
}

async function open_chat_dialog() {
    //commence par fermer le dialogue 
    dialogdetail.value = !dialogdetail.value
    //puis on prend la valeur de l'id du client puis
    const id = client.value

    const back_resp = await axios.get(`http://localhost/API_SPP/Door/Clients/conversation.php?id=${id}&type=resourcesdetails`)
    const client_det = back_resp.data.user
    const client_session = ({
        id: id,
        nom: client_det[0].nom,
        postom: client_det[0].postnom,
        prenom: client_det[0].prenom
    })

    // on fait un envoi vers la page de discussion
    sessionStorage.setItem('Discussion_client', JSON.stringify(client_session))
    router.push('/Discussion1')

}
async function open_chat_dialogs() {
    //commence par fermer le dialogue 
    dialogdetail.value = !dialogdetail.value
    //puis on prend la valeur de l'id du client puis
    const id = client.value
    //when it reqest to backend a response who it must sended to the sessionstorage 
    const back_resp = await axios.get(`http://localhost/API_SPP/Door/Clients/conversation.php?id=${id}&type=resourcesdetails`)
    const client_det = back_resp.data.user

    const client_session = ({
        id: id, nom: client_det[0].nom, postom: client_det[0].postnom, prenom: client_det[0].prenom
    })

    // on fait un envoi vers la page de discussion
    sessionStorage.setItem('Discussion_client', JSON.stringify(client_session))
    router.push('/Discussion')

}
function find_id_user() {
    const membre = JSON.parse(sessionStorage.getItem('Membre'));
    const elie = membre
    return elie.id

}
let interval = null
onMounted(() => {
 interval = setInterval(async () => {
        const response = await axios.get(`http://localhost/API_SPP/Door/Clients/Verification.php?id=${encodeURIComponent(client.value)}&types=VerifiStatus`,
            { withCredentials: true } )
        indetifiantmembre.value =response.data.Status
    }, 1400)
})
onUnmounted(() => {
    clearInterval(interval) // important pour eviter la fuite de memoire
})
// la fonction qui pourra chercher les donnes dans pour le recuperer


defineExpose({
    opendialdet,
})
</script>