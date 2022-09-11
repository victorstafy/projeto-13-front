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

    const testing=true;

    if (testing){
        if (callAPI){
            alert('miguezao')
            navigate('/carteira')
        }
    }
    else{
        useEffect(() => {
            if (callAPI){
                request_login({email:email,password:password},true)
                .then((res) => {
                    setLogin_info_api(res.data);
                    setIsLoading(false);
                    navigate('/carteira')
                })
                .catch(err => {alert('Ocorreu um erro');
                setIsLoading(false);
                });
            }
        }, [callAPI]); 
    }
    

    return (
        <>
            <div className="form_title">MyWallet</div> 
            <form className="form_content"
            onSubmit={()=>{setCallAPI(true)}}
            noValidate
            >    
                <input type="email" placeholder="email" disabled={isLoading} value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input type="password" placeholder="senha" disabled={isLoading} value={password} onChange={e => setPassword(e.target.value)} required></input>
                <Button type={"submit"} onClick={()=>{setIsLoading(true);setCallAPI(true)}} disabled={isLoading}> Entrar </Button>
            </form>
            <Link to={'/registrar'}>
                Primeira vez? Cadastre-se!
            </Link>
        </>
    )
}