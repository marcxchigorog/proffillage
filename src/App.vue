<template>
   <v-layout>
      <v-app-bar color="yellow" class="box-shode-y"  v-if="showAppBar"  max-width="100%">
         <v-app-bar-nav-icon color="black" class="ma-2" variant="text" @click.stop="drawer = !drawer" />
         <v-tool-bar>
            <h2 class=" ml-2 mr-6" color="indigo-darken-4">Whatdu_you</h2>
         </v-tool-bar>
         <!-- le bouton de zoom et aussi de tois points sur un laptop -->
         <template v-if="$vuetify.display.mdAndUp">
            <div class="align-right">
               <v-btn icon="mdi-magnify" variant="text"></v-btn>
               <v-btn icon="icon mdi-dots-vertical" variant="text"></v-btn>
            </div>
         </template>
         <div v-if = "$vuetify.display.xs">
            <v-btn icon="mdi-filter" @click="openHeadfilter" variant="text"></v-btn>
         </div>
         <!-- le bouton de theme est profil sur un laptop -->
         <v-row justify="center" v-if="$vuetify.display.mdAndUp">
            <!-- le bouton de profil -->
            <v-btn size="xxx-large" class="pa-3 mr-5" to="/profils" color="indigo-darken-4" icon variant="outlined">
               <v-icon size="x-large">mdi-account-outline</v-icon>
            </v-btn>
            <!-- le bouton pour le theme du site -->
            <v-btn size="60" :icon="isDarkMode ? 'mdi-weather-night' : 'mdi-weather-sunny '"
               :color="isDarkMode ? 'black' : 'indigo-darken-4'" @click="toogleTheme">
               <v-icon :icon="isDarkMode ? 'mdi-weather-night' : 'mdi-weather-sunny '" size="50" center />
            </v-btn>
         </v-row>

         <!-- le bouton de theme est profil sur le smarthphone -->
         <v-row justify="center" v-if="$vuetify.display.xs">
            <!-- le bouton de profil -->
            <v-btn size="xx-large" class="pa-2 mr-1" to="/profils" color="indigo-darken-4" icon variant="outlined">
               <v-icon>mdi-account-outline</v-icon>
            </v-btn>
            <!-- le bouton pour le theme du site -->
            <v-btn size="xx-large" class="pa-2" @click="toogleTheme" :color="isDarkMode ? 'black' : 'indigo-darken-4'"
               icon variant="outlined">
               <v-icon size="large" :color="isDarkMode ? 'black' : 'indigo-darken-4'"
                  :icon="isDarkMode ? 'mdi-weather-night' : 'mdi-weather-sunny '" />
            </v-btn>

         </v-row>
      </v-app-bar>

      <v-navigation-drawer color="indigo-darken-4" v-model="drawer"
         :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
         <div v-if="!$vuetify.display.mobile">
            <v-row no-gutters>
               <v-col class=" ma-2">
                  <v-sheet class="ma-3"> elie chigorogo</v-sheet>
               </v-col>
               <v-col class=" ma-1">
                  <v-chip class=" ma-1"> elie chigorogo</v-chip>
                  <v-chip class=" ma-1"> num user</v-chip>
               </v-col>
            </v-row>
            <v-divider color="white" :opacity="1" width="95%" class="ml-2" />
            <v-divider color="white" :opacity="1" width="95%" class="ml-2" />
            <v-divider color="white" width="95%" class="ml-2" />

         </div>
         <v-list-item>
            <center><v-btn id="router" to="/Acceuil" width="100%"> <v-icon size="x-large">mdi-home</v-icon> Acceuil
               </v-btn>
            </center>
         </v-list-item>
         <v-list-item>
            <center><v-btn id="router" to="/AdminAccess" width="100%"> <v-icon size="x-large">mdi-unreal</v-icon> Admin
               </v-btn>
            </center>
         </v-list-item>
         <v-list-item>
            <center><v-btn id="router" to="/Discussion" width="100%"> <v-icon size="x-large">mdi-message</v-icon>
                  Message</v-btn></center>
         </v-list-item>
         <v-list-item>
            <center><v-btn id="router" to="/Projet" width="100%"> <v-icon size="x-large">mdi-note</v-icon>
                  Projet</v-btn>
            </center>
         </v-list-item>
         <v-list-item>
            <center><v-btn id="router" to="/inscription" width="100%"> <v-icon size="x-large"></v-icon>
                  inscription</v-btn>
            </center>
         </v-list-item>
         <v-list-item>
            <center><v-btn id="router" to="/notifs" width="100%"> <v-icon size="x-large">mdi-bell-badge</v-icon>
                  notification</v-btn>
            </center>
         </v-list-item>
         <v-list-item>
            <center><v-btn id="router" to="/connexion" width="100%"> <v-icon size="x-large">mdi-bell-badge</v-icon>
                  Connexion</v-btn>
            </center>
         </v-list-item>
         <v-list-item>
         </v-list-item>
         <v-list-item>
         </v-list-item>

         <v-divider color="white" :opacity="1" width="95%" class="ml-2" />
         <v-divider color="white" :opacity="1" width="95%" class="ml-2" />
         <v-divider color="white" width="95%" class="ml-2" />
         <v-list-item>
            <center><v-btn id="router" to="/inscription" width="100%"> <v-icon size="x-large"></v-icon>
                  deconexion</v-btn>
            </center>
         </v-list-item>
      </v-navigation-drawer>
      <v-main>
         <v-sheet color="indigo-darken-4" class="mb-2" height="300px">
            <router-view />
               <v-snackbar v-model="snackbar" :color="color" timeout="2550">{{ message }}</v-snackbar>
         </v-sheet> 
      </v-main>
   </v-layout>
   <filterhead ref='headfilter' />
</template>
<script setup>
import filterhead from '@/Pages/extensions/filterheader.vue'
import { ref, onMounted,computed} from 'vue'
import { useTheme } from 'vuetify'
import { useRoute } from 'vue-router'
import { useSnackbar } from '@/design/useSnackbar'
const {snackbar,message,color } = useSnackbar()


// pour le changement de theme pour tous les composants
const theme = useTheme()
const isDarkMode = ref(false)

function toogleTheme() {
   isDarkMode.value = !isDarkMode.value
   theme.global.name.value = isDarkMode.value ? 'dark' : 'light'
   //Sauvergarder les preferences du theme dans le sessionStorage 
   sessionStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

//Cherger le theme sauvergarder ou utiliser la preferences du systeme
onMounted(() => {
   const savedTheme = sessionStorage.getItem('theme')
   const systemPreferDark = window.matchMedia('(prefers-color-scheme):dark').matches

   if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark'
   }
   else {
      isDarkMode.value = systemPreferDark
   }
   theme.global.name.value = isDarkMode.value ? 'dark' : 'light'
})

const route = useRoute()

const showAppBar = (computed(()=>!route.meta.hideAppBar))

const drawer = ref(false)
const headfilter = ref(null)


function openHeadfilter() {
   headfilter.value.openFilterone()
}

</script>
<style scoped></style>