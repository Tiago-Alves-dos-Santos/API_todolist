<template>
    <v-card>
        <div style="display: flex; justify-content: space-between; width: 100%; padding: 5px;">
        <h3 style="position: relative; top: 10px;">
            Taks 1
        </h3>
        <div>
            <v-tooltip text="Editar" location="top">
                <template v-slot:activator="{ props }">
                    <v-btn color="warning" v-bind="props" icon="mdi-square-edit-outline" class="mr-2"></v-btn>
                </template>
            </v-tooltip>

            <v-tooltip text="Deltar" location="top">
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-delete" v-bind="props" color="error"></v-btn>
                </template>
            </v-tooltip>

        </div>
    </div>
    </v-card>
</template>
