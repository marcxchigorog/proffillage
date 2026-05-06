<template>

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
                <v-card class="ma-1"><h2 id="bukav">Materiel Utilisé</h2>
                    <b>Arduino uno </b> <br>
                    <b>LED (rouge, Verte)</b> <br>
                    <b>BreadBord</b> <br>
                    <b>Capteur de couleur</b> <br>
                    <b>Ecran LCD 1692</b> <br>                    
                </v-card>
                <v-card class="ma-1"><h2 id="bukav">Resultats</h2></v-card>
                <v-card class="ma-1"><h2 id="bukav">Commentaires</h2></v-card>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup>
import { ref } from 'vue'

const photo = ref('http://localhost/API_SPP/Src_Media/elie.jpg')
const messages = ref("Utilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser ilisation des capteurs de couleur et d'un ecran pour annalyser la communication  acanahss avec format nn capteur,terapiance de contenu, assurer à ecrans constantes des routeurs inconnues des avrdifs pour influencer sans ")
const Titre = ref('Rapport Final (PDF)')
const responsable = ref('Elie Chigorogo')
const date = ref('15 Mars 2023')
const NbEtoile = ref('5(Excellent)')
</script>