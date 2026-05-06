<template>
    <v-row no-gutters justify="center">
        <h1 class="google2 pa-3">FORMULAIRE D'ENREGISTREMENT DE NOUVEAU PROJET</h1>
    </v-row>
    <v-container class="overflow-x1">

        <v-row no-gutters justify="center">
            <v-col>
                <v-card class="ma-2 pa-2">
                    <h2>Responsable</h2>
                    <v-divider />
                    <v-select variant="outlined" />
                </v-card>
            </v-col>
            <v-col>
                <v-card class="ma-2 pa-2">
                    <h2>Date de creation</h2>
                    <v-divider />
                    <v-text-field type="date" variant="outlined" />
                </v-card>
            </v-col>
            <v-col>
                <v-card class="ma-2 pa-2">
                    <h2>Statut</h2>
                    <v-divider />
                    <v-select variant="outlined" />
                </v-card>
            </v-col>
        </v-row>
        <v-sheet class="ma-2 pa-3 rounded" justify="center" elevation="8">
            <h2>information de base</h2>
            <v-row no-gutters justify="center">
                <v-col>
                    <v-text-field label="Nom du projet" variant="outlined" class="ma-1" /></v-col>
                <v-col>
                    <v-text-field label="Categorie" variant="outlined" class="ma-1" /></v-col>
            </v-row>
            <h2>Description du projet</h2>
            <textarea id="firedodge" rows="7" class="ma-2 pa-2" variant="outlined"></textarea>
            <h2>Objectif Cles</h2>
            <v-text-field heigth="80px" variant="outlined" />
            <v-text-field heigth="80px" variant="outlined" />
        </v-sheet>
        <!-- le deux partie du bas pour insert le rapport et les sources du code -->
        <v-sheet class="ma-2 pa-3 rounded" elevation="8">
            <h2>Justificatifs(Optionnel)</h2>
            <v-row no-gutters>
                <v-col class="ma-2">
                    <h2>joindre un rapport(PDF)</h2>
                    <v-file-input variant="outlined" />
                </v-col>
                <v-col class="ma-2">
                    <h2>Ajouter des Liens(ex: Code Source)</h2>
                    <v-file-input variant="outlined" />
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>