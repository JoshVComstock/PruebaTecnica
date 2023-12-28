import React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
interface PaginacionProps {
    total: number
}
const Paginacion = ({ total }: PaginacionProps) => {
    const [busqueda, setBusqueda] = useSearchParams({
        cantidad: "5",
        pagina: "1"
    });
    const cantidad = busqueda.get("cantidad") || "5";
    const pagina = busqueda.get("pagina") || "1";
    const cambiarPagina = (numero: number) => {
        setBusqueda(old => {
            old.set("pagina", String(Number(pagina) + numero));
            return old;
        },
            {
                replace: true
            }
        )
    }
    const max = Math.ceil(total / Number(cantidad));
    return (
        <div className="flex items-center space-x-4">
            <select
                className="border p-1 outline-none"
                id="resultsPerPage"
                value={cantidad}
                onChange={(e) => setBusqueda(old => {
                    old.set("cantidad", e.target.value);
                    old.set("pagina", "1")
                    return old;
                },
                    {
                        replace: true
                    }
                )}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <button
                className="px-2 py-1 bg-blue-500 text-white rounded"
                onClick={() => cambiarPagina(-1)}
                disabled={pagina === "1"}
            >
                Anterior
            </button>
            <span className="mx-2 text-white">Página {pagina} de {max}</span>
            <button
                className="px-2 py-1 bg-blue-500 text-white rounded"
                onClick={() => cambiarPagina(1)}
                disabled={Number(pagina) == max}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Paginacion;
