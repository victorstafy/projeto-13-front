import { useState, createContext, useContext } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen_signin from './Screen_signin';
import Screen_signup from './Screen_signup';
import Screen_deposit from './Screen_deposit';
import Screen_withdraw from './Screen_withdraw';
import Screen_wallet from './Screen_wallet';

export default function App () {
    const [login_info_api, setLogin_info_api] = useState({});
    const [token, setToken] = useState('');
    
    // <UserContext.Provider value={{login_info_api, setLogin_info_api}}></UserContext.Provider>
    return(
        <>
            {
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Screen_signin setLogin_info_api={setLogin_info_api} setToken={setToken}/>}></Route>

                    <Route path="/registrar" element={<Screen_signup setLogin_info_api={setLogin_info_api} />}></Route>

                    <Route path="/deposito" element={<Screen_deposit token={token}/>}></Route>

                    <Route path="/retirada" element={<Screen_withdraw token={token}/>}></Route>

                    <Route path="/carteira" element={<Screen_wallet login_info_api={login_info_api} token={token}/>}></Route>

                </Routes>
            </BrowserRouter>
            }
        </>
 
        
    )
}