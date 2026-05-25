<template width="100%">
    <!-- visualisaions en mode laptop ou i pad -->
    <v-row justify="center" v-if="$vuetify.display.lgAndUp">
        <v-card class="ma-2 pa-3 cartAdmin rounded box-shodes" v-ripple>
            <div align="center">Membre Total inscrit </div>
            <div align="center " class="numberCart">{{ Total.Inscription }}</div>
            <div align="center"> <v-icon size="30" color="indigo-darken-4">mdi-Account-circle-outline</v-icon></div>
        </v-card>
        <v-card class="ma-2 pa-3 cartAdmin rounded box-shodes" v-ripple>
            <div align="center">Membre Total validé </div>
            <div align="center " class="numberCart">{{ Total.valides }}</div>
            <div align="center"> <v-icon size="30" color="indigo-darken-4">mdi-check-decagram</v-icon></div>
        </v-card>
        <v-card class="ma-2 pa-3 cartAdmin rounded box-shodes" v-ripple>
            <div align="center">Membre Total des Administrateur </div>
            <div align="center " class=" numberCartas">{{ Total.Admins }}</div>
            <div align="center"> <v-icon size="30" color="green-darken-4">mdi-account-tie</v-icon></div>
        </v-card>
        <v-card class="ma-2 pa-3 cartAdmin rounded box-shodes" v-ripple>
            <div align="center">Membre Total non-validé </div>
            <div align="center " class="numberCart">{{ Total.NValides }}</div>
            <div align="center"> <v-icon size="30" color="red">mdi-alert-outline</v-icon></div>
        </v-card>
        <v-card class="ma-2 pa-3 cartAdmin rounded box-shodes" v-ripple>
            <div align="center">Membre Total Non-employé </div>
            <div align="center " class="numberCart">{{ Total.N_employe }}</div>
            <div align="center"> <v-icon size="30" color="red">mdi-cancel</v-icon></div>
        </v-card>
    </v-row>
    <!-- visualisation en smartphone -->
    <v-row v-if="$vuetify.display.xs" no-gutters>
        <!-- la premiere carte qui affiche le valeur dans smartphone -->
        <v-card class="ma-2 pa-2 cartAdmins rounded  box-shodes " width="98%" v-ripple>
            <v-row no-gutters>
                <v-col>
                    <div align="center"> Membre Total inscrit </div>
                    <div align="center " class="numberCarts">{{ Total.Inscription }}</div>
                    <div align="center"> <v-icon size="20" color="indigo-darken-4">mdi-Account-circle-outline</v-icon>
                    </div>
                </v-col>
                <v-divider opacity="5" color="yellow" vertical></v-divider>
                <v-col>
                    <div align="center">Membre Total validé </div>
                    <div align="center " class="numberCarts">{{ Total.valides }}</div>
                    <div align="center"> <v-icon size="20" color="indigo-darken-4">mdi-check-decagram</v-icon>
                    </div>
                </v-col>
            </v-row>
        </v-card>
            <v-card class="ma-2 pa-1 cartAdmins rounded box-shodes justify-center" width="98%" v-ripple>
                <div> Total Administrateur </div>
                <div class=" numberCarts">{{ Total.Admins }}</div>
                <div> <v-icon size="20" color="green-darken-4">mdi-account-tie</v-icon></div>
            </v-card>
        <v-card class="ma-2 pa-2 cartAdmins rounded  box-shodes" width="98%" v-ripple>
            <v-row no-gutters>
                <v-col>
                    <div align="center"> Membre Non-validé </div>
                    <div align="center " class="numberCarts">{{ Total.NValides }}</div>
                    <div align="center"> <v-icon size="20" color="red">mdi-Alert</v-icon>
                    </div>
                </v-col>
                <v-divider opacity="5" color="yellow" vertical></v-divider>
                <v-col>
                    <div align="center">Membre Non-employé </div>
                    <div align="center " class="numberCarts">{{ Total.N_employe }}</div>
                    <div align="center"> <v-icon size="20" color="red">mdi-cancel</v-icon>
                    </div>
                </v-col>
            </v-row>

        </v-card>
    </v-row>

</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import axios from 'axios';
const numero = ref(125)
const Total = ref({
    Inscription: 0,
    valides: 0,
    Admins: 0,
    NValides: 0,
    N_employe: 0,
})
const Admins = ref(3)

////onmouted les fichiers du backend
let interval = null 
onMounted(() => {
    interval = setInterval(async ()=>{
        const personne = await axios.get('http://localhost/API_SPP/Door/Root/countID.php?type=Personnes');
    Total.value.Inscription = personne.data.Nbre

    const Admins = await axios.get('http://localhost/API_SPP/Door/Root/countID.php?type=Administrateur');
    Total.value.Admins = Admins.data.Nbre

    const Valides = await axios.get('http://localhost/API_SPP/Door/Root/countID.php?type=Valides');
    Total.value.valides = Valides.data.Nbre

    const NValides = await axios.get('http://localhost/API_SPP/Door/Root/countID.php?type=Non_Valides');
    Total.value.NValides = NValides.data.Nbre

    const N_employe = await axios.get('http://localhost/API_SPP/Door/Root/countID.php?type=Non_employe');
    Total.value.N_employe = N_employe.data.Nbre
    },1000)
    
})
onUnmounted(()=>{
    clearInterval(interval)
})

</script>