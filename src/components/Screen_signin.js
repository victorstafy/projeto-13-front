import { request_login } from './call_api';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Screen_signin({setLogin_info_api}){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);
    const [callAPI,setCallAPI]= useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (callAPI){
            request_login({email:email,password:password})
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

    
    return (
        <>
            <div className="form_title">MyWallet</div> 
            <div className="form_content"
            onSubmit={()=>{setCallAPI(true)}}
            noValidate
            >    
                <input type="email" placeholder="E-mail" disabled={isLoading} value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input type="password" placeholder="Senha" disabled={isLoading} value={password} onChange={e => setPassword(e.target.value)} required></input>
                <div className="button" type="submit" onClick={()=>{setIsLoading(true);setCallAPI(true)}}> Entrar </div>
            </div>
            <Link to={'/registrar'}>
                <div>Primeira vez? Cadastre-se!</div>
            </Link>
        </>
    )
}