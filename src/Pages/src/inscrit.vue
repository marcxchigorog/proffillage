<template>
    <!-- la partie pour le modele du site en desktop ou ecran -->
    <v-sheet v-if="$vuetify.display.mdAndUp" color="indigo-darken-4" height="300px">
        <v-row justify="center" class="mb-5">
            <h1 class='fireboys'>Rejoignez la Communaute Whatdu_you</h1>
        </v-row>
        <v-row justify="center">
            <v-card elevation="9" width="1650px">
                <v-row no-gutters justify="space-around">
                    <v-sheet class="ma-1" color="indigo-darken-4" width="100%">
                        <h2 id="form">Formulaire d'inscription</h2>
                    </v-sheet>
                </v-row>
                <v-card class="overflow-y" height="570px">
                    <v-row no-gutters justify="center">
                        <v-col class="ma-5">
                            <h2 id="form1">Information de base:</h2>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="FormData.client.nom" clearable required
                                        hint="Saisissez votre nom" label="Nom" :rules="labeltext" variant="outlined" />
                                    <v-text-field v-model="FormData.client.postnom" label="Postnom" clearable
                                        :rules="labeltext" variant="outlined" />
                                    <v-text-field v-model="FormData.client.prenom" :rules="labeltext" clearable
                                        label="Prenom" variant="outlined" />
                                    <v-select :items="itemes" v-model="FormData.client.sexe" type="date" class="mr-1"
                                        label="sexe" variant="outlined" />

                                    <v-text-field type="date" v-model="FormData.Adresse.birth" clearable
                                        label="Date Naissance" variant="outlined" />
                                </v-col>
                                <v-col>
                                    <v-text-field v-model="FormData.Adresse.Province" clearable label="Province"
                                        :rules="labeltext" variant="outlined" />
                                    <v-text-field v-model="FormData.client.mail" clearable :rules="emailrules"
                                        label="Addresse mail" variant="outlined" />
                                    <v-text-field v-model="FormData.client.phone" clearable label="Numero de telephone"
                                        variant="outlined" />
                                    <v-text-field label="Ville" v-model="FormData.Adresse.Ville" clearable
                                        :rules="labeltext" variant="outlined" />
                                    <v-text-field variant="outlined" label="Mot de passe de connexion" clearable
                                        :rules="passwRules" v-model="FormData.client.password" />
                                </v-col>
                            </v-row>
                            <h2 id="form1">Détails professionnels:</h2>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="FormData.Profession.name" label="Proffession"
                                        :rules="labeltext" variant="outlined" />
                                    <v-text-field v-model="FormData.Profession.experts" label="Niveau Experience"
                                        variant="outlined" />
                                </v-col>
                                <v-col><v-text-field label="" variant="outlined" />
                                    <v-text-field v-model="FormData.Profession.year_ins" label="Annee"
                                        hint="Veuillez saisir l'annee d'insertion dans cette profession"
                                        variant="outlined" /></v-col>
                            </v-row>
                        </v-col>
                        <v-col class="ma-5">
                            <h2 id="form1"> Justicatifs (Optionnel):</h2>
                            <v-row no-gutters justify="center">
                                <v-file-input label="Diplomes" variant="outlined" prepend-icon="mdi-note-outline" />
                            </v-row>
                            <v-row no-gutters justify="center">
                                <v-file-input label="Projets Réalisés" variant="outlined"
                                    prepend-icon="mdi-folder-open-outline" />
                            </v-row>
                            <h2 id="form1">consentement:</h2>
                            <v-row no-gutters>
                                <v-col align="center" class="pt-3">
                                    <v-btn @click="OpenPolitiqueConf" elevation="9">politique de
                                        confidentialite</v-btn></v-col>
                                <v-col>
                                    <v-checkbox id="checkbox"
                                        label="Case a cocher : j'acceptes les conditions génerales et la politique de confidentialite" />
                                </v-col>
                            </v-row>
                            <h2 id="form1">Validation:</h2>
                            <v-row no-gutters justify="center">
                                <v-btn @click="SubmitFormuler" :loading="loading" class="abc rounded3 pa-3"
                                    color="indigo-darken-4">S'inscrire Maintenant</v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>

            </v-card>
        </v-row>

    </v-sheet>
    <!-- la partie du model du site pour android  -->
    <v-div v-if="$vuetify.display.xs">
        <v-row no-gutters justify="center" class="mb-5">
            <h1 class='fireboy'>INSCRIPTION</h1>
        </v-row>
        <v-container>
            <v-card class="pa-2 overflow-y" elevation="8">
                <h2 id="form1">Informations personnels:</h2>
                <v-row no-gutters>
                    <v-text-field v-model="FormData.client.nom" :rules="labeltext" class="mr-1" label="Nom" variant="outlined" />
                    <v-text-field v-model="FormData.client.postnom" :rules="labeltext" label="Postnom" variant="outlined" />
                </v-row>
                <v-row no-gutters>
                    <v-text-field v-model="FormData.client.prenom" :rules="labeltext" class="mr-1" label="prenom" variant="outlined" />
                    <v-text-field v-model="FormData.client.password" class="mr-1" :rules="passwRules"
                            label="Password" variant="outlined" />
                </v-row>
                <v-row no-gutters>
                    <v-col><v-text-field v-model="FormData.Adresse.birth" type="date" class="mr-1"
                            label="date de naissance" variant="outlined" />
                    </v-col>
                    <v-col><v-select :items="itemes" v-model="FormData.client.sexe"   class="mr-1"
                            label="sexe" variant="outlined" />
                    </v-col>
                </v-row>
                 <v-row no-gutters>
                    <v-text-field v-model="FormData.Adresse.Province" :rules="labeltext" class="mr-1" label="Province"
                        variant="outlined" />
                    <v-text-field v-model="FormData.Adresse.Ville" :rules="labeltext" label="Ville" variant="outlined" />
                </v-row>
                
                <h2 id="form1">Détails professionnels:</h2>
                <v-row no-gutters>
                    <v-text-field v-model="FormData.client.mail" :rules="emailrules" class="mr-1" label="Adresse mail" variant="outlined" />
                    <v-text-field v-model="FormData.client.phone"  label="Telephone" variant="outlined" />
                </v-row>
                <v-row no-gutters>
                    <v-col><v-text-field v-model="FormData.Profession.year_ins" class="mr-1"
                            label="Anne insertion" variant="outlined" />
                    </v-col>
                    <v-col>
                    <v-text-field v-model="FormData.Profession.name" :rules="labeltext" label="profession" variant="outlined" />
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-text-field class="mr-1" label="Niveau Experience" variant="outlined" />
                    <v-text-field label="Poste/Titre" variant="outlined" />
                </v-row>
                <h2 id="form1"> Justicatifs (Optionnel):</h2>
                <v-file-input label="Diplomes" variant="outlined" prepend-icon="mdi-note-outline" />
                <v-file-input label="Projets Réalisés" variant="outlined" prepend-icon="mdi-folder-open-outline" />
                <h2 id="form1">consentement:</h2>
                <v-btn class="rounded3 ma-1 pa-2 " @click="OpenPolitiqueConf" color="indigo-darken-4">
                    <v-icon color="yellow" class="ml-2 mr-3" size="20">mdi-eye</v-icon>Politique de confidentialite</v-btn>
                <v-checkbox id="checkbox" v-model="case_confident" label="Case a cocher : j'acceptes les conditions génerales et la politique de
                            confidentialite" />
                <h2 id="form1">Validation:</h2>
                <v-btn v-if="case_confident" class="abc rounded3 pa-3" :loading="loading" @click="SubmitFormuler" color="indigo-darken-4">S'inscrire
                    Maintenant</v-btn>

            </v-card>
        </v-container>
    </v-div>
    <Dialogue ref="openPol" @majValeur="validePolitique" />
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Dialogue from '@/Pages/extensions/filterheader.vue'

const openPol = ref(false)
const loading = ref(false)
const case_confident = ref (false)

const itemes = (['Masculin', 'Feminin'])
const FormData = ref({
    client: {
        nom: '',
        postnom: '',
        prenom: '',
        phone: '',
        mail: '',
        sexe: '',
        password: '',

    },
    Adresse: {
        Province: '',
        Ville: '',
        birth: '',
    },
    Profession: {
        name: '',
        year_ins: '',
        experts: '',
    }
})

//les regles des v-text-field pour n'est pasn'importe quoi
const passwRules = [
    (v) => !!v || 'Mot de passe requis',
    (v) => (v && v.length >= 9) || 'Il doit avoir au minimum 9 caracteres',
    (v) => (v && /[A-Z]/.test(v)) || 'il doit contenir une majuscule',
    (v) => (v && /[a-z]/.test(v)) || 'il doit contenir une minuscule',
    (v) => (v && /[0-9]/.test(v)) || 'il doit contenir un chiffre',
    (v) => (v && /[!@#$%^&*.]/.test(v)) || 'il doit contenir un caractère spécial',

]

const labeltext = [
    (v) => !!v || "le champs est requis",
    (v) => (v && /^[A-Za-z\s]+$/.test(v)) || "seules les lettres et les espaces sont autorisées !",
    (v) => (v && !/^\s/.test(v)) || "la valeur de ce champs ne peut commencé par un espaces !",
]

const emailrules = [
    (v) => !!v || "L'adresse mail requis",
    (v) => (v && /.+@.+\..+/.test(v)) || "Cette adresse mail doit etre valide.",
    (v) => (v && !/^\s/.test(v)) || "la valeur de ce champs ne peut commencé par un espaces !"

]
function validePolitique (value){
    case_confident.value = value

}
async function SubmitFormuler() {
    loading.value = true
    try {
        const response = await axios.post("http://localhost/API_SPP/Door/Inscription.php", FormData.value,
            { headers: { "Content-Type": "application/json" } }
        )
        if (response.data.success === true) {

        }
    }
    catch (error) {
        console.error("Erreur Axios :", error.response ? error.response.data : error)
        alert("Erreur lors de l'envoi :" + (error.response?.data?.message || error.message))
    }
    finally {
        loading.value = false
    }
}

function OpenPolitiqueConf() {
    openPol.value.openPolitique()
}
</script>