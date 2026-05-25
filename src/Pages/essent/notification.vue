<template>
    <v-sheet color="indigo-darken-4" height="300px" v-if="$vuetify.display.mdAndUp">
        <v-container fluid>
            <v-row class="mb-5 box-shadow">
                <h1 id="nameprofil" class="ml-20 pa-2 google">Centre de Notifications</h1>
            </v-row>
            <v-row no-gutters justify="center">
                <v-card height="650px" width="1500px" elevation="9">
                    <v-row no-gutters>
                        <!-- la partie qui contient les bouttons de classification des Notifications -->
                        <v-col cols="3">
                            <v-list class="mt-8">
                                <v-list-item></v-list-item>
                                <v-list-item><v-btn color="indigo-darken-4" width="100%" variant="outlined" class="pa-1"
                                        prepend-icon="mdi-Bell-badge">Toutes</v-btn></v-list-item>
                                <v-list-item><v-btn color="indigo-darken-4" width="100%" variant="outlined" class="pa-1"
                                        prepend-icon="mdi-format-float-none">Non lues</v-btn></v-list-item>
                                <v-list-item><v-btn color="indigo-darken-4" width="100%" variant="outlined" class="pa-1"
                                        prepend-icon="mdi-Bell-badge">Toutes</v-btn></v-list-item>
                                <v-list-item><v-btn color="indigo-darken-4" to="/Discussion" width="100%"
                                        variant="outlined" class="pa-1"
                                        prepend-icon="mdi-chat">Chat</v-btn></v-list-item>
                                <v-list-item></v-list-item>
                                <v-list-item></v-list-item>
                                <v-list-item></v-list-item>
                                <v-list-item><v-btn color="indigo-darken-4" width="100%" variant="outlined" class="pa-1"
                                        prepend-icon="mdi-download">mise a jour</v-btn></v-list-item>
                            </v-list>
                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col>
                            <v-row no-gutters class="ml-2 mt-2">
                                <v-col cols="9">
                                    <h1>Notifications</h1>
                                </v-col>
                                <v-col><v-btn class="rounded3" color="indigo-darken-4">Marque comme lu</v-btn></v-col>
                            </v-row>
                            <!-- la partie qui affiche les details sur une notifications -->
                            <v-card class="ma-1 overflow-x" variant="outlined">
                                <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
                                    <v-row no-gutters>
                                        <v-row dense no-gutters justify="center">
                                            <v-card align-self="center" color="indigo-darken-4" class="ml-1 mr-6"
                                                cols="2">
                                                <v-icon color="yellow" class="ml-6 mr-6"
                                                    size="70px">mdi-State-machine</v-icon>
                                            </v-card>
                                            <v-col>
                                                <center>
                                                    <h2>Publication</h2>
                                                </center>
                                                {{ notication }}
                                            </v-col>
                                        </v-row>
                                    </v-row>
                                </v-card>
                                <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
                                    <v-row no-gutters>
                                        <v-row dense no-gutters justify="center">
                                            <v-card align-self="center" color="indigo-darken-4" class="ml-1 mr-6"
                                                cols="2">
                                                <v-icon color="yellow" class="ml-6 mr-6"
                                                    size="70px">mdi-State-machine</v-icon>
                                            </v-card>
                                            <v-col>
                                                <center>
                                                    <h2>Publication</h2>
                                                </center>
                                                {{ notication }}
                                            </v-col>
                                        </v-row>
                                    </v-row>
                                </v-card>
                                <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
                                    <v-row no-gutters>
                                        <v-row dense no-gutters justify="center">
                                            <v-card align-self="center" color="indigo-darken-4" class="ml-1 mr-6"
                                                cols="2">
                                                <v-icon color="yellow" class="ml-6 mr-6"
                                                    size="70px">mdi-State-machine</v-icon>
                                            </v-card>
                                            <v-col>
                                                <center>
                                                    <h2>Publication</h2>
                                                </center>
                                                {{ notication }}
                                            </v-col>
                                        </v-row>
                                    </v-row>
                                </v-card>
                                <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
                                    <v-row no-gutters>
                                        <v-row dense no-gutters justify="center">
                                            <v-card align-self="center" color="indigo-darken-4" class="ml-1 mr-6"
                                                cols="2">
                                                <v-icon color="yellow" class="ml-6 mr-6"
                                                    size="70px">mdi-State-machine</v-icon>
                                            </v-card>
                                            <v-col>
                                                <center>
                                                    <h2>Publication</h2>
                                                </center>
                                                {{ notication }}
                                            </v-col>
                                        </v-row>
                                    </v-row>
                                </v-card>
                                <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
                                    <v-row no-gutters>
                                        <v-row dense no-gutters justify="center">
                                            <v-card align-self="center" color="indigo-darken-4" class="ml-1 mr-6"
                                                cols="2">
                                                <v-icon color="yellow" class="ml-6 mr-6"
                                                    size="70px">mdi-State-machine</v-icon>
                                            </v-card>
                                            <v-col>
                                                <center>
                                                    <h2>Publication</h2>
                                                </center>
                                                {{ notication }}
                                            </v-col>
                                        </v-row>
                                    </v-row>
                                </v-card>
                                <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
                                    <v-row no-gutters>
                                        <v-row dense no-gutters justify="center">
                                            <v-card align-self="center" color="indigo-darken-4" class="ml-1 mr-6"
                                                cols="2">
                                                <v-icon color="yellow" class="ml-6 mr-6"
                                                    size="70px">mdi-State-machine</v-icon>
                                            </v-card>
                                            <v-col>
                                                <center>
                                                    <h2>Publication</h2>
                                                </center>
                                                {{ notication }}
                                            </v-col>
                                        </v-row>
                                    </v-row>
                                </v-card>
                                <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
                                    <v-row no-gutters>
                                        <v-row dense no-gutters justify="center">
                                            <v-card align-self="center" color="indigo-darken-4" class="ml-1 mr-6"
                                                cols="2">
                                                <v-icon color="yellow" class="ml-6 mr-6"
                                                    size="70px">mdi-State-machine</v-icon>
                                            </v-card>
                                            <v-col>
                                                <center>
                                                    <h2>Publication</h2>
                                                </center>
                                                {{ notication }}
                                            </v-col>
                                        </v-row>
                                    </v-row>
                                </v-card>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
        </v-container>
    </v-sheet>
    <!-- la partie interface smartphones  -->
    <v-sheet class="mt-2"  v-if="$vuetify.display.xs">
        <v-row no-gutters justify="center" class="mt-5">
            <v-btn color="indigo-darken-4" variant="outlined" @click="trierNotification('toutes')" v-if="theme == 'light'" class="pa-1 ma-1 rounded3">
                <v-icon size="20">mdi-Bell-badge</v-icon> Toutes</v-btn>
            <v-btn color="indigo-darken-4" variant="outlined" @click="trierNotification('Non lues')" v-if="theme == 'light'" class="pa-1 ma-1 rounded3">
                <v-icon size="20">mdi-format-float-none</v-icon> Non lues</v-btn>
            <v-btn color="indigo-darken-4" variant="outlined" @click="push_to_sms()" v-if="theme == 'light'" class="pa-1 ma-1 rounded3">
                <v-icon size="20">mdi-chat</v-icon> Chats</v-btn>
            <v-btn color="yellow" variant="outlined" @click="trierNotification('toutes')" v-if="theme == 'dark'" class="pa-1 ma-1 rounded3">
                <v-icon size="20">mdi-Bell-badge</v-icon> Toutes</v-btn>
            <v-btn color="yellow" variant="outlined" @click="trierNotification('Non lues')" v-if="theme == 'dark'" class="pa-1 ma-1 rounded3">
                <v-icon size="20">mdi-format-float-none</v-icon> Non lues</v-btn>
            <v-btn color="yellow" variant="outlined" @click="push_to_sms()" v-if="theme == 'dark'" class="pa-1 ma-1 rounded3">
                <v-icon size="20">mdi-chat</v-icon> Chats</v-btn>
        </v-row>
        <v-row no-gutters class="ma-2">
            <h2 id="nameprofil">Centre de Notifications</h2>
        </v-row>
        <v-row class="overflow-y pa-2 mx-hhhh">
            <v-card elevation="8" class="ma-2 pa-1" v-for="i in NombreNotification" :key="i" variant="outlined">
                <v-row no-gutters>
                    <v-row dense no-gutters justify="center">
                        <v-card align-self="center" color="indigo-darken-4" class="ml-1 mr-6" cols="2">
                            <v-icon color="yellow" class="ml-6 mr-6" size="70px">mdi-State-machine</v-icon>
                        </v-card>
                        <v-col>
                            <center>
                                <h2>Publication</h2>
                            </center>
                            {{ notication }}
                        </v-col>
                    </v-row>
                </v-row>
            </v-card>
        </v-row>
    </v-sheet>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useSnackbar } from '@/design/useSnackbar'
import router from '@/router'

const {  show }  = useSnackbar()
const notication = ref("Bonjour,Elie chigorogo l'un de ingenieur en software viens d'ajouter une nouvelle proffession a ses capacites")
const NombreNotification = 10
const theme = ref('light')

let interval = null

function prendreTheme() {
    theme.value = sessionStorage.getItem('theme')
}
function trierNotification (methode){
    show('Trie de message '+methode, "success")
}
function push_to_sms (){
    router.push('/Discussion')
}

onMounted(() => {
    interval = setInterval(() => {
        prendreTheme()
    },250)
})
onUnmounted(() => {
    interval
})

</script>