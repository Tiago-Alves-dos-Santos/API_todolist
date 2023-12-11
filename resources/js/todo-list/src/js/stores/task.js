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
                concluded: false,
            },
            loads: {
                create: false,
                update: -1,
                delete: -1,
                conclude: -1,
                read:false
            },
            tasks: {},
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
                console.log(error);
                this.errors = error.response.data.errors;
                this.loads.create = false;
            });

        },
        async read(filters = '') {
            this.loads.read = true;
            let request = API.task.operations.read.url;
            if (filters) {
                request = API.task.operations.read.url + '?' + filters
                let currentURL = window.location.href;
                // Pega apenas a parte da URL antes dos parâmetros - recarrega parametros
                let updatedURL = currentURL.split('?')[0];
                updatedURL = updatedURL +'?' +filters;
                //"escreve no navegador"
                history.pushState(null, null, updatedURL);
            }
            this.errors = {};
            await axios({
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                method: API.task.operations.read.method,
                url: request,
            }).then((response) => {
                this.tasks = response.data.tasks;
                this.loads.read = false;
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.loads.read = false;
            });
        },
        update(id, newTitle) {
            this.errors = {};
            this.loads.update = id;
            axios({
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                method: API.task.operations.update.method,
                url: API.task.operations.update.url,
                data: {
                    id: id,
                    title: newTitle
                }
            }).then(() => {
                this.loads.update = -1;
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.loads.update = -1;
            });
        },
        delete(id) {
            this.errors = {};
            this.loads.delete = id;
            axios({
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                method: API.task.operations.delete.method,
                url: API.task.operations.delete.url,
                data: {
                    id: id,
                }
            }).then(() => {
                this.loads.delete = -1;
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.loads.delete = -1;
            });
        },
        conclued(id) {
            this.errors = {};
            this.loads.conclude = id;
            axios({
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                method: API.task.operations.conclued.method,
                url: API.task.operations.conclued.url,
                data: {
                    id: id,
                }
            }).then(() => {
                this.loads.conclude = -1;
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.loads.conclude = -1;
            });
        },
        search() {
            this.errors = {};

        },
    },
})
