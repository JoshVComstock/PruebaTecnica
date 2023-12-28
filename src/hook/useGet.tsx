import { useState, useEffect } from "react";
import { http } from "../utility/http";

interface ReturnData<T> {
    res: T | null
    getData: () => void
}
export const useGet = <T,>(route: string, llamar: boolean = true): ReturnData<T> => {
    const [res, setRes] = useState<T | null>(null);
    const getData = async () => {
        const res = await fetch(`${http}${route}`);
        if (res.ok) {
            const resJson = await res.json();
            setRes(resJson);
        }
    }
    useEffect(() => {
        if (llamar) {
            getData();
        }
    }, []);
    return { res, getData }
}