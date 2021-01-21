import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './routes/App';
import { Hello } from './routes/Hello';

// const Hello = (props) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
console.log(App);

ReactDOM.render(
  <App />,
  document.getElementById("main")
);

// // Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./routes/Hello.tsx', () => render(Hello));
// }