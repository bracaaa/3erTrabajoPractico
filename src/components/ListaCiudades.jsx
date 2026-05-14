import {Ciudad} from './Ciudad'

export function ListaCiudades({ciudades}){
    if (ciudades.length === 0){
        return <p>No hay ciudades para mostrar</p>
    }
    return (
        <div>
        {ciudades.map ((ciudad) => (
            <Ciudad key={Ciudad.place_id} ciudad={ciudad}/>
        ))}
        </div>
    )
}