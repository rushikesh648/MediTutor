// Snippet from src/utils/api.js
const getAuthToken = () => {
    return localStorage.getItem('userToken'); 
};

export const secureFetch = async (endpoint, options = {}) => {
    const token = getAuthToken();

    const headers = {
        ...options.headers,
        # The crucial step: attaching the token in the required 'Bearer <TOKEN>' format
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
    };

    const url = `http://localhost:8080${endpoint}`; # Routes to the API Gateway
    const response = await fetch(url, finalOptions);

    if (response.status === 401 || response.status === 403) {
        # Unauthorized access handler
        console.error("Token expired or unauthorized. Logging out...");
        # Trigger logout flow
    }

    return response;
};
