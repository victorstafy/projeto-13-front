import axios from 'axios';

const BASE_URL = 'https://localhost:5000/';

function request_signup(body,testing) {
  const promise = axios.post(`${BASE_URL}/signup`,body);
  return promise;
}

function request_login(body,testing) {
    const promise = axios.post(`${BASE_URL}/signin`,body);
    return promise;
}

function send_balance(body,testing) {
    const promise = axios.post(`${BASE_URL}/balance`,body);
    return promise;
}

function request_balance(token,testing) {
    const promise = axios.get(`${BASE_URL}/balance`,{ headers: { Authorization: `Bearer ${token}` } });
    return promise;
}

// function delete_habit(habitId,token) {
//     const promise = axios.delete(`${BASE_URL}/habits/${habitId}`,{ headers: { Authorization: `Bearer ${token}` } });
//     return promise;
// }

// function search_habit(token) {
//     const promise = axios.get(`${BASE_URL}/habits/today`,{ headers: { Authorization: `Bearer ${token}` } });
//     return promise;
// }

// function check_habit(habitId,body,token) {
//     const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`,body,{ headers: { Authorization: `Bearer ${token}` } })
//     return promise;
// }


export { request_signup, request_login, send_balance, request_balance};