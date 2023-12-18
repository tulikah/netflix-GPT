import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { removeUser, addUser } from '../redux/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    console.log('user', user);
    const dispatch = useDispatch();

    useEffect(() => {
       const authSubs = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, name, displayName, photoUrl } = user;

                dispatch(addUser({
                    username: email,
                    name: name,
                    displayName: displayName,
                    photoUrl: photoUrl
                }))
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        })
        return () => authSubs();
    }, [])

    const handleSignout = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
        }).catch((error) => {
            navigate('/error');
        });



    }

    return (

        <div className="absolute bg-gradient-to-b from-black w-full flex justify-between">
            <img className="h-[100px]  mt-[5px] ml-[20px] " alt="logo" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />

            { user &&
                <div className="flex">
                    <img alt="user-logo"
                        src="https://occ-0-472-448.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUcrlRM8xyfkeGhiHqMFbXm9Fu-GwxdUMvjjlox3gnVq0BOeram_lFujgH17JFQ3H4_egJmrav0rdoUcSag5RXS9qSBfz9FgSw.png?r=bd7"
                        className="w-10 h-10 m-7"
                    />
                    <button className="p-3 text-white" onClick={ () => handleSignout() }>Sign Out</button>
                </div>

            }

        </div>


    )
}

export default Header
