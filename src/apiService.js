

import axios from 'axios';




export const fetchAlerts = async () => {

    const response = await axios.get('/alerts');
    return response.data;
};


export const postPrediction = async (formData) => {
    // Use a relative path for this endpoint as well
    const response = await axios.post('/predict', formData);
    return response.data;
};
