<template>

    <v-container v-if="$vuetify.display.mdAndUp" fluid>
        <v-row class="mt-4">
            <!-- la partie qui affiche les message selon les contact -->
            <v-col cols="4" class="ml-20 indigos">
                <v-card height="740px" class="br-15" elevation="9">
                    <v-text-field class="mt-6 ml-3" color="black" append-icon="mdi-magnify"
                        placeholder="Recherche une conversation." variant="outlined" />
                    <v-divider thickness="3px" opacity="1" color="yellow" />
                    <v-card height="740px" class="overflow-x">
                        <v-sheet class="ma-1 mt-1 rounded3 elieCursor" v-for="(mssg, i) in messagesones" :key="i"
                            @click="ouvrir_conversation(mssg)" color="indigo-darken-4">
                            <v-row no-gutters class="pa-2">
                                <v-col cols="3" class="mr-3">
                                    <v-avatar size="80px" class="ml-2" color="white" rounded="1">
                                        <img :src="Imageurl" alt="Avatar" width="90px" />
                                    </v-avatar>
                                </v-col>
                                <v-col class="ml-2 ">
                                    <h3 class="text-wrap1">{{ mssg.nom }} {{ mssg.postnom }} {{ mssg.prenom }}</h3>
                                    <div class="text-wrap" :title="mssg.contenues">{{ mssg.contenues }}</div>
                                </v-col>
                                <v-col cols="1" id="card-times"> {{ mssg.heure }}</v-col>
                            </v-row>
                        </v-sheet>
                    </v-card>
                </v-card>
            </v-col>
            <!-- la partie d'ouverture des details des conversations -->
            <v-col>
                <v-card height="740px" v-model="postnom_client" class="br-15" elevation="9">
                    <!-- Zone entete des messages -->
                    <v-row no-gutters class="pa-2" color="indigo-darken-4">
                        <v-col>
                            <v-icon class="mt-7" color="yellow" @click="close_dialog_step()">mdi-arrow-left</v-icon>
                        </v-col>
                        <!-- la photo du client -->
                        <v-col cols="2" class="mr-3">
                            <v-avatar size="100px" class="ml-2" color="white" rounded>
                                <img :src="Imageurl" alt="Avatar" width="90px" />
                            </v-avatar>
                        </v-col>
                        <!-- le noms du membre selectionner -->
                        <v-col cols="8">
                            <h2>{{ nom_client }} {{ postnom_client }} {{ prenom_client }}</h2>
                            <h3>{{ profession }}</h3>
                            <center class="green">
                                <v-icon color="success">mdi-radiobox-empty</v-icon>
                                <b>En ligne</b>
                            </center>
                        </v-col>
                        <!-- l'icone  menu pour la derniere partie -->
                        <v-col cols="1" class="mt-6">
                            <v-menu v-model="menu" location="bottom">
                                <!-- Bouton qui ouvre le menu -->
                                <template #activator="{ props }">
                                    <v-btn vd class="bg-surface-variant" v-bind="props">
                                        <v-icon size="30">mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <!-- Contenu du menu -->
                                <v-list>

                                    <!-- Appel vidéo -->
                                    <v-list-item @click="startVideoCall('Appel en cours', 'veuillez repondre')">
                                        <v-list-item-title>
                                            <v-icon start>mdi-video</v-icon>
                                            Appel vidéo
                                        </v-list-item-title>
                                    </v-list-item>
                                    <!-- Appel vocal -->
                                    <v-list-item @click="startVoiceCall">
                                        <v-list-item-title>
                                            <v-icon start>mdi-phone</v-icon>
                                            Appel vocal
                                        </v-list-item-title>
                                    </v-list-item>

                                    <!-- Rating -->
                                    <v-list-item>
                                        <v-list-item-title>
                                            <v-icon start>mdi-star</v-icon>
                                            Noter
                                        </v-list-item-title>

                                        <!-- Composant rating -->
                                        <v-rating v-model="rating" color="yellow" density="compact" />
                                    </v-list-item>

                                </v-list>
                            </v-menu>
                        </v-col>
                    </v-row>
                    <v-divider opacity="1" />
                    <!-- la partie de ou est affiche les messages de convesation en details  -->
                    <!-- Zone des messages -->
                    <v-container ref="messagesContainer" class="messages-container_md" fluid>
                        <v-card-text v-model="dialog">
                            <div v-for="(msg, index) in messages" :key='index' class='mb-2'>
                                <center>
                                    <div v-if="msg.type === 'separator'" class="day-sepServclient">
                                        {{ formatJour(msg.date) }}
                                    </div>
                                </center>
                                <!-- v-if="msg.type === 'Client'" -->
                                <div v-if="msg.formatrecept === 'recus'" class="msg-rightclient">
                                    <fieldset variant="outlined" color="blue-ligthen-4" class="msg rounded3 pa-2">
                                        {{ msg.contenues }}
                                    </fieldset>
                                    <small>
                                        envoyé à : {{ msg.heure }} <v-icon>mdi-check</v-icon>
                                    </small>
                                </div>
                                <!-- v-if="msg.type === 'service'" -->
                                <div v-if="msg.formatrecept === 'sends'" class="msg-leftclient">
                                    <fieldset class="msg ">
                                        {{ msg.contenues }}
                                    </fieldset><small>
                                        <v-icon>mdi-check</v-icon> reçu à: {{ msg.heure }}</small>
                                </div>
                            </div>
                        </v-card-text>
                    </v-container>

                    <!-- Zone de saisie -->
                    <v-card-actions color="yellow" class="chat-input pa-2">
                        <v-icon class="mx-1" color="indigo-darken-4">mdi-emoticon</v-icon>
                        <v-icon class="mx-1" color="indigo-darken-4">mdi-paperclip</v-icon>
                        <v-text-field v-model="messgSend.contenue" placeholder="Message" variant="outlined"
                            density="compact" hide-details class="mx-2 message-input" @keyup.enter="envoieMessage"
                            color="indigo-darken-4"></v-text-field>
                        <v-icon color="indigo-darken-4" class="mx-1" @click="envoieMessage"> mdi-send </v-icon>
                    </v-card-actions>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
    <!-- Interface smartphone -->
    <v-container v-if="$vuetify.display.mdAndDown" class="phone-container pa-0" fluid>
        <!-- partie pour affichers les messages selon les correspondants -->
        <v-col class="indigos" variant="outlined">
            <v-text-field class="mt-4 ml-3" color="black" append-icon="mdi-magnify"
                placeholder="Recherche une conversation." variant="outlined" />
            <v-divider thickness="3px" opacity="1" color="yellow" />
            <v-card ref="messagesContainer" class="messages-container">
                <v-sheet class="ma-1 mt-1 rounded3" v-for="(mssg, i) in messagesones" :key="i"
                    @click="ouvrir_conversation(mssg)" color="indigo-darken-4">
                    <v-row no-gutters class="pa-2">
                        <v-col cols="3" class="mr-3">
                            <v-avatar size="80px" class="ml-2" color="white" rounded="1">
                                <img :src="Imageurl" alt="Avatar" width="90px" />
                            </v-avatar>
                        </v-col>
                        <v-col class="ml-2 ">
                            <h3 class="text-wrap1">{{ mssg.nom }} {{ mssg.postnom }} {{ mssg.prenom }}</h3>
                            <div class="text-wrap" :title="mssg.contenues">{{ mssg.contenues }}</div>
                        </v-col>
                        <v-col cols="1" id="card-times"> {{ mssg.heure }}</v-col>
                    </v-row>
                </v-sheet>
            </v-card>
        </v-col>

    </v-container>


</template>
<script setup>
import { useSnackbar } from '@/design/useSnackbar'
import axios from 'axios'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const { show } = useSnackbar() // la variable qui pourra affiche les message du snackbar
const Imageurl = ref('http://localhost/API_SPP/Src_Media/elie.jpg')
const name = ref('ELIE CHIGOROGO Marc')
const profession = ref('Senior Software Engineer')
const messgSend = ref({
    contenue: '',
    user: '',
    dest: '',
})
// État réactif
const messagesContainer = ref(null)
const messagesones = ref({})
const nom_client = ref()
const postnom_client = ref()
const prenom_client = ref()
const messages = ref([])
// la varianles des messa a afficher en first

let interval = null
onMounted(() => {
    interval = setInterval(()=>{
        recup_messages(),
        // recup_messages_convers()
        openConversation()
    },500)
})
onUnmounted(()=>{
    clearInterval(interval) // important pour eviter la fuite de memoire
})

function find_id_user() {
    const membre = JSON.parse(sessionStorage.getItem('Membre'));
    const elie = membre
    return elie.id

}

function ouvrir_conversation(itemx) {
    const job = ({
        id: itemx.id,
        nom: itemx.nom,
        postom: itemx.postnom,
        prenom: itemx.prenom,
    })

    sessionStorage.setItem('Discussion_client', JSON.stringify(job))
}
const recup_messages = async () => {
    const id = find_id_user()
    const back_resp = await axios.get(`http://localhost/API_SPP/Door/Clients/conversation.php?id=${id}&type=listMessages`)
    messagesones.value = back_resp.data.user
}




const menu = ref(false)
const rating = ref(0)

const startVideoCall = (title, body) => {
    show("Appel en cours ", "success")
    // verifier si le notification sont supporter
    if (!("Notification" in window)) {
        console.error("Notification non supportées")
        return
    }
    let permis = Notification.permission
    // if (permis = "default"){
    //     permis = Notification.requestPermission()
    // }
    if (permis === "granted") {
        new Notification(title, {
            body
            // icon:'@/src/src/photo principale.png',
            // tag:'calling',
            // renotify : true 
        })
        // Notification.onclick = () => {
        //     window.focus()
        //     console.error('Notification cliquer')
        // }
    }

}

const startVoiceCall = () => {
    console.error("Appel vocal lancé")
}
// la fonction qui cherche l'id du destinateur
function find_id_friend() {
    const membre = JSON.parse(sessionStorage.getItem('Discussion_client'));
    const id_friend = membre
    return id_friend
}

// la focntion asynchrone pour envoyer les messages et les enregistres
async function envoieMessage() {
    messgSend.value.user = find_id_user()
    messgSend.value.dest = find_id_friend().id
    const reponse = await axios.post("http://localhost/API_SPP/Door/Clients/insertMessages.php", messgSend.value);
    const succes = reponse.data.success
    if (succes === 'true') {
        messgSend.value.contenue = ''
    }
}

// ==============================================
// Les separateur par date 
function ajouterSeparateur(message) {
    let resultat = [];
    let lastDate = null;
    message.forEach(msg => {
        if (msg.dates !== lastDate) {
            resultat.push({
                type: "separator",
                date: msg.dates,
            })
            lastDate = msg.dates;
        } resultat.push(msg);
    });
    return resultat;
}
// la fonction pour trier le messages par la date
function fusionnerMessages(client, serv) {
    let all = [...client.map(m => ({ ...m, formatrecept: "sends" })),
    ...serv.map(m => ({ ...m, formatrecept: "recus" }))];

    all.sort((a, b) => {
        const dateA = new Date(`${a.dates} ${a.heure}`);
        const dateB = new Date(`${b.dates} ${b.heure}`);
        return dateA - dateB;
    });
    messages.value = ajouterSeparateur(all);
}
function formatJour(dateStr) {
    const date = new Date(dateStr);
    const today = new Date();

    const diff = (today - date) / (1000 * 60 * 60 * 24);
    if (diff < 1 && date.getDate() === today.getDate()) return "Aujord'hui";
    if (diff < 2 && date.getDate() === today.getDate() - 1) return "Hier";

    return date.toLocaleDateString('fr-FR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
}

const openConversation = async (client_id) => {
    const id = find_id_user()
    const client = find_id_friend().id
    const id_rec = client
    const client_rec = id
    nom_client.value = find_id_friend().nom
    postnom_client.value = find_id_friend().postom
    prenom_client.value = find_id_friend().prenom
    const message = await axios.get(`http://localhost/API_SPP/Door/Clients/discussion.php?id=${id}&type=listMessagesenvoyes&client=${client}`);
    const reponse = await axios.get(`http://localhost/API_SPP/Door/Clients/discussion.php?id=${id_rec}&type=listMessagesConvers&client=${client_rec}`);

    // fonction de melange et de fusionnement
    fusionnerMessages(message.data.user, reponse.data.user);
}

function close_dialog_step() {
    sessionStorage.removeItem('Discussion_client')
    
}
</script>