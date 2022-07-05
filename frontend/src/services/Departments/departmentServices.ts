import { RequestMethods } from "../../enums";
import request from "../../utils/axiosInstace";

export const getDepartments = async () => {
    try {
        return await request(RequestMethods.GET, 'departments')
    } catch (e) {
        console.log(e)
    }
}

export const addProfessors = async (data: any) => {
    try {
        return await request(RequestMethods.POST, 'professors', data)
    }
    catch (e) {
        console.log(e)
    }
}

export const modifyProfessors = async (params: any) => {
    try {
        return await request(RequestMethods.PUT, 'professors', null, params);
    }
    catch (e) {
        console.log(e)
    }
}

export const deleteProfessors = async (params: any) => {
    try {
        return await request(RequestMethods.DELETE, 'professors', null, params);
    }
    catch (e) {
        console.log(e)
    }
}