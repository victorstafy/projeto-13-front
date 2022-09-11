import { useState, createContext, useContext } from "react";
import UserContext from "../contexts/UserContext";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen_signin from './Screen_signin';
import Screen_signup from './Screen_signup';
import Screen_deposit from './Screen_deposit';
import Screen_withdraw from './Screen_withdraw';
import Screen_wallet from './Screen_wallet';

export default function App () {
    const [movie_id, setMovie_id] = useState('');
    <UserContext.Provider value={{movie_id, setMovie_id}}></UserContext.Provider>
    return(
        <>
            {
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Screen_signin setMovie_id={setMovie_id}/>}></Route>

                    <Route path="/registrar" element={<Screen_signup />}></Route>

                    <Route path="/deposito" element={<Screen_deposit />}></Route>

                    <Route path="/retirada" element={<Screen_withdraw/>}></Route>

                    <Route path="/carteira" element={<Screen_wallet />}></Route>

                </Routes>
            </BrowserRouter>
            }
        </>
 
        
    )
}