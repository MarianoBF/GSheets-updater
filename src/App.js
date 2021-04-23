import {Button, Form, Container, Header} from "semantic-ui-react";
import {useState} from "react";
import axios from "axios";
import "./App.css";
import IframeGS from "./components/IframeGS";

function App() {
  const sampleValues = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 50,
    nacionalidad: "keniata",
  };

  const [renglon, setRenglon] = useState(sampleValues);

  const handleInput = e => {
    const {name, value} = e.target;
    setRenglon({...renglon, [name]: value});
  };

  const submiteador = e => {
    console.log(e);
    const datos = {
      Nombre: renglon.nombre,
      Apellido: renglon.apellido,
      Edad: renglon.edad,
      Nacionalidad: renglon.nacionalidad,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/001713ed-b1af-40b8-99a5-ceca0f58a844",
        datos
      )
      .then(response => {
        console.log(response)
        window.location.reload();
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <main>
      <Container className="contenedor">
        <Header as="h2">
          Completá la planilla para mandar los datos a Google Sheets
        </Header>
        <Form onSubmit={submiteador}>
          <Form.Field>
            <label>Nombre</label>
            <input
              placeholder="Juan"
              name="nombre"
              value={renglon.nombre}
              onChange={handleInput}
            />
          </Form.Field>
          <Form.Field>
            <label>Apellido</label>
            <input
              placeholder="Perez"
              name="apellido"
              value={renglon.apellido}
              onChange={handleInput}
            />
          </Form.Field>
          <Form.Field>
            <label>Edad</label>
            <input
              type="number"
              placeholder="60"
              name="edad"
              max="120"
              min="1"
              value={renglon.edad}
              onChange={handleInput}
            />
          </Form.Field>
          <Form.Field>
            <label>Nacionalidad</label>
            <input
              placeholder="Argentina"
              name="nacionalidad"
              value={renglon.nacionalidad}
              onChange={handleInput}
            />
          </Form.Field>

          <Button color="blue" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      <IframeGS/>

   </main>
  );
}

export default App;
