<template>
    <v-dialog class=" ma-4 overflow-y" v-if="$vuetify.display.mdAndDown" v-model="filtersEnt">
        <v-card color="indigo-darken-4">
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-school">education</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-hospital-box">Santé</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-laptop">Informatique</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-car">Automobile</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-briefcase">Finance</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-scale-balance">Droit</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-hammer">BTP</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-Palette">Art</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-sprout">Agriculture</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-airplane">Aviations</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-basketball">Sport</v-btn>
        </v-card>
    </v-dialog>
    <v-dialog class="auto" v-if="$vuetify.display.mdAndUp" v-model="ConfirmProject">
        <v-card class="pa-2 auto" color="indigo-darken-4">
            <v-row no-gutters justify="center">
                <h2>Voulez-Vous Ajouter un projet a votre profils</h2>
            </v-row>
            <v-row no-gutters justify="center">
                <v-btn class="ma-1 rounded3" @click="goinscription">Confirmer</v-btn>
                <v-btn class="ma-1 rounded3" @click="ConfirmProject = !ConfirmProject">Annuler</v-btn>
            </v-row>

        </v-card>
    </v-dialog>
    <v-dialog class="auto"  v-model="OpenPolitique">
        <v-card class="pa-2 auto">
            
            <v-row no-gutters justify="center"><h1>POLITIQUE DE CONFIDENTIALITE COMPLETE</h1></v-row>
            <v-row no-gutters>
                <h2>Introduction et Objectifs</h2>

            </v-row>
            <v-divider opacity="1"></v-divider>
            <v-row no-gutters>
                <h2>Art1: Responsable du traitement</h2>

            </v-row>
            <v-divider opacity="1"></v-divider>
            <v-row no-gutters>
                <h2>Art2: Base Legale</h2>

            </v-row>
            <v-row no-gutters justify="center" class="bg-surface-variant">
                <v-btn @click="OpenPolitique = !OpenPolitique" color="Yellow" variant="outlined" class="rounded3 ma-2"> Accepter</v-btn>
                <v-btn @click="OpenPolitique = !OpenPolitique" variant="outlined" class="rounded3 ma-2"> Refuser</v-btn>
            </v-row>
            <v-divider opacity="1"></v-divider>

        </v-card>
    </v-dialog>

</template>
<script setup>
import { ref } from 'vue'
import router from '@/router/index'

const filtersEnt = ref(null)
const ConfirmProject = ref(null)
const OpenPolitique = ref(null)

function goinscription() {
    return router.push('/NouveauProjet')
}
function openFilterone() {
    filtersEnt.value = true
}
function openDialConfirm() {
    ConfirmProject.value = true
}
function openPolitique() {
    OpenPolitique.value = true
}

defineExpose({
    openFilterone,
    openDialConfirm,
    openPolitique
})

</script>