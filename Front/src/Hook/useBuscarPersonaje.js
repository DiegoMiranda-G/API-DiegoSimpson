import { useState } from 'react'

export default function useBuscarPersonaje() {

    const [nombre, setNombre] = useState('')
    const [personaje, setPersonaje] = useState(null)
    const [cargando, setCargando] = useState(false)

    async function buscar() {

        setCargando(true)

        try {
            const respuesta = await fetch('http://localhost:3000/personaje/' + nombre.trim())

            const datos = await respuesta.json()
            await new Promise(r => setTimeout(r, 1500))
            setPersonaje(datos)
        } catch (error) {
            console.error(error)
        } finally {
            setCargando(false)
        }

    }

    return { nombre, setNombre, personaje, buscar, cargando }

}