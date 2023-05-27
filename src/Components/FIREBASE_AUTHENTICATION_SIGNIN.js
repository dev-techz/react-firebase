import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"

export const FIREBASE_AUTHENTICATION_SIGNIN = () => {

    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getUser = () =>   {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                //const user = userCredential.user;
                console.log(userCredential.user);
                // ...
            })
            .catch((error) => {
                console.log(error.message,error.code);
            });
        }

        return (
            <div>
                <h2>FIREBASE_AUTHENTICATION_SIGNIN</h2>
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={e => setEmail(e.target.value)} value={email} name="email" id="email1" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password} name="password" id="password1" />
                <br />
                <button onClick={getUser}>Sign In</button>
            </div>

        )
    
}