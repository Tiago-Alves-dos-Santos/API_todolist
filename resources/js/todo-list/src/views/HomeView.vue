<template>
    <div class="home">
        <center-layout>
            <v-card class="mx-auto" width="500" style="padding: 10px;">
                <v-text-field label="Main input" hide-details="auto"></v-text-field>
                <v-card style="margin-top: 10px; padding: 10px; display: flex; justify-content: center;" variant="outlined">
                    <v-btn color="primary" class="mr-2" prepend-icon="mdi-plus">
                        Cadastrar
                    </v-btn>
                    <v-btn color="info" prepend-icon="mdi-magnify">
                        Buscar
                    </v-btn>
                </v-card>
                <v-card style="width: 100%; background-color: aqua; margin-top: 10px;" variant="elevated">

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
            </v-card>
        </center-layout>

    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CenterLayout from '@/layouts/CenterLayout.vue'

export default {
    name: 'HomeView',
    components: {
        CenterLayout
    }
}
</script>
