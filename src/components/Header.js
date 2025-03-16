import React, { useEffect } from "react";
import { NetFLIX_LOGO_URL, SUPPORTED_LANGUAGES, USER_LOGO } from "../utlis/constants";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { addUser, removeUser } from "../utlis/userSlice";
import { toggleGptSearchView } from "../utlis/gptSlice";
import { changeLanguage } from "../utlis/configSlice";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=> store.user);
    const showGptSearch = useSelector(store=> store.gpt?.showGptSearch);

    const handleSignOut = ()=>{
        signOut(auth).then(() => {})
        .catch((error) => {
            // An error happened.
          });
       
    };

      // to call auth api of firebase only once
useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName} = user;
          dispatch(addUser({uid :uid, email: email, displayName: displayName }));
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
      // this will unsubscribe when component unmounts- To do this we return a fn from useEffect
      return () => unsubscribe();
}, []);

const clickGptSearch = () =>{

  // toggle gpt search
  dispatch(toggleGptSearchView());
}
const handlelanguageChange = (e) =>{
  dispatch(changeLanguage(e.target.value));
  
}

   return(
    <div className="absolute py-2 px-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      
       <img className="w-44" src={NetFLIX_LOGO_URL} alt="logo"/>
      {user && <div className="p-2 flex">
       { showGptSearch && 
        <select className="p-2 m-2 bg-gray-900 text-white" onChange={handlelanguageChange}>
       {
        SUPPORTED_LANGUAGES.map(language=>
        <option key={language.identifier} value={language.identifier}>
        {language.name}
        </option>)

       } 
        </select>
       } 
        <button className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mx-4 my-2"
        onClick={clickGptSearch}>
        {showGptSearch ? "Home": "GPT search"}</button>
        <img className="w-12 h-12"
        alt="userimg" src={USER_LOGO}/>
        <button onClick={handleSignOut}
        className="text-white font-bold underline">Sign Out</button>
      </div> }
    </div>
   )
}

export default Header;