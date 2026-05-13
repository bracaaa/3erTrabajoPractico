import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function BuscadorCiudad(){
    return(
        <div>
            <h1>Busca una ciudad</h1>
            <input type = "text" placeholder="Ej. Buenos Aires..."/>
            <button>Buscar</button>
        </div>
    )
}