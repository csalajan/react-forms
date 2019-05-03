import React, { Component } from 'react';

import Form, { Validators } from 'react-tera-forms';

export default class App extends Component {
  onSubmit(values) {
    console.log(values);
  }

  render () {
    return (
      <div>
        <Form
          name='My Form'
          onSubmit={this.onSubmit}
          config={{
            fields: {
              name: 'text',
              place: {
                type: 'text',
                validators: Validators.REQUIRED,
              },
              number: {
                type: 'text',
                validators: [
                  Validators.REQUIRED,
                  Validators.NUMBER,
                ],
              },
              home: {
                type: 'text',
                validators: [
                  Validators.REQUIRED,
                ],
                renderInput: ({value, onChange}) => (
                  <textarea name='Home' value={value} onChange={(event) => onChange('home', event.target.value)} />
                ),
              },
            },
          }}
        />
      </div>
    );
  }
}
