<template>
    <div class="home">
        <center-layout>
            <v-card class="mx-auto card-center" style="padding: 10px;">
                <div>
                    <v-switch v-model="theme_toggle" :label="theme.global.current.value.dark ? 'Tema escuro' : 'Tema claro'"
                        color="red-darken-3" value="red-darken-3" hide-details @change="toggleTheme"></v-switch>
                </div>
                <form @submit.prevent="create">
                    <v-text-field ref="input_task" label="Sua tarefa" hide-details="auto"
                        v-model="taskStore.form.title"></v-text-field>
                    <v-card class="d-flex flex-column mt-2 py-2 px-1" variant="outlined">
                        <div class="d-flex justify-center">
                            <v-btn type="submit" color="primary" class="mr-2" prepend-icon="mdi-plus"
                                :loading="taskStore.loads.create" :disabled="taskStore.loads.create">
                                Cadastrar
                            </v-btn>
                            <v-btn type="button" color="info" prepend-icon="mdi-magnify" @click="search"
                                :loading="taskStore.loads.read" :disabled="taskStore.loads.read">
                                Buscar
                            </v-btn>
                        </div>
                        <div>
                            <v-checkbox v-model="taskStore.form.concluded" label="Concluídas" color="success"
                                @change="search" hide-details></v-checkbox>
                        </div>
                    </v-card>
                </form>
                <alert-erros :errors="taskStore.errors" class="mt-2"></alert-erros>
                <card-row :title="value.title" :color="value.concluded ? 'green' : ''" class="mt-2"
                    v-for="value in taskStore.tasks.data" :key="value.id">
                    <div v-if="!value.concluded">
                        <button-tooltip text="Editar" location="top" color="warning" icon="mdi-square-edit-outline"
                            class="mr-2" @click="update(value)" :loading="taskStore.loads.update == value.id"
                            :key="value.id"></button-tooltip>
                        <button-tooltip text="Concluir" location="top" color="success" icon="mdi-check-bold" class="mr-2"
                            @click="conclued(value)" :loading="taskStore.loads.conclude == value.id"
                            :key="value.id"></button-tooltip>
                        <button-tooltip text="Deletar" location="top" color="error" icon="mdi-delete" class="mr-2"
                            @click="deleteTask(value)" :loading="taskStore.loads.delete == value.id"></button-tooltip>
                    </div>
                </card-row>
                <div>
                    <v-pagination v-model="taskStore.tasks.current_page" :length="taskStore.tasks.last_page"
                        :total-visible="4" @update:modelValue="paginator"></v-pagination>

                </div>
                <div class="d-flex justify-end">
                    <v-btn type="button" color="error" prepend-icon="mdi-exit-run" @click="logout">
                        sair
                    </v-btn>
                </div>
            </v-card>
        </center-layout>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useTheme } from 'vuetify';
import { useTaskStore } from '@/js/stores/task';
import { useLoginStore } from '@/js/stores/login';
import Swal from 'sweetalert2'
import router from '@/router/index';
import CenterLayout from '@/layouts/CenterLayout.vue';
import CardRow from '@/components/Card/CardRow.vue';
import ButtonTooltip from '@/components/Button/ButtonTooltip.vue';
import AlertErros from '@/components/Alert/AlertErros.vue';

const taskStore = useTaskStore();
const loginStore = useLoginStore();

const input_task = ref(null);
const theme_toggle = ref(false);
const theme = useTheme();
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
async function create() {
    taskStore.create();
    taskStore.form.title = '';
    await taskStore.read(filters(taskStore.tasks.current_page ?? 1));
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
            taskStore.read(filters(taskStore.tasks.current_page ?? 1));
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
            taskStore.read(filters(taskStore.tasks.current_page ?? 1));
            taskStore.form.title = '';
            input_task.value.focus();
        }
    });
}
function conclued(value) {
    taskStore.conclued(value.id);
    taskStore.read(filters(taskStore.tasks.current_page ?? 1));
    taskStore.form.title = '';
    input_task.value.focus();
}

function paginator(page) {
    taskStore.read(filters(page));
}

function filters(page) {
    const filter = [
        { key: 'page', value: page },
        { key: 'title', value: taskStore.form.title },
        { key: 'concluded', value: taskStore.form.concluded },
    ];
    const params = {};
    filter.forEach(param => {
        params[param.key] = param.value;
    });
    return new URLSearchParams(params).toString();
}

function search() {
    taskStore.read(filters(taskStore.tasks.current_page ?? 1));
}
function logout() {
    loginStore.logout();
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

<style lang="scss" scoped>
div.card-center {
    width: 350px;

    @media (min-width: 500px) {
        width: 700px;
    }
}
</style>
