import axios from 'axios'

const CAMPAIGN_BASE_REST_API_URL = 'http://localhost:8000/api/v1/headline/save';
//const CAMPAIGN_GET_REST_API_URL = 'https://writabackend.herokuapp.com/api/v1/headline';
const CAMPAIGN_GET_REST_API_URL = 'http://localhost:8000/api/v1/get/socialmedia';

// const CAMPAIGN_GET_REST_API_PAGE_URL = `http://localhost:8082/api/v1/headline?page=1&size=${limitsize}`;

class CampaignService {

    getAllCampaign() {
        return axios.get(CAMPAIGN_GET_REST_API_URL)
    }

    createCampaign(campaign) {
        return axios.post(CAMPAIGN_BASE_REST_API_URL, campaign)
    }
}

export default new CampaignService();