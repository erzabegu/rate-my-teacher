import { RequestMethods } from "../../enums";
import request from "../../utils/axiosInstace";

export const getUsers = async () => {
    try {
        return await request(RequestMethods.GET, 'users')
    } catch (e) {
        console.log(e)
    }
}

export const addUsers = async (data: any) => {
    try {
        return await request(RequestMethods.POST, 'users', data)
    }
    catch (e) {
        console.log(e)
    }
}

export const modifyUsers = async (params: any) => {
    try {
        return await request(RequestMethods.PUT, 'users', null, params);
    }
    catch (e) {
        console.log(e)
    }
}

export const deleteUsers = async (params: any) => {
    try {
        return await request(RequestMethods.DELETE, 'users', null, params);
    }
    catch (e) {
        console.log(e)
    }
}