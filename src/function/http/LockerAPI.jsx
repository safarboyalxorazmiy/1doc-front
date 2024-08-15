import { $authHost } from "./index";

export const fetchDataLocker = async () =>{
    const { data } = await $authHost.post('api/locker/');
    return data
}

export const addDataLocker = async (datas) =>{
    const { data } = await $authHost.post('api/locker/add', datas);
    return data
}

export const getDataLocker = async (id) =>{
    const { data } = await $authHost.get('api/locker/get/' + id);
    return data
}

export const updateDataLocker = async (id, title) =>{
    const { data } = await $authHost.post('api/locker/update/', { id, title });
    return data
}

export const deleteDataLocker = async (id)  =>{
    const { data } = await $authHost.post('api/locker/delete/', { id });
    return data
}

export const fileLocker = async (id)  =>{
    const { data } = await $authHost.post('api/locker/delete/', { id });
    return data
}