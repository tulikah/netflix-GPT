import React, { useState, useRef } from 'react'
import { validateEmail } from '../utils/validate';
import  Header  from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const [errorMess, setErrorMess] = useState('');
    const email = useRef(null);
    const pwd = useRef(null);
    const fullName = useRef(null);
    const dispatch = useDispatch();
    const updateUserVal = useSelector((store) => store.user);
    const navigate = useNavigate();

    const toggleSignInForm = () => {
        setSignIn(!signIn)
    }

    const handleOnClick = () => {
        const res = validateEmail(email.current.value, pwd.current.value)
        setErrorMess(res);
        if (res) return;

        //check if it's a sign in or sign up form
        if (!signIn) {
            //User to sign up form
            createUserWithEmailAndPassword(auth, email.current.value, pwd.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    dispatch(addUser({
                        'name': fullName.current.value,
                        'username': email.current.value,
                        'password': pwd.current.value,
                        'displayName': fullName.current.value,
                        'photoURL': "https://example.com/jane-q-user/profile.jpg"
                    }))
                    updateProfile(auth.currentUser, {
                        displayName: fullName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        navigate("/browse");
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMess(errorCode, ': ', errorMessage);
                });
        }


        if (signIn) {
            //user to sign in
            signInWithEmailAndPassword(auth, email.current.value, pwd.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    const currentUser = updateUserVal;
                    navigate("/browse");
                    // if(currentUser.username === email.current.value) {
                    //     dispatch(updateUser({
                    //         ['new-name']: 'New User'
                    //     }))
              
                    // } else {
                    //     navigate("/");
                    // }




                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMess(errorCode, ': ', errorMessage);
                });
        }

    }

    return (
        <div>
                 <Header />
            <div className="flex justify-center items-center">
                <img className="" alt="background" src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/4feb9207-c556-4619-91c1-810dc9c5a290/US-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
                <form className="h-[500px] w-[450px] absolute bg-black rounded-lg bg-opacity-80 p-[60px]" onSubmit={ (e) => e.preventDefault() }>
                    <h1 className="text-[#fff] mb-[30px] ml-5 font-medium text-2xl">{ signIn ? 'Sign In' : 'Sign Up' }</h1>
                    <div>
                        { !signIn && (<input className="h-[50px] w-[320px] bg-blackshade m-3 p-5 rounded md:backdrop-filter-none" placeholder="Full Name" ref={ fullName } />) }
                        <input className="h-[50px] w-[320px] bg-blackshade m-3 p-5 rounded md:backdrop-filter-none text-white" placeholder="Email or phone number" ref={ email } />
                        <input className="h-[50px] w-[320px] bg-blackshade m-3 p-5 rounded text-white" placeholder="Password" ref={ pwd } />
                        <p className="text-red-600 m-3 text-sm font-light">{ errorMess !== null && errorMess } </p>
                        <button className="h-[50px] w-[320px] bg-red-700 rounded text-white ml-3 mt-10" onClick={ handleOnClick }>{ signIn ? 'Sign In' : 'Sign Up' }</button>
                        <p className="text-white m-3 text-sm font-light cursor-pointer" onClick={ toggleSignInForm }>{ signIn ? 'New to Netflix? Sign Up' : 'Already, registered? Sign In' }</p>
                    </div>
                </form>
            </div>


        </div>

    )
}

//masking your image with a gradient example:
// linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(10,10,10,20.60) 20%)

export default Login
