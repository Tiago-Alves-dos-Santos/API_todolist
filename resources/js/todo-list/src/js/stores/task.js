import { defineStore } from 'pinia'
import axios from 'axios';
import API from '@/js/api';
// import router from '@/router/index';
export const useTaskStore = defineStore('task', {
    state: () => {
        return {
            form: {
                user_id: 0,
                title: '',
                conclude: false,
                //load
            },
            loads: {
                create: false,
                update: false
            },
            token: '',
            errors: {}
        }
    },
    actions: {
        create() {
            this.loads.create = true;
            this.errors = {};
            axios({
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                method: API.task.operations.create.method,
                url: API.task.operations.create.url,
                data: {
                    title: this.form.title,
                }
            }).then(() => {
                this.loads.create = false;
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.loads.create = false;
            });

        },
        update(id) {
            this.errors = {};
            this.loads.update = true;
            axios({
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                method: API.task.operations.update.method,
                url: API.task.operations.update.url+'/'+id,
            }).then(() => {
                this.loads.update = false;
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.loads.update = false;
            });
        },
        delete() {
            this.errors = {};
        },
        read() {
            this.errors = {};
        },
        search() {
            this.errors = {};

        },
    },
})
