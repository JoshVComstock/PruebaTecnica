import { useState, useEffect } from "react";
import { http } from "../utility/http";
type Estado = "cargando" | "listo" | "error";

interface ReturnData<T> {
    res: T | null
    getData: () => void
    estado: Estado
}
export const useGet = <T,>(route: string, llamar: boolean = true): ReturnData<T> => {
    const [res, setRes] = useState<T | null>(null);
    const [estado, setEstado] = useState<Estado>("cargando")

    const getData = async () => {
        try {
            const res = await fetch(`${http}${route}`);
            if (res.ok) {
                const resJson = await res.json();
                setRes(resJson);
                setEstado("listo");
            }
        } catch (error) {
   
            setEstado("error");
        }
    }
    useEffect(() => {
        if (llamar) {
            getData();
        }
    }, []);
    return { res, getData, estado }
}