import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://json-server-devguincho.vercel.app/'
})


export const busca = async(url) => {
    const resposta = await api.get(`/${url}`)
    return resposta.data;
}