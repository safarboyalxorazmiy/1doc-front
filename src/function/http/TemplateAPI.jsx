import { $authHost } from "./index";

export const fetchDataTemplate = async () =>{
    const { data } = await $authHost.post('api/template/');
    return data
}

export const addDataTemplate = async (datas) =>{
    const { data } = await $authHost.post('api/template/add', datas);
    return data
}

export const getDataTemplate = async (id) =>{
    const { data } = await $authHost.get('api/template/get/' + id);
    return data
}

export const updateDataTemplate = async (id, title) =>{
    const { data } = await $authHost.post('api/template/update/', { id, title });
    return data
}

export const deleteDataTemplate = async (id)  =>{
    const { data } = await $authHost.post('api/template/delete/', { id });
    return data
}