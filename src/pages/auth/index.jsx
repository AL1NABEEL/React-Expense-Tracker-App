import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

export const Auth = ()=>{

const signInWithGoogle = async()=> {
const results = await signInWithPopup(auth, provider)
const authInfo={
    userID: results.user.uid,
    name: results.user.displayName,
    profilePhoto: results.user.photoURL,
    isAuth:true,
}
localStorage.setItem('auth',JSON.stringify(authInfo))
// we cant store objects in the local storage so we will turn the object into a string 
}

    return <div className="login-page">
<p>sign in with google to continue</p>
<button className="login-with-google-btn" onClick={signInWithGoogle}> sign in with google</button>
    </div>
}