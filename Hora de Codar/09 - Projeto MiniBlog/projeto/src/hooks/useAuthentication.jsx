import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react';

const useAuthentication = () => {

 const [error,setError]=useState(null);
 const [loading,setLoading]=useState(null);

}

export default useAuthentication;