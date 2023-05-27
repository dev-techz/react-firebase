import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react"

export const FIREBASE_AUTHENTICATION_SIGNUP = () => {

    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const regUser = () => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            //const user = userCredential.user;
            console.log(userCredential);
        })
        .catch((error) => {
            //const errorCode = error.code;
            //const errorMessage = error.message;
            console.log(error);
        });}

    return (
        <div>
            <h2>FIREBASE_AUTHENTICATION_SIGNUP</h2>
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={e => setEmail(e.target.value)} value={email} name="email" id="email2" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" onChange={e => setPassword(e.target.value)} value={password} name="password" id="password2" />
            <br />
            <button onClick={regUser}>Sign Up</button>
        </div>
        
    )
}
