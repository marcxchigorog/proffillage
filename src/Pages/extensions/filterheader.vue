<template>
    <!-- les filtres des proffession selon les membres  -->
    <v-dialog class=" ma-4 overflow-y" v-if="$vuetify.display.xs" v-model="filtersEnt">
        <v-card color="indigo-darken-4">
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-school">education</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-hospital-box">Santé</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3"
                prepend-icon="mdi-laptop">Informatique</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-car">Automobile</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-briefcase">Finance</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3"
                prepend-icon="mdi-scale-balance">Droit</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-hammer">BTP</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-Palette">Art</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-sprout">Agriculture</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-airplane">Aviations</v-btn>
            <v-btn variant="outlined" color="yellow" class="ma-1 rounded3" prepend-icon="mdi-basketball">Sport</v-btn>
        </v-card>
    </v-dialog>
    <!-- dialogur pour les formulaires d'un nouveau projet pour le client -->
    <v-dialog class="auto" v-model="ConfirmProject">
        <v-card class="pa-2 auto" color="bg-surface-variant">
            <v-row no-gutters justify="center" align="center">
                <h2 v-if="$vuetify.display.lgAndUp">Voulez-Vous ajouté un projet à votre profil</h2>
                <h3 v-if="$vuetify.display.xs">Voulez-Vous ajouté un projet à votre profil</h3>
            </v-row>
            <v-row no-gutters justify="center">
                <v-btn class="ma-1 rounded3" variant="outlined" color="indigo-darken-4" 
                v-if="theme === 'light'" @click="goinscription">Confirmer</v-btn>
                <v-btn class="ma-1 rounded3" variant="outlined" color="indigo-darken-4" 
                v-if="theme === 'light'" @click="ConfirmProject = !ConfirmProject">Annuler</v-btn>
                <v-btn class="ma-1 rounded3" variant="outlined" color="yellow" 
                v-if="theme === 'dark'" @click="goinscription">Confirmer</v-btn>
                <v-btn class="ma-1 rounded3" variant="outlined" color="yellow" 
                v-if="theme === 'dark'" @click="ConfirmProject = !ConfirmProject">Annuler</v-btn>
            </v-row>
        </v-card>
    </v-dialog>
    <!-- les dialogues de politiques des cobfidentialites lors de l'inscription  -->
    <v-dialog class="auto" v-model="OpenPolitique">
        <v-card class="pa-2 auto" v-if="$vuetify.display.lg">
            <v-row no-gutters justify="center">
                <h1>POLITIQUE DE CONFIDENTIALITE COMPLETE</h1>
            </v-row>
            <v-row no-gutters>
                <h2>Introduction et Objectifs</h2>
                Bonjour tres chèrs adherant nous une communauté basé dans le monde de technologique la création de se
                site a été fait avec le but de diminuer les chômages et les aspect d'engager les incompetents liés au travail à effectuer donc voilà provenant du nom du site de
                ce faits nommé Whatdu_youdu signifiant en français que sais-tu faire qui demande à l'utilisateur de fournir des informations professionnelles au site qui doivent etre
                verifiable Nous agisons comme une societé sous-traitante mais aulié qu'on soit votre intermediaire avec votre
                employeur, la communauté vous donne cette possibilité d'expression pour faire en sorte de preparer votre atmosphere de travail et aucun contrat n'impliquera la communauté et tout ça pour vous offrir un emploi digne des votre competences
            </v-row>
            <v-divider opacity="1"></v-divider>
            <v-row no-gutters>
                <h2>Art1: Responsable du traitement</h2>
                Tout contrat sera pris entre pris entre l'employeur et l'employé sauf si il y a demande d'impliquation
                direct
                par les administrateur de la communauté
            </v-row>
            <v-divider opacity="1"></v-divider>
            <v-row no-gutters>
                <h2>Art2: Base Legale</h2>
                Les clauses de contrant d'emploi entre les concernants (employeur et employé) sera selon leurs clauses
                mis au point ainsi que les transferts d'argents, ci precedemment expliqué
                cette communauté sera uniquement pont de liaison entre les chercheurs d'emploie et les chercheurs de
                competent selon leurs criteres de contrat

            </v-row>
            <v-row no-gutters justify="center" class="bg-surface-variant">
                <v-btn @click="OpenPolitique = !OpenPolitique" color="Yellow" variant="outlined" class="rounded3 ma-2">
                    Accepter</v-btn>
                <v-btn @click="OpenPolitique = !OpenPolitique" variant="outlined" class="rounded3 ma-2"> Refuser</v-btn>
            </v-row>
            <v-divider opacity="1"></v-divider>
        </v-card>
        <!-- l'interface de visualisation pour les smartphone normales  -->
        <v-card class="pa-1 auto" v-if="$vuetify.display.xs">
            <v-card-title>
                POLITIQUE DE CONFIDENTIALITE
            </v-card-title>
            <v-card-main class="pa-2">
                <v-row no-gutters>
                <h2 v-if="theme === 'light'" class="indigos width100 rounded pa-1">Introduction et Objectifs </h2>
                <h2 v-if="theme === 'dark'"  class="bg-surface-variant width100 rounded pa-1">Introduction et Objectifs</h2>
                Bonjour tres chèrs adherant nous une communauté basé dans le monde de technologique la création de se
                site a été fait avec le but de diminuer les chômages et
                les aspect d'engager les incompetents liés au travail à effectuer donc voilà provenant du nom du site de
                ce faits nommé Whatdu_youdu signifiant en français que sais-tu faire
                qui demande à l'utilisateur de fournir des informations professionnelles au site qui doivent etre
                verifiable
                Nous agisons comme une societé sous-traitante mais aulié qu'on soit votre intermediaire avec votre
                employeur, la communauté vous donne cette possibilité d'expression pour faire en sorte de
                preparé votre atmosphere de travail et aucun contrat n'impliquera la communauté et tout ça pour vous
                offrir un emploi digne des votre competences
            </v-row>
            <v-row no-gutters>
                <h2 v-if="theme === 'light'" class="indigos width100 rounded pa-1">Art1: Responsable du traitement </h2>
                <h2 v-if="theme === 'dark'"  class="bg-surface-variant width100 rounded pa-1">Art1: Responsable du traitement</h2>
                <h2></h2>
                Tout contrat sera pris entre pris entre l'employeur et l'employé sauf si il y a demande d'impliquation
                direct
                par les administrateur de la communauté
            </v-row>
            <v-row no-gutters>
                <h2 v-if="theme === 'light'" class="indigos width100 rounded pa-1">Art2: Base Legale <v-icon class="ml-10">mdi-scale-balance</v-icon></h2>
                <h2 v-if="theme === 'dark'"  class="bg-surface-variant width100 rounded pa-1">Art2: Base Legale <v-icon class="ml-13">mdi-scale-balance</v-icon></h2>
                Les clauses de contrant d'emploi entre les concernants (employeur et employé) sera selon leurs clauses
                mis au point ainsi que les transferts d'argents, ci precedemment expliqué
                cette communauté sera uniquement pont de liaison entre les chercheurs d'emploie et les chercheurs de
                competent selon leurs criteres de contrat

            </v-row>
            </v-card-main>
            <v-card-Actions>
                <v-row no-gutters justify="center" class="bg-surface-variant rounded">
                <v-btn v-if="theme === 'light'" @click=" validePolitique() " color="Yellow" variant="outlined" class="rounded3 ma-2">
                    Accepter</v-btn>
                <v-btn v-if="theme === 'dark'" @click="validePolitique()" color="indigo-darken-4" variant="outlined" class="rounded3 ma-2">
                    Accepter</v-btn>
                <v-btn @click="OpenPolitique = !OpenPolitique" variant="outlined" class="rounded3 ma-2"> Refuser</v-btn>
            </v-row>
            </v-card-Actions>
            
        </v-card>
    </v-dialog>


    <!-- le dialogue lors de l'apercu global sur le detail du projet  -->
    <v-dialog v-model="infodetailprojet">

        <v-card class="ma-2 pa-2" v-if="$vuetify.display.xs">
            <v-card-title>
                <center>
                    <v-icon color="indigo-darken-4" size="55">mdi-file</v-icon>
                    <h2>Detail du projet </h2>
                    <v-divider :thickness="4" opacity="5" color="indigo-darken-4" class="mb-1 nom_convers"></v-divider>
                </center>
            </v-card-title>
            <v-card-main>
                <v-row no-gutters class="ma-1 pa-3 rounded bg-surface-variant limite-height">
                    {{ infoProjetDetaille }}
                </v-row>
            </v-card-main>
            <v-card-actions>
                <v-btn @click="infodetailprojet = false" variant="outlined">
                    <v-icon size="30" color="red">mdi-cancel</v-icon> FERMER
                </v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import router from '@/router/index'

const filtersEnt = ref(null)
const ConfirmProject = ref(null)
const OpenPolitique = ref(null)
const infodetailprojet = ref(null)
const infoProjetDetaille = ref()
const accepted = ref (false)
const theme = ref('light')
const emit = defineEmits(['majValeur'])

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

const validePolitique = () => {
    accepted.value = true
    emit('majValeur',accepted.value)
    OpenPolitique.value = false
}
function openDialogDetProjet(item) {
    infodetailprojet.value = true
    infoProjetDetaille.value = item
    
}
let interval = null
onMounted(()=>{
    interval = setInterval (() => {
        theme.value = sessionStorage.getItem('theme')
    },1000)
})
onUnmounted (() =>{
    interval
})

defineExpose({
    openFilterone,
    openDialogDetProjet,
    openDialConfirm,
    openPolitique,
})


</script>