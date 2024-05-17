import { useRouter } from "next/router";
import React, {useEffect} from "react";

function useAuth() {
    const router = useRouter();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/FormLogin');
        }
    },[]);

    return null;
}

export default useAuth;