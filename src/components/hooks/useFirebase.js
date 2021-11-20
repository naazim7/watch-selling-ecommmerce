import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";


//initializing Firebase
initializeFirebase();
const useFirebase = () => {
    

    const [error, setError] = useState('')
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [admin,setAdmin]= useState(false);
    
    
    const auth = getAuth();
    const googleProvider=new GoogleAuthProvider();

//Clear Error After Loading
    useEffect(() => {
		setTimeout(() => {
			setError("");
		}, 5000);
    }, [error]);
    

//google Signing in
    const googleSignIn=() => {
        return signInWithPopup(auth,googleProvider)
    }


//SignUpWithEmail
    
    
 const signUpWithEmail = (displayName) => {
        
      
     return createUserWithEmailAndPassword(auth, email, password);
		
    }
    
    //SignInWith Email And Password

 const emailSignIn = () => {
           
     return signInWithEmailAndPassword(auth, email, password);
    }


//Ovserver
useEffect(() => {
	const unsubscribe = onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
		} else {
			setUser({});
		}
		setLoading(false);
	});
	return () => unsubscribe;
}, []);
    
    
    //logout

    function logOut() {
			signOut(auth)
				.then((res) => {
					setUser({});
				})
				.catch((error) => {
					setError(error.message);
				})
				.finally(() => setLoading(false));
    }
    
    useEffect(() => {
        fetch(`https://stark-stream-83699.herokuapp.com/users/${user.email}`)
        .then((res) => res.json())
        .then(data => setAdmin(data.admin))
    
},[user.email])

    
    return {
        admin,
    auth,
    error,
    googleSignIn,
    signUpWithEmail,
    emailSignIn,
    user,
    loading,
    setLoading,
    setUser,
    setError,
    logOut,
    setEmail,
    setPassword,
    displayName,
    setDisplayName,password
}

}

export default useFirebase;