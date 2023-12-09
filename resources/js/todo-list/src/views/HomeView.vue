<template>
    <div class="home">
        <center-layout>
            <v-card class="mx-auto" width="500" style="padding: 10px;">
                <v-text-field label="Sua tarefa" hide-details="auto"></v-text-field>
                <v-card style="margin-top: 10px; padding: 10px; display: flex; justify-content: center;" variant="outlined">
                    <v-btn color="primary" class="mr-2" prepend-icon="mdi-plus">
                        Cadastrar
                    </v-btn>
                    <v-btn color="info" prepend-icon="mdi-magnify">
                        Buscar
                    </v-btn>
                </v-card>
                <card-row title="task 1" color="grey-lighten-2" class="mt-2">
                    <button-tooltip text="Editar" location="top" color="warning" icon="mdi-square-edit-outline" class="mr-2"></button-tooltip>
                    <button-tooltip text="Deletar" location="top" color="error" icon="mdi-delete" class="mr-2"></button-tooltip>
                </card-row>
            </v-card>
        </center-layout>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CenterLayout from '@/layouts/CenterLayout.vue';
import CardRow from '@/components/Card/CardRow.vue';
import ButtonTooltip from '@/components/Button/ButtonTooltip.vue';

export default {
    name: 'HomeView',
    components: {
        CenterLayout,
        CardRow,
        ButtonTooltip
    }
}
</script>
