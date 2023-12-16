import React, { useState } from 'react'

const Login = () => {
    const [signIn, setSignIn] = useState(true);

    const toggleSignInForm = () => {
        setSignIn(!signIn)
    }

    return (
        <div>
            <div className="flex justify-center items-center">
                <img className="" alt="background" src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/4feb9207-c556-4619-91c1-810dc9c5a290/US-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
                <form className="h-[500px] w-[450px] absolute bg-black rounded-lg bg-opacity-80 p-[60px]">
                    <h1 className="text-[#fff] mb-[30px] ml-5 font-medium text-2xl">{ signIn ? 'Sign In' : 'Sign Up' }</h1>
                    <div className="">
                        { !signIn &&
                            <>
                                <input className="h-[50px] w-[320px] bg-blackshade m-3 p-5 rounded md:backdrop-filter-none" placeholder="Full Name" />
                            </>

                        }
                        <input className="h-[50px] w-[320px] bg-blackshade m-3 p-5 rounded md:backdrop-filter-none" placeholder="Email or phone number" />
                        <input className="h-[50px] w-[320px] bg-blackshade m-3 p-5 rounded" placeholder="Password" />
                        <button className="h-[50px] w-[320px] bg-red-700 rounded text-white ml-3 mt-10">{ signIn ? 'Sign In' : 'Sign Up' }</button>
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
