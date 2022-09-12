import { send_balance } from './call_api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Screen_deposit(token){
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);
    const [callAPI,setCallAPI]= useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (callAPI){
            send_balance({value:value,title:title,type:'deposit'},token)
            .then((res) => {
                setIsLoading(false);
                navigate('/carteira')
            })
            .catch(err => {alert('Ocorreu um erro');
            setIsLoading(false);
            });
        }
    }, [callAPI]); 

    
    return (
        <div className='root2'>
            <div className="deposit_withdraw_title">Nova Entrada</div> 
            <div className="deposit_withdraw_content"
            onSubmit={()=>{setCallAPI(true)}}
            noValidate
            >    
                <input type="number" placeholder="Valor" disabled={isLoading} value={value} onChange={e => setValue(e.target.value)} required></input>
                <input type="text" placeholder="Descrição" disabled={isLoading} value={title} onChange={e => setTitle(e.target.value)} required></input>
                <div className="button" type="submit" onClick={()=>{setIsLoading(true);setCallAPI(true)}}> Salvar saída </div>
            </div>
        </div>
    )
}