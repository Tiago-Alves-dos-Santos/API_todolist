let API = {};
API.url = 'http://localhost:8000/api/';

API.auth = {
    operations: {
        login: {
            method: 'POST',
            url: API.url + 'login',
        }
    }
};

API.task = {
    endpoint: API.url + 'task/',
    operations: {
        create: {
            method: 'POST',
            url: API.url + 'task/create',
        },
        read: {
            method: 'GET',
            url: API.url + 'task/',
        },
        update: {
            method: 'PUT',
            url: API.url + 'task/update',
        }
    }
};


export default API;
