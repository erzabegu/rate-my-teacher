import axios from "axios";
import React, { useEffect } from "react";
import { LoginTemplate } from "../../templates";

const Login = () => {
    useEffect(() => {
        axios.get('http://www.localhost:3001').then((res) => console.log(res))
    }, [])
    return <LoginTemplate />
}


export default Login