import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const signIn = async (phone, password) => {
    const { data } = await $host.post('api/user/login', { phone, password });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const registration = async (datas) => {
    const { data } = await $host.post('api/user/registration', datas);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const getUser = async (id) =>{
    const { data } = await $authHost.get('api/user/get/' + id);
    return data
}

export const updateUser = async (datas) =>{
    const { data } = await $authHost.post('api/user/update', datas)
    return data
}

export const updateUserCompany = async (datas) =>{
    const { data } = await $authHost.post('api/user/updatecompany', datas)
    return data
}