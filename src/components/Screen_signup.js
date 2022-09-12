import { request_signup } from './call_api';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Screen_signup({setLogin_info_api,setToken}){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password_confirm, setPassword_confirm] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [callAPI,setCallAPI]= useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (callAPI && (password===password_confirm)){
            request_signup({name:name,email:email,password:password,password_confirm:password_confirm})
            .then((res) => {
                setLogin_info_api(res.data);
                setToken(res.data.token)
                setIsLoading(false);
                navigate('/')
            })
            .catch(err => {alert('Ocorreu um erro');
            setIsLoading(false);
            });
        }
        else if (password!==password_confirm){
            alert('senhas não conferem')
        }
    }, [callAPI]); 

    
    return (
        <>
            <div className="form_title">MyWallet</div> 
            <div className="form_content"
            onSubmit={()=>{setCallAPI(true)}}
            noValidate
            >   <input type="text" placeholder="Nome" disabled={isLoading} value={name} onChange={e => setName(e.target.value)} required></input>
                <input type="email" placeholder="E-mail" disabled={isLoading} value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input type="password" placeholder="Senha" disabled={isLoading} value={password} onChange={e => setPassword(e.target.value)} required></input>
                <input type="password" placeholder="Confirme a senha" disabled={isLoading} value={password_confirm} onChange={e => setPassword_confirm(e.target.value)} required></input>

                <div className="button" type="submit" onClick={()=>{setIsLoading(true);setCallAPI(true)}}> Cadastrar </div>
            </div>
            <Link to={'/'}>
                <div>Já tem uma conta? Entre agora!</div>
            </Link>
        </>
    )
}