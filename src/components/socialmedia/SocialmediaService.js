import axios from 'axios'

const SOCIALMEDIA_BASE_REST_API_URL = 'http://localhost:8000/api/v1/headline/save';
//const SOCIALMEDIA_GET_REST_API_URL = 'https://writabackend.herokuapp.com/api/v1/headline';
const SOCIALMEDIA_GET_REST_API_URL = 'http://localhost:8000/api/v1/get/socialmedia';

// const SOCIALMEDIA_GET_REST_API_PAGE_URL = `http://localhost:8082/api/v1/headline?page=1&size=${limitsize}`;

class SocialmediaService {

    getAllSocialmedia() {
        return axios.get(SOCIALMEDIA_GET_REST_API_URL)
    }

    createSocialmedia(headline) {
        return axios.post(SOCIALMEDIA_BASE_REST_API_URL, headline)
    }
}

export default new SocialmediaService();