import { Card, Stack, StackDivider } from '@chakra-ui/react'
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import { FormInput } from '../../core/ui/FormInput'

export function CardForm() {
    const [ name, setName] = useState("")
    const [ date, setDate] = useState("")
    const [ location, setLocation] = useState("")
    const [ description, setDescription] = useState("")
    function handleName(e: ChangeEvent<HTMLInputElement>){
        setName(e.target.value)
    }
    function handleDate(e: ChangeEvent<HTMLInputElement>){
        setDate(e.target.value)
    }
    function handleLocation(e: ChangeEvent<HTMLInputElement>){
        setLocation(e.target.value)
    }
    function handleDescription(e: ChangeEvent<HTMLInputElement>){
        setDescription(e.target.value)}

  return ( 
 <div> <Card margin="1rem">
 <form >
  
<FormInput
label="Nombre de evento"
onChange={handleName}
value= {name}
helperText="¿Que estas selebrando?"
placeholder='Ej: Cumpleños de Juanita'

/>
<FormInput
label="Fecha"
onChange={handleDate}
value= {date}
helperText="¿Cuando es el evento?"
placeholder="Ej: 24/12/2023"
type='date'
/>
<FormInput
label="Ubicacion"
onChange={handleLocation}
value= {location}
helperText="¿Donce sera el evento?"
placeholder="Ej: Paris, Texas"
/>
<FormInput
label="Descripcion"
onChange={handleDescription}
value= {description}
helperText="Algo divertido o remarcable del evento"
placeholder="Ej: Estarios felices que selebres con nosotros esta noche buena en familida, traer un regalo no menor de $200 para el intercambio"
/>

  </form>
  </Card>
    </div>
  )
}
