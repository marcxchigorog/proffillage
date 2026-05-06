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
    <v-sheet color="indigo-darken-4" height="300px" v-if="$vuetify.display.mdAndDown">
        <v-sheet class="mt-2" width="100%" height="100%">
            <v-row no-gutters class="ma-2">
                <v-text-field label="Recherche" variant="outlined" append-icon="mdi-magnify" />
            </v-row>
            <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
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
            <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
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
            <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
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
            <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
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
            <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
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
            <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
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
            <v-card elevation="8" class="ma-2 pa-1" variant="outlined">
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
        </v-sheet>
    </v-sheet>
    <v-app-bar v-if="$vuetify.display.mdAndDown" height="80" location="bottom">
        <v-row no-gutters justify="center">
            <v-btn height="100%" color="indigo-darken-4" variant="tonal" class="pa-1 ">
                <v-col align="center">
                    <v-row no-gutters justify="center">
                        <v-icon size="30">mdi-Bell-badge</v-icon></v-row>
                    <v-row no-gutters>Toutes</v-row>
                </v-col></v-btn>
            <v-btn height="100%" color="indigo-darken-4" variant="tonal" class="pa-1 ma-1">
                <v-col align="center">
                    <v-row no-gutters justify="center"><v-icon size="30">mdi-format-float-none</v-icon></v-row>
                    <v-row no-gutters>Non lues</v-row>
                </v-col></v-btn>
            <v-btn height="100%" to="/Discussion" color="indigo-darken-4" variant="tonal" class="pa-1 ">
                <v-col align="center">
                    <v-row no-gutters justify="center"><v-icon size="30">mdi-chat</v-icon></v-row>
                    <v-row no-gutters>Chat</v-row>
                </v-col></v-btn>
                <v-btn height="100%" color="indigo-darken-4" variant="tonal" class="pa-1 ma-1 ">
                <v-col align="center">
                    <v-row no-gutters justify="center"><v-icon size="30">mdi-download</v-icon></v-row>
                    <v-row no-gutters></v-row>
                </v-col></v-btn>
            
        </v-row>
    </v-app-bar>
</template>
<script setup>
import { ref } from 'vue'

const notication = ref("Bonjour,Elie chigorogo l'un de ingenieur en software viens d'ajouter une nouvelle proffession a ses capacites")
</script>