<template>
    <!-- la partie de visualisation dans un smartphone -->
    <v-container v-if="$vuetify.display.xs" id="ofCause" class="pa-2">
        <v-row align="center">
            <h1 align="center" id="numberst">DashBoard Admin</h1>
            <v-row no-gutters width="90%" class="pa-1 mb-2">
                <carteAdmin />
            </v-row>
            <!-- le premier visualiseur de donnees  -->
            <v-col align="center" class="box-shode rounded ml-1">
                <v-card-title>Visualisation des Données</v-card-title>
                <v-card-main>
                    <apexchart :type="ChartOPtionnel.chart.type" :height="ChartOPtionnel.chart.height"
                        :options="ChartOPtionnel" :series="ChartOPtionnel.series" />
                </v-card-main>
            </v-col>

            <!-- Partie qui concerne la liste des inscriptions realises -->
            
                    <v-card elevation="9" width="100%" align="center" class="ml-3 mr-3 mt-2 mb-2 ">
                        <v-card-title>Inscription realisées</v-card-title>
                        <v-card-main>
                            <v-data-table density="compact" class="text-caption" id="min-heigth" :items="listClient"
                                :headers="Entete_Hed_sm" striped="even" variant="outlined">
                                <template #item.Actions="{ item }">
                                    <v-row>
                                        <v-btn size="30" variant="flat" class="mr-2" @click.stop="AllowedMember(item)"
                                            icon><v-icon size="30"
                                                color="yellow">mdi-check-decagram-outline</v-icon></v-btn>
                                        <v-btn size="30" variant="flat" class=" mr-2" @click="viewClientWait(item)"
                                            icon><v-icon size="30"
                                                color="indigo-darken-4">mdi-guy-fawkes-Mask</v-icon></v-btn>
                                        <v-btn size="30" variant="flat" @click="deleteClient(item)" icon><v-icon
                                                size="30" color="error">mdi-delete-sweep</v-icon></v-btn>
                                    </v-row>
                                </template>
                            </v-data-table>
                        </v-card-main>
                    </v-card>
             
                <v-card elevation="9" width="100%"  align="center" class="ml-3 mr-3 mt-2 mb-2 pa-1 ">
                    <v-card-title>Visualisation des status</v-card-title>
                    <v-card-main>
                        <apexchart type="bar" :options="ChartOptions" :series="ChartOptions.series" />
                    </v-card-main>
                </v-card>
            <!-- visualisation des donnees selon les jours de la semaines -->
                    <v-card elevation="9" width="100%" align="center" class="ml-3 mr-3 mt-2 mb-2 ">
                        <v-card-title>Inscription Acceptées</v-card-title>
                        <v-card-main>
                            <v-data-table class="ml-4 text-caption" :items="listAlow" :headers="Entete_Hed_sm"
                                striped="even">
                                <template #item.Actions="{ item }">
                                    <v-row>
                                        <v-btn size="30" variant="flat" class=" mr-2" @click.stop="viewClientAllow(item)"
                                            icon><v-icon size="30"
                                                color="indigo-darken-4">mdi-guy-fawkes-Mask</v-icon></v-btn>
                                        <v-btn size="30" variant="flat" @click="deleteClient(item)" icon><v-icon
                                                size="30" color="error">mdi-delete</v-icon></v-btn>
                                    </v-row>
                                </template>
                            </v-data-table>
                        </v-card-main>
                    </v-card>
                <v-card elevation="9" align="center" width="100%" class="ml-3 mr-3 mt-2 mb-2  ">
                    <v-card-title>Accées Rapide</v-card-title>
                    <v-card-main >
                        <v-col v-if="theme === 'light'">
                            <v-btn @click="inscription" color="indigo-darken-4" class="ma-2 rounded3" width="80%">Ajout d'un membre</v-btn><br>
                            <v-btn color="indigo-darken-4" class="ma-2 rounded3" width="80%">Modifier la P.CF</v-btn><br>
                            <v-btn  color="indigo-darken-4" class="ma-2 rounded3" width="80%">Lancer un avis public</v-btn>
                        </v-col>
                        <v-col v-if="theme === 'dark'">
                            <v-btn  @click="inscription" color="yellow" class="ma-2 rounded3" width="80%">Ajout d'un membre</v-btn><br>
                            <v-btn  color="yellow" class="ma-2 rounded3" width="80%">Modifier la P.CF</v-btn><br>
                            <v-btn  color="yellow" class="ma-2 rounded3" width="80%">Lancer un avis public</v-btn>
                        </v-col>
                        
                        
                    </v-card-main>
                </v-card>
            
                <v-card elevation="9" width="100%" class="ml-3 mr-3 mt-2 mb-2 ">
                    <v-card-title>Controle des justificatifs</v-card-title>
                    <v-card-main>
                        <v-data-table striped="even" />
                    </v-card-main>
                </v-card>
            
        </v-row>
    </v-container>


    <!-- la partie de visualisation du ecran superieur a 600px -->
    <v-row v-if="$vuetify.display.lgAndUp">
        <h1 align="center" id="numberst">Bienvenue dans le Tableau de Bord Admin</h1>
        <v-row no-gutters width="100%" class="pa-1 ma-2">
            <carteAdmin />
        </v-row>
        <v-row>
            <v-col align="center" class="box-shode rounded mr-1 ml-1" cols="5">
                <v-card elevation="9">
                    <v-card-title>Visualisation des Données</v-card-title>
                    <v-card-main>
                        <apexchart :type="ChartOPtionnel.chart.type" :height="ChartOPtionnel.chart.height"
                            :options="ChartOPtionnel" :series="ChartOPtionnel.series" />
                    </v-card-main>
                </v-card>
            </v-col>

            <!-- Partie qui concerne la liste des inscriptions realises -->
            <v-col align="center" class="box-shode rounded mr-1 ml-1">
                <v-card elevation="9">
                    <v-card-title>Inscription realisées</v-card-title>
                    <v-card-main>
                        <v-data-table :items="listClient" :headers="Entete_Hed" striped="even" variant="outlined">
                            <template #item.Actions="{ item }">
                                <v-row>
                                    <v-btn size="50" variant="flat" class="mr-2" @click.stop="AllowedMember(item)"
                                        icon><v-icon size="50"
                                            color="yellow">mdi-check-decagram-outline</v-icon></v-btn>
                                    <v-btn size="50" variant="flat" class=" mr-2" @click.stop="viewClientWait(item)"
                                        icon><v-icon size="40"
                                            color="indigo-darken-4">mdi-guy-fawkes-Mask</v-icon></v-btn>
                                    <v-btn size="50" variant="flat" @click="deleteClient(item)" icon><v-icon size="40"
                                            color="error">mdi-delete-sweep</v-icon></v-btn>
                                </v-row>
                            </template>
                        </v-data-table>
                    </v-card-main>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters class="mr-5 ml-5 mt-4">
            <v-col align="center" class="box-shode rounded mr-1 ml-1" cols="5">
                <v-card elevation="9">
                    <v-card-title>Visualisation des status</v-card-title>
                    <v-card-main>
                        <apexchart type="bar" :options="ChartOptions" :series="ChartOptions.series" />
                    </v-card-main>
                </v-card>
            </v-col>
            <!-- Cette Partie elle est celle qui concerne les inscription realisées mais Acceptées -->
            <v-col align="center" class="box-shode rounded box-shode mr-1 ml-1">
                <v-card elevation="9">
                    <v-card-title>Inscription Acceptées</v-card-title>
                    <v-card-main>
                        <v-data-table :items="listAlow" :headers="Entete_Hed" striped="even">
                            <template #item.Actions="{ item }">
                                <v-row>
                                    <v-btn size="50" variant="flat" class=" mr-2" @click.stop="viewClientAllow(item)"
                                        icon><v-icon size="40"
                                            color="indigo-darken-4">mdi-guy-fawkes-Mask</v-icon></v-btn>
                                    <v-btn size="50" variant="flat" @click="deleteClient(item)" icon><v-icon size="40"
                                            color="error">mdi-delete</v-icon></v-btn>
                                </v-row>
                            </template>
                        </v-data-table>
                    </v-card-main>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center" class="box-shode rounded mr-1 ml-1">
                <v-card elevation="9">
                    <v-card-title>Accées Rapide</v-card-title>
                    <v-card-main>
                        <v-btn @click="inscription" color="indigo-darken-4" class="ma-2 rounded3" width="70%">Ajouter un
                            membre</v-btn><br>
                        <v-btn color="indigo-darken-4" class="ma-2 rounded3" width="70%">Modifier la P.CF</v-btn><br>
                        <v-btn color="indigo-darken-4" class="ma-2 rounded3" width="70%">Lancer un avis public</v-btn>
                    </v-card-main>
                </v-card>
            </v-col>
            <v-col align="center" class="box-shode mr-1 ml-1">
                <v-card elevation="9">
                    <v-card-title>Controle des justificatifs</v-card-title>
                    <v-card-main>
                        <v-data-table striped="even" />
                    </v-card-main>
                </v-card>
            </v-col>
        </v-row>
    </v-row>

    <detail ref="DialogueDet"></detail>
</template>


<script setup>
import { ref, onMounted,onUnmounted, computed } from 'vue';
import axios from 'axios'
import router from '@/router/index'
import carteAdmin from './extensions/carteAdmin.vue';
import { useApexTheme } from '@/design/ApexChart';
import detail from './src/detail.vue';
const DialogueDet = ref (null)
const { apexTheme } = useApexTheme()
const theme = ref ('light')

const listClient = ref([])
const listAlow = ref([])

const ChartOptions = ref({
    ...apexTheme.value,
    series: [{
        name: "Paiements",
        data: [12, 43, 23, 10, 50, 23, 15.9],
    }],
    chart: {
        type: "bar",
        height: 350,
        toolbar: {
            show: true,
            export: {
                csv: { filename: 'radar_whatduYou_data_inscriptions' },
                svg: { filename: 'radar_whatduYou_data_inscriptions' },
                png: { filename: 'radar_whatduYou_data_inscriptions' },
            }
        },
        ...apexTheme.value.chart,
    },
    xaxis: {
        categories: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
    },
    colors: ["#1976D2"],//Vuetify blue
    dataLabels: {
        enabled: true
    },

})

const catInscritption = ref([
    "Bas-Uélé", "Équateur", "Haut-Katanga", "Haut-Lomami", "Haut-Uélé",
    "Ituri", "Kasaï", "Kasaï-Central", "Kasaï-Oriental", "Kinshasa",
    "Kongo-Central", "Kwango", "Kwilu", "Lomami", "Lualaba", "Mai-Ndombe", "Maniema", "Mongala", "Nord-Kivu", "Nord-Ubangi",
    "Sankuru", "Sud-Kivu", "Sud-Ubangi", "Tanganyika", "Tshopo", "Tshuapa"])

const dataInscription = ref([1, 3, 4, 0, 0, 5, 7, 1, 1, 1, 5, 0, 3, 5, 4, 3, 3, 4, 5, 2, 4, 3, 3, 7, 8, 8])

// ================= configuration des donnes du radar ================= //
// ================= configuration des donnes du radar ================= //
const ChartOPtionnel = computed(() => ({
    ...apexTheme.value,
    series: [{
        name: 'Series 1',
        data: dataInscription.value,
        ...apexTheme.value.chart,
    }],
    chart: {
        height: 380,
        type: 'radar',
        toolbar: {
            show: true,
            export: {
                csv: {
                    filename: 'radar_whatduYou_data_inscriptions'
                },
                svg: {
                    filename: 'radar_whatduYou_data_inscriptions'
                },
                png: {
                    filename: 'radar_whatduYou_data_inscriptions'
                },
            }
        }
    },
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        radar: {
            size: 140,
            polygons: {
                strokeColors: 'yellow',
                fill: {
                    colors: ['#1a237e', '', 'rgba(0, 0, 0, 0.322)']
                }
            }
        }
    },
    title: {
        text: 'Radar de visualisation des inscriptions par ville ',
    },
    markers: {
        size: 4,
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val
            }
        }
    },
    xaxis: {
        categories: catInscritption.value
    },
    yaxis: {
        labels: {
            formatter: function (val, i) {
                if (i % 2 === 0) {
                    return val
                } else {
                    return ''
                }
            }
        }
    }


}))

const Entete_Hed = ref([
    { title: "Membre", value: 'ID' },
    { title: "Nom", value: 'nom' },
    { title: "Prenom", value: 'prenom' },
    { title: "Genre", value: 'sexe' },
    { title: "Prof.", value: 'profession' },
    { title: "", value: 'Actions' },
])
const Entete_Hed_sm = ref([
    { title: "Nom", value: 'nom' },
    { title: "Prof.", value: 'profession' },
    { title: "", value: 'Actions' },
])

function inscription() {
    return router.push('/inscription')
}

async function AllowedMember(item) {
    try {
        const id = item.ID || null
        if (id) {
            await axios.post('http://localhost/API_SPP/Door/Root/ConfirmAllowed.php', { id }, { withCredentials: true })
        } else {
            // pas d'id : tenter suppression locale
            alert('Impossible de supprimer : identifiant introuvable')
        }
    }
    catch (error) {
        console.error('Erreur suppression', error)
        alert('Erreur lors de la suppression')
    }
}

async function viewClientAllow (item){
    const client_id = item.ID
    DialogueDet.value.opendialdet(client_id)
}
async function viewClientWait (item){
    const client_id = item.ID
    DialogueDet.value.opendialdetaille(client_id)
}

async function deleteClient(item) {
    // confirmation minimale
    console.log(item)
    try {
        // si l'item contient un id, appeler l'endpoint de suppression côté backend
        const id = item.ID || null
        if (id) {
            await axios.post('http://localhost/API_SPP/Door/Root/DeleteClient.php', { id }, { withCredentials: true })
            // rafraîchir les listes localement en filtrant
            alert('Suppression réussie')
        } else {
            // pas d'id : tenter suppression locale
            alert('Impossible de supprimer : identifiant introuvable')
        }
    } catch (e) {
        console.error('Erreur suppression', e)
        alert('Erreur lors de la suppression')
    }
}

let interval = (null)
onMounted(()=>{
    interval = setInterval (()=>{
        theme.value = sessionStorage.getItem('theme')
    },300)
})
onUnmounted(()=>{
    clearInterval(interval)
})

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost/API_SPP/Door/Root/Listeclient.php?type=listeAdmins");
        listClient.value = response.data;
    } catch (error) {
        console.error("Erreur de chargement de données pour les bureaux", error)
    }
})
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost/API_SPP/Door/Root/Listeclient.php?type=listAllow");
        listAlow.value = response.data;
    } catch (error) {
        console.error("Erreur de chargement de données pour les bureaux", error)
    }
})

// les functions qui concernen les detailles des visualisations

</script>