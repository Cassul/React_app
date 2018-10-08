import React, { Component } from 'react';
import '@zendeskgarden/react-textfields/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { TextField, Label, Hint, Input, Message } from '@zendeskgarden/react-textfields';
import './App.css';
import $ from 'jquery'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider>
          <TextField>
            <Label>Login</Label>
            <Hint>please enter your email</Hint>
            <Input placeholder="email" />
          </TextField>
        </ThemeProvider>
        <ThemeProvider>
          <TextField>
            <Label>Password</Label>
            <Hint>please enter your password</Hint>
            <Input placeholder="password" />
          </TextField>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
