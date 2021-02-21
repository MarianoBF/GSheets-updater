import { Button, Form, Container, Header } from 'semantic-ui-react'
import {useState} from "react"
import axios from "axios"
import './App.css';

function App() {

const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [edad, setEdad] = useState("");
const [nacionalidad, setNacionalidad] = useState("");


const cambioNombre = (e) => {
 setNombre(e.target.value)
}

const cambioApellido = (e) => {
  setApellido(e.target.value)
 }

 
 const cambioEdad = (e) => {
  setEdad(e.target.value)
 }

 
 const cambioNacionalidad = (e) => {
  setNacionalidad(e.target.value)
 }
 


const submiteador = (e) => {
  e.preventDefault()
  const datos = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    nacionalidad: nacionalidad
  }
  axios.post("https://sheet.best/api/sheets/001713ed-b1af-40b8-99a5-ceca0f58a844", datos)
    .then(response => {console.log(response)})
  console.log(nombre, apellido, edad, nacionalidad)
}

  return (
<Container fluid>
        <Header as='h1'>Completá la planilla para mandar los datos a Google Sheets</Header>
        <Form onSubmit={submiteador}>
          <Form.Field>
            <label>Nombre</label>
            <input placeholder='Ingresá nombre' name="nombre" onChange={cambioNombre}/>
          </Form.Field>
          <Form.Field>
            <label>Apellido</label>
            <input placeholder='Ingresá apellido' name="apellido" onChange={cambioEdad}/>
          </Form.Field>
          <Form.Field>
            <label>Edad</label>
            <input placeholder='Ingresá edad' name= "edad" onChange={cambioApellido}/>
          </Form.Field>
          <Form.Field>
            <label>Nacionalidad</label>
            <input placeholder='Ingresá Nacionalidad' name="nacionalidad" onChange={cambioNacionalidad} />
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
  );
}

export default App;
