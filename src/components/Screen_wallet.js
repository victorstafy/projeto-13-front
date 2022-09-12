import { request_balance } from './call_api';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

function Balance_register({date,title,value,type}){
    return (
        <>
        <div className="wallet_register">
            <div className="wallet_register_date">{date}</div>
            <div className="wallet_register_title">{title}</div>
            {type==='deposit'?<div className="wallet_register_value_deposit">{value}</div>:
            <div className="wallet_register_value_withdraw">{value}</div>}
        </div>
        </>
    )
}


export default function Screen_wallet(token,login_info_api){
    const name= login_info_api.name;
    const [balance_list, setBalance_list]=useState([
        // {date:'27/08',title:'kkk',value:30,type:'deposit'},
        // {date:'28/08',title:'rrr',value:40,type:'withdraw'}
    ]);
    let total_balance=0;
    // const navigate = useNavigate();

    useEffect(() => {
        request_balance(token)
        .then((res) => {
            setBalance_list(res.data);
            // setName(res.data.name);
        })
        .catch(err => {alert('Ocorreu um erro');
        });
    }, []); 

    balance_list.map((balance)=>(balance.type==='deposit' ? total_balance=total_balance+balance.value: 
    total_balance=total_balance-balance.value))
     

    return (
        <>
            <div className="wallet_title">Olá, {name}
                <Link to={'/'}>
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
            </div> 
            {balance_list.length!==0?
                <div className="wallet">
                    {balance_list.map((balance)=>(
                        <Balance_register 
                        date={balance.date}
                        title={balance.title}
                        value={balance.value}
                        type={balance.type}
                        />
                    )) }
                    <div className='wallet_balance'> 
                        <div className='wallet_balance_text'>Saldo</div>
                        {(total_balance>0)?<div className='wallet_balance_pos_value'>{total_balance}</div>:
                        <div className='wallet_balance_neg_value'>{total_balance}</div>}
                    </div>
                </div>: <div className="wallet_empty"> Não há registros de entrada ou saída </div>}

            <div className='add_change_panel'>
                <div className='add_change'>
                    <div className='add_change_title'>
                    <p>Nova entrada</p> 
                    <Link to={'/deposito'}>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </Link>
                    </div>
                </div>
                <div className='add_change'>
                    <div className='add_change_title'>
                        <p>Nova saída</p> 
                        <Link to={'/retirada'}>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                        </Link>
                    </div>
                </div>
            </div>
        
        </>
    )
}