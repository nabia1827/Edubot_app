import axios from 'axios';

const API_URL = 'http://35.247.217.49';

const responseBody = res => {
    if (res != undefined) return res.data;
    return null;
};

const requests = {
    get: url => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: url => axios.delete(url).then(responseBody),
    patch: (url, body) => axios.patch(url, body).then(responseBody),
};

const bot = {
    sendMesage: body => requests.post(`${API_URL}/rasa/webhooks/rest/webhook`, body),

};


export default {bot};