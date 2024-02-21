import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

export const Auth = ()=>{

const signInWithGoogle = async()=> {
const results = await signInWithPopup(auth, provider)
console.log(results);
}

    return <div className="login-page">
<p>sign in with google to continue</p>
<button className="login-with-google-btn" onClick={signInWithGoogle}> sign in with google</button>
    </div>
}