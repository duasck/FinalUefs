"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [numNotas, setNumNotas] = useState(null);
    const [notas, setNotas] = useState([]);
    const [resultado, setResultado] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleNumNotasChange = (e) => {
        const quantidade = parseInt(e.target.value, 10);
        setNumNotas(quantidade);
        setNotas(Array(quantidade).fill(""));
        setResultado(null);
    };

    const handleNotaChange = (index, value) => {
        const valorFormatado = value.replace(",", ".");
        setNotas((prevNotas) => {
            const novasNotas = [...prevNotas];
            novasNotas[index] = valorFormatado;
            return novasNotas;
        });
    };

    const calcularMMPC = (notas) => {
        const notasValidas = notas
            .map((nota) => parseFloat(nota))
            .filter((nota) => !isNaN(nota));
        const MMPC =
            notasValidas.reduce((acc, nota) => acc + nota, 0) /
            notasValidas.length;

        if (MMPC >= 7.0) {
            return {
                MMPC: MMPC.toFixed(1),
                status: "Dispensado da AF e Aprovado",
                faltaParaAF: 0,
            };
        } else {
            const AFNecessaria = Math.max(0, (5 - MMPC * 0.6) / 0.4);
            return {
                MMPC: MMPC.toFixed(1),
                status: "Necessário realizar a AF",
                faltaParaAF: AFNecessaria.toFixed(1),
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const resultado = calcularMMPC(notas);
        setResultado(resultado);
    };

    if (!isClient) return null;

    return (
        <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Calculadora de Aprovação
                </h1>

            
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        Quantas notas deseja informar?
                    </label>
                    <select
                        className="w-full p-2 border rounded-md text-black"
                        value={numNotas || ""}
                        onChange={handleNumNotasChange}
                    >
                        <option value="" disabled>
                            Selecione
                        </option>
                        {[3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num} Notas
                            </option>
                        ))}
                    </select>
                </div>

             
                {numNotas && (
                    <form onSubmit={handleSubmit}>
                        {notas.map((nota, index) => (
                            <div className="mb-4" key={index}>
                                <label className="block text-sm font-medium mb-1">
                                    Nota {index + 1}:
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md text-black"
                                    value={notas[index]}
                                    onChange={(e) =>
                                        handleNotaChange(index, e.target.value)
                                    }
                                    required
                                />
                                {!/^\d+([.,]\d+)?$/.test(notas[index]) &&
                                    notas[index] !== "" && (
                                        <p className="text-red-500 text-sm mt-1">
                                            Nota inválida. Use apenas números,
                                            &quot;.&quot; ou &quot;,&quot;.
                                        </p>
                                    )}
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                        >
                            Calcular
                        </button>
                    </form>
                )}

               
                {resultado && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-md">
                        <h2 className="text-lg font-bold mb-2 text-black">
                            Resultado
                        </h2>
                        <p className=" text-black">
                            <strong>MMPC:</strong> {resultado.MMPC}
                        </p>
                        <p className=" text-black">
                            <strong>Status:</strong> {resultado.status}
                        </p>
                        {resultado.faltaParaAF > 0 && (
                            <p className=" text-black">
                                <strong>
                                    Nota mínima necessária na Avaliação Final:
                                </strong>{" "}
                                {resultado.faltaParaAF}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
