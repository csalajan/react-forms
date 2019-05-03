# react-forms

> Forms for React

[![NPM](https://img.shields.io/npm/v/react-forms.svg)](https://www.npmjs.com/package/react-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tera-forms
```

## Usage

```jsx
import React, { Component } from 'react'

import Form, { Validators } from 'react-tera-forms'

class Example extends Component {
  render () {
    return (
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
    )
  }
}
```

## License

MIT © [csalajan](https://github.com/csalajan)
