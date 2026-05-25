<template>
    <template v-if="$vuetify.display.lg">
        <v-row no-gutters justify="center" class="mb-3">
            <h1 class="google2 pa-3">FORMULAIRE D'ENREGISTREMENT DE NOUVEAU PROJET</h1>
        </v-row>
        <v-container fluid class=" rounded overflow-x1">

            <v-row no-gutters justify="center">
                <v-col>
                    <v-card class="ma-2 pa-2">
                        <h2>Responsable</h2>
                        <v-divider />
                        <v-text-field
                            hint="Ici apparaitra votre Nom, pour ajouter une personne cliquez sur l'icone plus"
                            variant="outlined">
                            <v-icon end v-if="theme === 'light'" v-ripple size="27" @click="AddMembreProjet()"
                                color="indigo-darken-4">mdi-plus</v-icon>
                            <v-icon end v-if="theme === 'dark'" v-ripple size="27" @click="AddMembreProjet()"
                                color="yellow">mdi-plus</v-icon>
                        </v-text-field>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="ma-2 pa-2">
                        <h2>Date de creation</h2>
                        <v-divider />
                        <v-text-field v-if="theme === 'light'" color="indigo-darken-4" type="date" variant="outlined" />
                        <v-text-field v-if="theme === 'dark'" color="yellow" type="date" variant="outlined" />
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="ma-2 pa-2">
                        <h2>Statut</h2>
                        <v-divider />
                        <v-select color="indigo-darken-4" v-if="theme === 'light'" :items="Items_status"
                            variant="outlined" />
                        <v-select color="yellow" v-if="theme === 'dark'" :items="Items_status" variant="outlined" />
                    </v-card>
                </v-col>
            </v-row>
            <v-sheet class="ma-2 pa-3 rounded" justify="center" elevation="8">
                <h2>Information de base</h2>
                <v-row no-gutters justify="center">
                    <v-col>
                        <v-text-field color="indigo-darken-4" v-if="theme === 'light'"
                            hint="Saisissez le nom de votre Projet" label="Nom du projet" variant="outlined"
                            class="ma-1" />
                        <v-text-field v-if="theme === 'dark'" color="yellow" hint="Saisissez le nom de votre Projet"
                            label="Nom du projet" variant="outlined" class="ma-1" />
                        <v-text-field color="indigo-darken-4" v-if="theme === 'light'"
                            hint="Saisissez le problematique que resout votre Projet " label="Promatique"
                            variant="outlined" class="ma-1" />
                        <v-text-field v-if="theme === 'dark'" color="yellow"
                            hint="Saisissez le problematique que resout votre Projet " label="Promatique"
                            variant="outlined" class="ma-1" /></v-col>
                    <v-col>
                        <v-select :items="itemes_categorie" v-if="theme === 'light'" color="indigo-darken-4"
                            label="Categorie" variant="outlined" class="ma-1" />
                        <v-select :items="itemes_categorie" color="yellow" v-if="theme === 'dark'" label="Categorie"
                            variant="outlined" class="ma-1" /></v-col>
                </v-row>
                <h2>Description du projet</h2>
                <center>
                    <textarea id="firedodge" rows="6" v-if="theme === 'light'" class="ma-2 ml-10 mr-5 pa-2"
                        variant="outlined"></textarea>
                    <textarea id="firedodges" rows="6" v-if="theme === 'dark'" class="ma-2 ml-10 mr-5 pa-2"
                        variant="outlined"></textarea>
                </center>

                <h2 align="center">Objectifs Clés </h2>
                <v-text-field label="Objectif numero 1" hint="Veuillez saisir l'objectif de votre Projet"
                    color="indigo-darken-4" v-if="theme === 'light'" heigth="80px" variant="outlined" />
                <v-text-field label="Objectif numero 1" hint="Veuillez saisir l'objectif de votre Projet" color="yellow"
                    v-if="theme === 'dark'" heigth="80px" variant="outlined" />
                <v-text-field label="Objectif numero 2" hint="Veuillez saisir l'objectif de votre Projet"
                    color="indigo-darken-4" v-if="theme === 'light'" heigth="80px" variant="outlined" />
                <v-text-field label="Objectif numero 2" hint="Veuillez saisir l'objectif de votre Projet" color="yellow"
                    v-if="theme === 'dark'" heigth="80px" variant="outlined" />
            </v-sheet>
            <!-- le deux partie du bas pour insert le rapport et les sources du code -->
            <v-sheet class="ma-2 pa-3 rounded" elevation="8">
                <h2 align="center">Justificatifs(Optionnel)</h2>
                <v-row no-gutters>
                    <v-col class="ma-2">
                        <v-file-input label="joindre un rapport(PDF)" variant="outlined" />
                    </v-col>
                    <v-col class="ma-2">
                        <v-file-input label="Ajouter des Liens(ex: Code Source)" variant="outlined" />
                    </v-col>
                </v-row>
            </v-sheet>
            <v-sheet class="ma-2 pa-3 rounded" elevation="8">
                <center>
                    <v-btn class="rounded3 ml-2 mr-3" @click="envoyerFormulaireProjet()" color="indigo-darken-4"
                        :loading="looding" v-if="theme === 'light'" height="80px" width="80%" density="100">
                        <h1>Enregistrer le projet </h1>
                    </v-btn>
                    <v-btn class="rounded3 ml-2 mr-3" @click="envoyerFormulaireProjet()" color="yellow"
                        :loading="looding" v-if="theme === 'dark'" height="80px" width="80%" density="100">
                        <h1>Enregistrer le projet </h1>
                    </v-btn>
                </center>
            </v-sheet>
        </v-container>
    </template>
    <template v-if="$vuetify.display.xs">
        <v-row no-gutters justify="center" class="mb-3">
            <center>
                <h1 >
                FORMULAIRE D'ENREGISTREMENT DE NOUVEAU PROJET
            </h1>
            </center>
        </v-row>
        <v-card class="ma-2 pa-2">
            <h2>Responsable</h2>
            <v-divider />
            <v-text-field hint="Ici apparaitra votre Nom, pour ajouter une personne cliquez sur l'icone plus"
                variant="outlined">
                <v-icon end v-if="theme === 'light'" v-ripple size="27" @click="AddMembreProjet()"
                    color="indigo-darken-4">mdi-plus</v-icon>
                <v-icon end v-if="theme === 'dark'" v-ripple size="27" @click="AddMembreProjet()"
                    color="yellow">mdi-plus</v-icon>
            </v-text-field>
        </v-card>
        <v-card class="ma-2 pa-2">
            <h2>Date de creation</h2>
            <v-divider />
            <v-text-field v-if="theme === 'light'" color="indigo-darken-4" type="date" variant="outlined" />
            <v-text-field v-if="theme === 'dark'" color="yellow" type="date" variant="outlined" />
        </v-card>
        <v-card class="ma-2 pa-2">
            <h2>Statut</h2>
            <v-divider />
            <v-select color="indigo-darken-4" v-if="theme === 'light'" :items="Items_status" variant="outlined" />
            <v-select color="yellow" v-if="theme === 'dark'" :items="Items_status" variant="outlined" />
        </v-card>

        <v-sheet class="ma-2 pa-3 rounded" justify="center" elevation="8">
            <h2>Information de base</h2>

            <v-text-field :rules="labeltext" color="indigo-darken-4" v-if="theme === 'light'" hint="Saisissez le nom de votre Projet"
                label="Nom du projet" variant="outlined" class="ma-1" />
            <v-text-field :rules="labeltext" v-if="theme === 'dark'" color="yellow" hint="Saisissez le nom de votre Projet"
                label="Nom du projet" variant="outlined" class="ma-1" />
            <v-text-field :rules="labeltext" color="indigo-darken-4" v-if="theme === 'light'"
                hint="Saisissez le problematique que resout votre Projet " label="Promatique" variant="outlined"
                class="ma-1" />
            <v-text-field :rules="labeltext" v-if="theme === 'dark'" color="yellow"
                hint="Saisissez le problematique que resout votre Projet " label="Promatique" variant="outlined"
                class="ma-1" />
            <v-select :items="itemes_categorie" v-if="theme === 'light'" color="indigo-darken-4" label="Categorie"
                variant="outlined" class="ma-1" />
            <v-select :items="itemes_categorie" color="yellow" v-if="theme === 'dark'" label="Categorie"
                variant="outlined" class="ma-1" />
            <h2>Description du projet</h2>
            <center>
                <v-textarea :rules="labeltext" id="firedodgexs" rows="6" v-if="theme === 'light'" class="ma-1 pa-1"
                    variant="outlined"></v-textarea>
                <v-textarea :rules="labeltext" id="firedodgesxs" rows="6" v-if="theme === 'dark'" class="ma-1 pa-1"
                    variant="outlined"></v-textarea>
            </center>

            <h2 align="center">Objectifs Clés </h2>
            <v-text-field :rules="labeltext" label="Objectif numero 1" hint="Veuillez saisir l'objectif de votre Projet"
                color="indigo-darken-4" v-if="theme === 'light'" heigth="80px" variant="outlined" />
            <v-text-field :rules="labeltext" label="Objectif numero 1" hint="Veuillez saisir l'objectif de votre Projet" color="yellow"
                v-if="theme === 'dark'" heigth="80px" variant="outlined" />
            <v-text-field :rules="labeltext" label="Objectif numero 2" hint="Veuillez saisir l'objectif de votre Projet"
                color="indigo-darken-4" v-if="theme === 'light'" heigth="80px" variant="outlined" />
            <v-text-field :rules="labeltext" label="Objectif numero 2" hint="Veuillez saisir l'objectif de votre Projet" color="yellow"
                v-if="theme === 'dark'" heigth="80px" variant="outlined" />
        </v-sheet>
        <!-- le deux partie du bas pour insert le rapport et les sources du code -->
        <v-sheet class="ma-2 pa-3 rounded" elevation="8">
            <h2 align="center">Justificatifs(Optionnel)</h2>

            <v-file-input label="joindre un rapport(PDF)" variant="outlined" />
            <v-file-input label="Ajouter des Liens(ex: Code Source)" variant="outlined" />

        </v-sheet>
        <v-sheet class="ma-2 pa-3 rounded" elevation="8">
            <center>
                <v-btn class="rounded3 ml-2 mr-3" @click="envoyerFormulaireProjet()" color="indigo-darken-4"
                    :loading="loading" v-if="theme === 'light'" width="80%">Enregistrer le projet
                </v-btn>
                <v-btn class="rounded3 ml-2 mr-3" @click="envoyerFormulaireProjet()" color="yellow" :loading="loading"
                    v-if="theme === 'dark'" width="80%">Enregistrer le projet
                </v-btn>
            </center>
        </v-sheet>
    </template>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const Items_status = (['En cours', 'Finie'])
const itemes_categorie = ref(['Commercial','Informatique','Industriel','Scientifique','Social'])
import { useSnackbar } from '@/design/useSnackbar';
const { show } = useSnackbar()
const theme = ref('light')
const loading = ref(false)
////////////////////////////////
//// Function de la page ///////////////////

function AddMembreProjet() {
    show("Augmentation d'un membre au projet", "indigo-darken-4")
}
function FutureTheme() {
    theme.value = sessionStorage.getItem('theme')
}

const labeltext = [
    (v) => !!v || "le champs est requis",
    (v) => (v && /^[A-Za-z\s]+$/.test(v)) || "seules les lettres et les espaces sont autorisées !",
    (v) => (v && !/^\s/.test(v)) || "la valeur de ce champs ne peut commencé par un espaces !",
]

async function envoyerFormulaireProjet() {
   loading.value = true
    try {
        show("Envoie du formulaire en cours", "yellow")
    }
    finally {
        loading.value = false
    }
}

// la function principale qui fait monte le valeur apres chaque une seconde 
let interval = (null)
onMounted(() => {
    interval = setInterval(() => {
        FutureTheme()
    },300)
})
onUnmounted(() => {
    clearInterval(interval)
})

</script>