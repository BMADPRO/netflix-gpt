import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utlis/validate";
import { auth } from '../utlis/firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";
import { LOGIN_BG_IMG } from "../utlis/constants";
const Login = ()=> {

   const [isSignInForm, setIsSignInForm] = useState(true);
   const [errMessage, setErrMessage] = useState(null);
  

   const email = useRef(null);
   const password = useRef(null);
   const name = useRef(null);

   const dispatch = useDispatch();

   const handleSignInFormClick= () =>{
       setIsSignInForm(!isSignInForm);
   }

   const handleButtonClick = ()=>{
      const message = validateData(email.current.value, password.current.value);
      setErrMessage(message);

      if(message) return;

      //Sign In-Sign up
      if(!isSignInForm){
        //Sign Up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            

            //Add user to redux store calling authchange in header.js and navigate
            //update profile with display name
            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                // update Store again with display name
                const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({uid :uid, email: email, displayName: displayName }))
              }).catch((error) => {
                // An error occurred
                // ...
              });

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMessage(errorCode + "-"+ errorMessage)
          });

      }else{
        //Sign In
        signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user; 
            
            //Add user to redux store calling authchange in Header.js and navigate

          })
          .catch((error) => {
            const errorCode = error.code;
            const errMessage = error.message;
            setErrMessage(errorCode + "-"+ errMessage)
          });
      }

      
   }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src={LOGIN_BG_IMG}
                alt="bg-image"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()}className="p-8 bg-black absolute text-white w-3/12 mx-auto my-40 left-0 right-0 bg-opacity-80 rounded">
                <h1 className="text-3xl font-bold p-4">{isSignInForm ? 'Sign In': "Sign Up"}</h1>
                {!isSignInForm &&
                <input type="text" ref={name} placeholder="Full Name" className="p-4 my-4 w-full bg-gray-500"/>
                }
                <input type="text" ref={email} placeholder="Email Address" className="p-4 my-4 w-full bg-gray-500"/>
                <input type="password" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-500"/>
                <p className="text-lg py-2 font-bold text-red-500">{errMessage}</p>
                <button className="font-bold p-4 my-8 bg-red-600 w-full rounded"
                onClick={handleButtonClick}
                >{isSignInForm ? 'Sign In': "Sign Up"}</button>
                <p className="p-2 m-2 underline cursor-pointer"
                onClick={handleSignInFormClick}
                >{isSignInForm ? 'New to Netflix? Sign up now.': "Already a user? Sign In now."}</p>
            </form>
        </div>
    )
};

export default Login;