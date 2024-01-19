import { useState } from "react"

/*
el inicialForm es un objeto con la caracteristicas de nuestro formulario
*/
export const useForm = (inicialForm = {})=>{
   const [formState,setFormState] = useState(inicialForm);

    //evento para cambiar el input
    const inputChange = ({target}) =>{
        const {name,value} = target;//destructuramos esto ya que el target tiene 2 metodos uno para name y otro para value

        //manejemos el set de form
        setFormState({
            ...formState,
            [name]:value
        })
    }
    
    //funcionalidad para resetear form
    const resetarForm = ()=>{
       setFormState(inicialForm) 
    }
    return { 
       formState,inputChange,resetarForm
    }
}