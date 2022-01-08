import { createElement, useState } from 'react';
import { printLine } from './modules/print';
import { render } from 'react-dom';
import { request, gql } from 'graphql-request';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const GET_ACCOUNT_ID = gql`
  query GetAccountByEmail($email: String!) {
    getAccountByEmail(email: $email) {
      id
    }
  }
`;
const getAccountID = async () => {
  const res = await request('http://localhost:8000/graphql', GET_ACCOUNT_ID, {
    email: 'iandjx@gmail.com',
  }).catch((err) => {
    console.log(err);
    return;
  });
  console.log(res);
};
console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

// var container = document.getElementById('main');
var temp = document.createElement('div');
var container = document.querySelector(
  '#main > div > div > div > div:nth-child(2) > div:nth-child(3)'
);
// console.log(container.attributes);
// const Button = () => {
//   const [counter, setCounter] = useState();

//   const handleClick = () => setCounter(counter + 1);
//   return (
//     <div>
//       <div>{counter && counter}</div>
//       <button onClick={() => setCounter(19)}>Helloo</button>
//     </div>
//   );
// };

// var button = createElement('button', {
//   children: 'hlllo',
//   onClick: () => getAccountID(),
// });
// button.innerHTML = 'click me';
// container.appendChild(button);

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

const element = (
  <div>
    {/* <Button variant="primary">Hellooo</Button> */}
    <App />
  </div>
);

render(element, temp);
container.appendChild(temp);
