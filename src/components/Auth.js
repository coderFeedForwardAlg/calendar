import {CardStyle} from './styles/CardStyle';
import { InputStyle } from './styles/InputStyle';
import {
    auth,
    signInWithGoogle,
} from "../firebase-config";

const Auth = () => {

    return ( 
        <div>
            
                <CardStyle>
                    
                    <button onClick={signInWithGoogle}>sign in with google</button>
                </CardStyle>
                
                
        </div>
     );
}
export default Auth;