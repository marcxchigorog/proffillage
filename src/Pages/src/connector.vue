<template>
    <v-container>
        <div class="mt-40">
            <v-row class="pa-2 ma-3 mihuhi" justify="center">
                <h1>page de connexion</h1>
                CM
            </v-row>

            <v-card density elevation="9">
                <v-row class="pa-2 ma-3" justify="center">
                    <v-text-field label="identifiant ou numero" v-model="FormData.identifiant"
                        placeholder="Saisissez votre mail ou numero" variant="outlined" required />
                </v-row>
                <v-row class="pa-2 ma-3" justify="center"><v-text-field label="Mot de passe"
                        placeholder="Saisissez votre mot de passe" v-model="FormData.mot_de_passe"
                        variant="outlined" required /></v-row>
                <v-row class="pa-2 ma-3" justify="center">
                    <v-btn width="100%" :loading="loading" class="ma-1 bg-surface-variant rounded3"
                        @click="VerifierID">Se
                        connecter</v-btn>
                    <v-divider class="mt-3" />
                    <v-alert v-if="message" icon-size="30" :icon="iconsmsg" :type="statusmsg" variant="tonal" closable>
                        {{ message }}
                    </v-alert>
                </v-row>
            </v-card>
        </div>
    </v-container>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router/index';

const FormData = ref({
    identifiant: '',
    mot_de_passe: '',
})
const message = ref()
const statusmsg = ref()
const iconsmsg = ref()
const membre = ref()
const loading = ref(false)
async function VerifierID() {
    //l'envoie de donnes vers les backend
    try {
        loading.value = true
        const response = await axios.post('http://localhost/API_SPP/Door/connecteur.php', FormData.value)
        message.value = response.data.message
        statusmsg.value = response.data.status
        iconsmsg.value = response.data.iconmdi
        membre.value = response.data.Membre

        console.log(membre)
        if(membre){
            sessionStorage.setItem('Membre', JSON.stringify(response.data.Membre))
            router.push('/Acceuil')
        }
    }
    catch {
        console.log("Erreur survenu lors de l'envoi de donnees vers le backend cote cote client")
    }
    finally {
        loading.value = false
    }
}

</script>