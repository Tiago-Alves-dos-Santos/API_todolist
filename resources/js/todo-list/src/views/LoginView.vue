<template>
    <div class="home">
        <center-layout>
            <v-card title="Login" class="mx-auto" width="500" style="padding: 10px;">
                <form @submit.prevent='login'>
                    <v-text-field label="Email" hide-details="auto" variant="outlined" v-model="email"></v-text-field>
                    <password-input variant="outlined" class="mt-1" v-model="password"></password-input>
                    <div class="d-flex justify-end mt-2">
                        <v-btn type="submit" color="primary" class="mr-2" :loading="load" :disabled="load">
                            Login
                        </v-btn>
                    </div>
                </form>
                <alert-erros :errors="errors" class="mt-2"></alert-erros>
            </v-card>
        </center-layout>
    </div>
</template>

<script>
import CenterLayout from '@/layouts/CenterLayout.vue';
import PasswordInput from '@/components/Input/PasswordInput.vue';
import AlertErros from '@/components/Alert/AlertErros.vue';
import axios from 'axios';
import API from '@/js/api';
import router from '@/router/index';
export default {
    name: 'HomeView',
    components: {
        CenterLayout,
        PasswordInput,
        AlertErros
    },
    data() {
        return {
            email: '',
            password: '',
            errors: {},
            load: false
        };
    },
    methods: {
        login() {
            this.load = true;
            axios.get(API.auth.operations.login.url, {
                params: {
                    email: this.email,
                    password: this.password
                }
            }
            ).then((response) => {
                let data = response.data;
                if (response.status == '200' && data.cacheble) {
                    localStorage.setItem('token', data.token);
                    router.push({ name: 'home' });
                    this.load= false;
                }
            }).catch((error) => {
                console.log(error);
                console.log(error.response.data.errors);
                this.errors = error.response.data.errors;
                this.load= false;
            });

        }
    },
    mounted() {


    }
}
</script>
