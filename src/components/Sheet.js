import {Table} from "semantic-ui-react";

function Sheet(props) {
  const showDatos = props.datos.map(item => {
    return (
      <Table.Row>
        <Table.Cell>{item.Nombre}</Table.Cell>
        <Table.Cell>{item.Apellido}</Table.Cell>
        <Table.Cell>{item.Edad}</Table.Cell>
        <Table.Cell>{item.Nacionalidad}</Table.Cell>
      </Table.Row>
    );
  });

  console.log(props)

  return (
    <div>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellido</Table.HeaderCell>
            <Table.HeaderCell>Edad</Table.HeaderCell>
            <Table.HeaderCell>Nacionalidad</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{showDatos}</Table.Body>
      </Table>
    </div>
  );
}

export default Sheet;
