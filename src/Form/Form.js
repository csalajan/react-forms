import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Validator from '../Validator';
import FormField from './FormField';

import styles from  './Form.css';

class Form extends Component {
  static propTypes = {
    name: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    config: PropTypes.object,
  }

  state = {
    errors: {},
    formFields: {},
  }

  componentDidMount() {
    this.validator = new Validator(this.props.config.fields);
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.validator.isValid(this.state.formFields)) {
      this.setState({
        errors: {},
      });
      this.props.onSubmit(this.state.formFields);
    } else {
      this.setState({
        errors: this.validator.errors,
      });
    }
  }

  updateValue = (field, value) => {
    this.setState((prevState) => ({
      formFields: {
        ...prevState.formFields,
        [field]: value,
      },
    }));
  }

  render() {
    const { name, config: { fields } } = this.props;
    const { formFields, errors } = this.state;
    return (
      <div>
        <form name={name} onSubmit={this.onSubmit} className={styles["tera-form"]}>
          {Object.entries(fields).map(([key, value]) =>
            <FormField
              key={key}
              name={key}
              field={value}
              value={formFields[key]}
              onChange={this.updateValue}
              errors={errors[key]}
            />
          )}
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
