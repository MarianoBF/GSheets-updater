import { Button, Form, Container, Header } from 'semantic-ui-react'
import {useState} from "react"
import axios from "axios"
import './App.css';

function App() {

const [nombre, setNombre] = useState("Juan");
const [apellido, setApellido] = useState("Pérez");
const [edad, setEdad] = useState("60");
const [nacionalidad, setNacionalidad] = useState("Argentina");

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
  console.log(e)
  //e.preventDefault()
  const datos = {
    Nombre: nombre,
    Apellido: apellido,
    Edad: edad,
    Nacionalidad: nacionalidad
  }
  axios.post("https://sheet.best/api/sheets/001713ed-b1af-40b8-99a5-ceca0f58a844", datos)
    .then(response => {console.log(response)})
}

  return (
<Container className="contenedor">
  <Header as='h2'>Completá la planilla para mandar los datos a Google Sheets</Header>
  <Form onSubmit={submiteador}>
    <Form.Field>
      <label>Nombre</label>
      <input placeholder='Juan' name="nombre" value={nombre} onChange={cambioNombre}/>
    </Form.Field>
    <Form.Field>
      <label>Apellido</label>
      <input placeholder='Perez' name="apellido" value={apellido} onChange={cambioApellido}/>
    </Form.Field>
    <Form.Field>
      <label>Edad</label>
      <input type="number" placeholder='60' name= "edad" max="120" min="1" onChange={cambioEdad}/>
    </Form.Field>
    <Form.Field>
      <label>Nacionalidad</label>
      <input placeholder='Argentina' name="nacionalidad" onChange={cambioNacionalidad} />
    </Form.Field>
    
    <Button color="blue" type='submit'>Submit</Button>
  </Form>
</Container>
  );
}

export default App;
