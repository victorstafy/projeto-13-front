import Button from "./common/Button";
import { request_login } from './call_api';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Raiz(){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const {login_info_api, setLogin_info_api} = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [callAPI,setCallAPI]= useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (callAPI){
            console.log(callAPI)
            console.log(isLoading)
            request_login({email:email,password:password})
            .then((res) => {
                setLogin_info_api(res.data);
                setIsLoading(false);
                navigate('/hoje')
            })
            .catch(err => {alert('Ocorreu um erro');
            setIsLoading(false);
            });
        }
    }, [callAPI]); 

    return (
        <>
            <img src='logo.png' alt='loading'/>
            <form 
            onSubmit={()=>{setCallAPI(true)}}
            noValidate
            >    
                <input type="email" placeholder="email" disabled={isLoading} value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input type="password" placeholder="senha" disabled={isLoading} value={password} onChange={e => setPassword(e.target.value)} required></input>
                {isLoading ? <Button1 type={"submit"} onClick={()=>{setIsLoading(true);setCallAPI(true)}} disabled={isLoading}> 
                {isLoading ? <ThreeDots/> :  'Entrar'} </Button1> :
                <Button type={"submit"} onClick={()=>{setIsLoading(true);setCallAPI(true)}} disabled={isLoading}> 
                {isLoading ? <ThreeDots/> :  'Entrar'} </Button>}
            </form>
            <Link to={'/cadastro'}>
                <LinkText> Não tem uma conta? Cadastre-se! </LinkText>
            </Link>
        </>
    )
}