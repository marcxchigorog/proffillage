<template>
    <v-row no-gutters v-if="$vuetify.display.xs">
        <v-row class="ma-1 pa-1" no-gutters>
            <v-col align-self="center">
                <v-card >
                    <v-card-title>APERCU DU PROJET</v-card-title>
                    <v-card-main class="ma-2">
                         <v-img :src="photo" class="ma-3" width="335px"></v-img>
                    </v-card-main>
                </v-card>
            </v-col>
        </v-row>
        <!-- la partie listes des materel -->
        <v-row class="ma-1 pa-1" no-gutters>
            <v-card elevation="9" width="100%">
                <v-card-title>Données clés</v-card-title>
                <v-card-main>
                    <v-row class="ma-1">
                        <v-sheet class="bg-surface-variant rounded self-one pa-1 ml-2">
                            <v-row>
                                <v-col><v-icon>mdi-chech</v-icon></v-col>
                                <v-col></v-col>
                            </v-row>
                        </v-sheet>
                        <v-sheet class="bg-surface-variant rounded self-one pa-1 ml-2">
                            <v-row>
                                <v-col><v-icon>mdi-chech</v-icon></v-col>
                                <v-col></v-col>
                            </v-row>
                        </v-sheet>
                    </v-row>
                    <v-row class="ma-1 mb-2">
                        <v-sheet class="bg-surface-variant rounded self-one pa-1 ml-2">
                            <v-row>
                                <v-col><v-icon>mdi-chech</v-icon></v-col>
                                <v-col></v-col>
                            </v-row>
                        </v-sheet>
                        <v-sheet class="bg-surface-variant rounded self-one pa-1 ml-2">
                            <v-row>
                                <v-col><v-icon>mdi-chech</v-icon></v-col>
                                <v-col></v-col>
                            </v-row>
                        </v-sheet>
                    </v-row>
                </v-card-main>
            </v-card>
        </v-row>
        <v-row class="ma-1 pa-1" no-gutters>
            <v-col>
                <v-card elevation="9">
                    <v-card-title>Detail du projet</v-card-title>
                    <v-row no-gutters v-ripple @click="OpenDialogDet()" 
                        class="hover-effect text-2-lines pa-3 ml-2 mr-2 mb-2 rounded bg-surface-variant">
                        {{ messages }}
                    </v-row>
                    <center no-gutters class="dodgexs">
                        Appuyer pour lire tous le detail du projet
                    </center>
                </v-card>
            </v-col>
        </v-row>
        <!-- la partie du commentaire du proprietaire  -->
        <v-row class="ma-1 pa-1" no-gutters>
            <v-col align-self="center">
                <v-card elevation="9">
                    <v-card-title>
                        <v-row no-gutters>
                            <v-col cols="10">Commentaire de l'agent</v-col>
                            <v-col><v-icon color="indigo-darken-4">mdi-chat</v-icon></v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-main>
                        <v-row class="ma-2  pa-2 rounded bg-surface-variant">
                            {{ commentaire }}
                        </v-row>
                    </v-card-main>
                </v-card>
            </v-col>
        </v-row>
        <br>
        <!-- les deu cases de pieces Justicatifs -->
        <v-row class="ma-1 pa-1" no-gutters>
            <v-col>
                <v-card class="rounded ma-1">
                    <v-card-title>JUSTIFICATIFS</v-card-title>
                    <v-card-main class="ma-5 ">
                        <v-row no-gutters class="bg-surface-variant ma-2 rounded">
                            <v-col align="center" cols="4"><v-icon size="40">mdi-file</v-icon></v-col>
                            <v-col>{{ Titre }}</v-col>
                        </v-row>
                    </v-card-main>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="rounded ma-1">
                    <v-card-title>Code Source</v-card-title>
                    <v-card-main>
                        <v-row no-gutters class="bg-surface-variant ma-2 rounded">
                            <v-col align="center" cols="4"><v-icon size="40">mdi-github</v-icon></v-col>
                            <v-col>Source Git-hub (code)</v-col>
                        </v-row>
                    </v-card-main>
                </v-card>
            </v-col>
        </v-row>

    </v-row>
    <v-row no-gutters v-if="$vuetify.display.lgAndUp">
        <v-container fluid class="ml-5 mr-5">
            <h1>DETAIL DU PROJET</h1>
            <v-sheet width="97%" height="50" class="ma-2 pa-2" rounded no-gutters>
                <v-row>
                    <v-col align="left" id="kinsh"><b>Responsable</b>:{{ responsable }}</v-col>
                    <v-col align="center" id="kinsh"><b>Date:</b>{{ date }}</v-col>
                    <v-col align="right" id="kinsh"><b>Nombre d'etoiles</b>:{{ NbEtoile }}</v-col>
                </v-row>
            </v-sheet>
            <v-row no-gutters>
                <v-col class="ma-1">
                    <v-card class="pa-2" elevation="9">
                        <h2>APERCU DU PROJET(Photo)</h2>
                        <v-img max-height="450px" :src="photo"></v-img>
                        <footer align="center">APERCU DU PROJET</footer>
                    </v-card>
                    <v-card class="ma-2 pa-2" elevation="9">
                        <h2>DESCRIPTION DU PROJET</h2>
                        <div>{{ messages }}</div>
                    </v-card>
                    <v-row>
                        <v-col><v-card class="ma-2 pa-2" elevation="9">
                                <h2>Justicatifs</h2>
                                <v-btn width="100%" color="indigo-darken-4" prepend-icon="mdi-file"><v-icon></v-icon>{{
                                    Titre }}</v-btn>
                            </v-card></v-col>
                        <v-col><v-card class="ma-2 pa-2" elevation="9">
                                <h2>Stockage</h2>
                                <v-btn width="100%" color="indigo-darken-4" prepend-icon="mdi-github"><v-icon>
                                    </v-icon>Code Source (Git-hub)</v-btn>
                            </v-card></v-col>
                    </v-row>

                </v-col>
                <v-col class="ma-1">
                    <v-card class="ma-1">
                        <h2 id="bukav">Materiel Utilisé</h2>
                        <b>Arduino uno </b> <br>
                        <b>LED (rouge, Verte)</b> <br>
                        <b>BreadBord</b> <br>
                        <b>Capteur de couleur</b> <br>
                        <b>Ecran LCD 1692</b> <br>
                    </v-card>
                    <v-card class="ma-1">
                        <h2 id="bukav">Resultats</h2>
                    </v-card>
                    <v-card class="ma-1">
                        <h2 id="bukav">Commentaires</h2>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-row>
<filterheader ref="detailleProjet"/>
</template>
<script setup>
import { ref } from 'vue'
import { useSnackbar } from '@/design/useSnackbar'
import filterheader from './extensions/filterheader.vue'

const { show } = useSnackbar()
const photo = ref('http://localhost/API_SPP/Src_Media/elie.jpg')
const messages = ref("Utilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser la communication  acanahss avec format nn capteur,terapiance de contenu, assurer à ecrans constantes des routeurs inconnues des avrdifs pour influencer sans Utilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser la communication  acanahss avec format nn capteur,terapiance de contenu, assurer à ecrans constantes des routeurs inconnues des avrdifs pour influencer sans ")
const Titre = ref('Rapport Final (PDF)')
const commentaire = ref("Ce projet consiste a receuillir des Données sur les statistiques client et leurs disponibilités d'emploi")
const responsable = ref('Elie Chigorogo')
const date = ref('15 Mars 2023')
const NbEtoile = ref('5(Excellent)')
const detailleProjet = ref(null)

function OpenDialogDet(){
    detailleProjet.value.openDialogDetProjet(messages)
    show('ouverture du detail du projet', "indigo-darken-4")
}

</script>