import {CardStyle} from './styles/CardStyle';
import { InputStyle } from './styles/InputStyle';
import {
    auth,
    signInWithGoogle,
} from "../firebase-config";
import { useEffect,useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const Auth = () => {
    const [user] = useAuthState(auth);
    const [card, setCard] = useState(<div></div>);
    useEffect( () =>{
        if(!user){
            setCard(
            <div>
                <CardStyle>
                    <button onClick={signInWithGoogle}>sign in with google</button>
                </CardStyle>
            </div>
            );
        }else{
            setCard(
                <div></div>
            );
        }
    }, [user]);
    
    return ( 
        <div>
            {card}
        </div>
     );
}
export default Auth;