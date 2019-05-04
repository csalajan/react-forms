import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FieldErrors from './FieldErrors';

import styles from './Form.css';

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

    if (field.component) {
      return <field.component name={name} id={name} value={value} onChange={(event) => this.props.onChange(name, event.target.value)} />;
    }

    switch (type) {
      case 'radio':
        return <input className={styles["form-field-input"]} type="radio" name={name} id={name} value={value} onChange={(event) => this.props.onChange(name, event.target.checked)} />;
      case 'checkbox':
        return <input className={styles["form-field-input"]} type="checkbox" name={name} id={name} value={value} onChange={(event) => this.props.onChange(name, event.target.checked)} />;
      case 'textarea':
        return <textarea rows={field.rows} className={styles["form-field-input"]} name={name} id={name} value={value} onChange={(event) => this.props.onChange(name, event.target.value)} />;
      default:
        return (
          <input className={[styles["form-field-input"]]} type='text' name={name} id={name} value={value} onChange={(event) => this.props.onChange(name, event.target.value)} />
        );
    }
  }

  capitalize(value) {
    return value[0].toUpperCase() + value.slice(1);
  }

  render() {
    const { name, errors } = this.props;

    return (
      <div className={styles["form-field"]}>
        <label className={styles["form-field-label"]} htmlFor={name}>{this.capitalize(name)}</label>
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
