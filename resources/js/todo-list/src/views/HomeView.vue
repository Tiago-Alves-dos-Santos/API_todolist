<template>
    <div class="home">
        <center-layout>
            <v-card class="mx-auto" width="500" style="padding: 10px;">
                <form @submit.prevent="create">
                    <v-text-field ref="input_task" label="Sua tarefa" hide-details="auto"
                        v-model="taskStore.form.title"></v-text-field>
                    <v-card style="margin-top: 10px; padding: 10px; display: flex; justify-content: center;"
                        variant="outlined">
                        <v-btn type="submit" color="primary" class="mr-2" prepend-icon="mdi-plus"
                            :loading="taskStore.loads.create" :disabled="taskStore.loads.create">
                            Cadastrar
                        </v-btn>
                        <v-btn type="button" color="info" prepend-icon="mdi-magnify">
                            Buscar
                        </v-btn>
                    </v-card>
                </form>
                <alert-erros :errors="taskStore.errors" class="mt-2"></alert-erros>
                <card-row :title="value.title" color="grey-lighten-2" class="mt-2" v-for="value in taskStore.tasks.data"
                    :key="value.id">
                    <button-tooltip text="Editar" location="top" color="warning" icon="mdi-square-edit-outline" class="mr-2"
                        @click="update(value)" :loading="taskStore.loads.update == value.id"
                        :key="value.id"></button-tooltip>
                    <button-tooltip text="Concluir" location="top" color="success" icon="mdi-check-bold" class="mr-2"
                        @click="conclued(value)" :loading="taskStore.loads.conclude == value.id"
                        :key="value.id"></button-tooltip>
                    <button-tooltip text="Deletar" location="top" color="error" icon="mdi-delete" class="mr-2"
                        @click="deleteTask(value)" :loading="taskStore.loads.delete == value.id"></button-tooltip>
                </card-row>
            </v-card>
        </center-layout>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import CenterLayout from '@/layouts/CenterLayout.vue';
import CardRow from '@/components/Card/CardRow.vue';
import ButtonTooltip from '@/components/Button/ButtonTooltip.vue';
import AlertErros from '@/components/Alert/AlertErros.vue';
import Swal from 'sweetalert2'
import router from '@/router/index';
import { useTaskStore } from '@/js/stores/task';
const taskStore = useTaskStore();

const input_task = ref(null);

async function create() {
    taskStore.create();
    await taskStore.read();
    taskStore.form.title = '';
    input_task.value.focus();
}

function update(value) {
    Swal.fire({
        title: "Editar tarefa.",
        text: "A tarefa '" + value.title + "' está a ser editada.",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        inputValue: value.title,
        showCancelButton: true,
        confirmButtonText: "Salvar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            taskStore.update(value.id, result.value);
            taskStore.read();
            taskStore.form.title = '';
            input_task.value.focus();
        }
    });
}

function deleteTask(value) {
    Swal.fire({
        title: "Do prosseguir com a deleção?",
        text: "A tarefa '" + value.title + "' à ser deletada.",
        showCancelButton: true,
        confirmButtonText: "Cancelar",
        cancelButtonText: "Deletar",
    }).then((result) => {
        if (result.isDismissed) { //deletar
            taskStore.delete(value.id);
            taskStore.read();
            taskStore.form.title = '';
            input_task.value.focus();
        }
    });
}
function conclued(value) {
    taskStore.conclued(value.id);
    taskStore.read();
    taskStore.form.title = '';
    input_task.value.focus();
}

onMounted(() => {
    if (window.check()) {
        taskStore.token = localStorage.getItem('token');
        taskStore.read();
    } else {
        router.push({ name: 'login' });
    }

})

</script>
