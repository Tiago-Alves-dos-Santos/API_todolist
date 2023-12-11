<template>
    <div class="home">
        <center-layout>
            <v-card title="Login" class="mx-auto" width="500" style="padding: 10px;">
                <form @submit.prevent='logim'>
                    <v-text-field label="Email" hide-details="auto" variant="outlined" v-model="login.email"></v-text-field>
                    <password-input variant="outlined" class="mt-1" v-model="login.password"></password-input>
                    <div class="d-flex justify-end mt-2">
                        <v-btn type="submit" color="primary" class="mr-2" :loading="login.load" :disabled="login.load">
                            Login
                        </v-btn>
                    </div>
                </form>
                <alert-erros :errors="login.errors" class="mt-2"></alert-erros>
            </v-card>
        </center-layout>
    </div>
</template>

<script>
import CenterLayout from '@/layouts/CenterLayout.vue';
import PasswordInput from '@/components/Input/PasswordInput.vue';
import AlertErros from '@/components/Alert/AlertErros.vue';
import { useLoginStore } from '@/js/stores/login';
export default {
    name: 'HomeView',
    components: {
        CenterLayout,
        PasswordInput,
        AlertErros
    },
    data() {
        return {
            login: useLoginStore(),
        };
    },
    methods: {
        logim(){
            this.login.login();
        }

    },
    mounted() {
        this.login.email = '';
        this.login.password = '';
    }
}
</script>
