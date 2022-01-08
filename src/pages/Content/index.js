import { createElement } from 'react';
import { printLine } from './modules/print';
import { render } from 'react-dom';
import { request, gql } from 'graphql-request';

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

var container = document.getElementById('main');
var button = createElement('button', {
  children: 'hlllo',
  onClick: () => getAccountID(),
});
// button.innerHTML = 'click me';
// container.appendChild(button);

render(button, container);
