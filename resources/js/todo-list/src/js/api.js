let API = {};
API.url = 'http://localhost:8000/api/';

API.endpoints = {
    task: API.url + 'task/'
};

API.task = {
    operations: {
        create: {
            method: 'POST',
            url: API.endpoints.task + 'create',
        },
        read: {
            method: 'GET',
            url: API.endpoints.task,
        },
        update: {
            method: 'PUT',
            url: API.endpoints.task + 'update',
        },
        delete: {
            method: 'DELETE',
            url: API.endpoints.task + 'delete',
        },
        conclued: {
            method: 'PUT',
            url: API.endpoints.task + 'conclued',
        },
    }
};

API.auth = {
    operations: {
        login: {
            method: 'POST',
            url: API.url + 'login',
        }
    }
};

export default API;
