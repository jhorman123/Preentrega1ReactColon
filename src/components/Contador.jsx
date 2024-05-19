import React, { useState } from 'react';

function Contador() {
    // Establecemos el estado inicial del contador
    const [contador, setContador] = useState(1);

    // Función para incrementar el contador
    const incrementar = () => {
        setContador(contador + 1);
    }

    // Función para decrementar el contador
    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <h2>Contador: {contador}</h2>
            {/* Botón para decrementar el contador */}
            <button onClick={decrementar}>
                Restar
            </button>
            {/* Botón para incrementar el contador */}
            <button onClick={incrementar}>
                Sumar
            </button>
        </div>
    );
}

export default Contador;