<template>
    <v-container v-if="$vuetify.display.mdAndDown" class="phone-container pa-0" fluid>
        <!-- la partie  de messages qui affiche le si une on selectionne la conversation -->
        <v-card class="phone-card" elevation="24">
            <!-- En-tête WhatsApp -->
            <v-toolbar color="indigo-darken-4" >
                <v-row>
                    <v-icon class="ma-3" size="x-large" v-ripple @click="close_dialog_step()"
                        color="yellow">mdi-arrow-left</v-icon>
                    <v-icon class="mt-3 ml-1 mr-1 " size="x-large" v-ripple
                        @click="open_dial_call_audio()">mdi-phone</v-icon>
                    <v-icon class="mt-3 ml-1 mr-1 " size="x-large" v-ripple
                        @click="open_dial_call_video()">mdi-video</v-icon>
                    <v-toolbar-title align=center>{{ nom_client }} {{ postnom_client }} {{ prenom_client }}
                        <div class="caption">En ligne</div>
                    </v-toolbar-title><v-avatar size="60" class="mx-4"><v-img :src="Imageurl" />
                    </v-avatar>
                </v-row>
            </v-toolbar>

            <!-- Zone des messages -->
            <v-container ref="messagesContainer" class="messages-container" fluid>
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
                        <div  v-if="msg.formatrecept === 'sends'" class="msg-leftclient">
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
                <v-text-field v-model="messgSend.contenue" placeholder="Message" variant="outlined" density="compact"
                    hide-details class="mx-2 message-input" @keyup.enter="envoieMessage"
                    color="indigo-darken-4"></v-text-field>
                <v-icon color="indigo-darken-4" class="mx-1" @click="envoieMessage"> mdi-send </v-icon>
            </v-card-actions>
        </v-card>
    </v-container>
    

</template>
<script setup>
import { onMounted, ref, nextTick } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'


const nom_client = ref()
const postnom_client = ref()
const prenom_client = ref()
const router = useRouter()
const Imageurl = ref('http://localhost/API_SPP/Src_Media/elie.jpg')
// Messages par défaut
const messgSend = ref({
    contenue: '',
    user: '',
    dest: '',
})
const messages = ref([])

onMounted(() => {
    // recup_messages_convers()
    openConversation()
})

// la function qui s'execute si une fois il click sur l'appel audio
function open_dial_call_audio() {

}
// la function qui s'execute si une fois il click sur l'appel video
function open_dial_call_video() {

}
// la fonction qui cherche l'id du destinateur
function find_id_friend() {
    const membre = JSON.parse(sessionStorage.getItem('Discussion_client'));
    const id_friend = membre
    return id_friend
}
// qui chercher l'id du client connecter
function find_id_user() {
    const membre = JSON.parse(sessionStorage.getItem('Membre'));
    const elie = membre
    return elie.id

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
    let all = [...client.map(m=>({...m,formatrecept : "sends"})),
            ...serv.map(m=>({...m,formatrecept : "recus"}))];

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
        weekday: 'long',day: 'numeric',month: 'long',year: 'numeric'
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

// Méthodes
// const scrollToBottom = async () => {
//     await nextTick()
//     if (messagesContainer.value) {
//         const container = messagesContainer.value.$el
//         container.scrollTop = container.scrollHeight
//     }
// }

// Scroll initial en bas
// scrollToBottom()

// la fonction qui effectue la fermeture  du conversation 
function close_dialog_step() {
    sessionStorage.removeItem('Discussion_client')
    router.push('/Discussion')
}
</script>