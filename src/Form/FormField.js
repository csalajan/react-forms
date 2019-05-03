import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FieldErrors from './FieldErrors'

class FormField extends Component {
  static propTypes = {
    name: PropTypes.string,
    field: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
  }

  constructor(props) {
    super(props);

    this.state = this.getFieldState(props.field);
  }

  getFieldState(field) {
    if (typeof field === 'object') {
      return {
        type: field.type,
      };
    } else {
      return {
        type: field,
      };
    }
  }

  getInputField = () => {
    const { type } = this.state;
    const { name, value, field } = this.props;

    if (field.renderInput && typeof field.renderInput === 'function') {
      return field.renderInput({value, onChange: this.props.onChange});
    }

    switch (type) {
      default:
        return (
          <input type='text' name={name} id={name} value={value} onChange={(event) => this.props.onChange(name, event.target.value)} />
        );
    }
  }

  render() {
    const { name, errors } = this.props;

    return (
      <div>
        <label htmlFor={name}>{name}</label>
        {this.getInputField()}
        {errors &&
          <div className='errors'>
            <FieldErrors errors={errors} />
          </div>
        }
      </div>
    );
  }
}

export default FormField;
