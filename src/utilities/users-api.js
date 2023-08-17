import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

// 🟥 UPDATE USER FUNCTION
export function updateUser(updatedData, userId) {
  return sendRequest(`${BASE_URL}/${userId}`, 'PUT', updatedData)
}