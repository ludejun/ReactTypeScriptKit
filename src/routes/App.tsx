import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Hello } from './Hello';


export default class App extends React.Component<{}, {}> {
  render () {
    return (
      <Hello compiler = 'TypeScript' framework = 'React' />
    )
  }
}