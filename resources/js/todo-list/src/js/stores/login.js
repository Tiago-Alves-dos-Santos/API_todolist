import { defineStore } from 'pinia'
import axios from 'axios';
import API from '@/js/api';
import router from '@/router/index';
export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            email: '',
            password: '',
            errors: {},
            load: false
        }
    },
    actions: {
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
                    this.load = false;
                }
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.load = false;
            });
        },
        logout() {
            localStorage.removeItem('token');
            router.push({ name: 'login' });
        }
    },
})
