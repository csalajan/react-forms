import { isObjectEmpty } from '../helpers';
import * as Validators from './Validators';

class Validator {
  fields = [];
  errors = {};

  constructor(fields) {
    Object.entries(fields).forEach(([key, value]) => {
      this.fields.push({
        name: key,
        value,
      });
    });
  }

  validate(validator, field, value) {
    if (!Validators[validator]) {
      throw new Error(`Invalid Form Validator: ${validator}`);
    }

    if (!Validators[validator](value)) {
      if (!this.errors[field]) {
        this.errors[field] = [
          {
            validator,
            value,
          },
        ];
      } else {
        this.errors[field].push({
          validator,
          value,
        });
      }
    }
  }

  isValid = (values) => {
    this.errors = {};
    this.fields.forEach(field => {
      if (!field.value.validators) {
        return;
      }

      if (Array.isArray(field.value.validators)) {
        field.value.validators.forEach(validator => this.validate(validator, field.name, values[field.name]));
      } else {
        this.validate(field.value.validators, field.name, values[field.name]);
      }
    });

    return isObjectEmpty(this.errors);
  }
};

export default Validator;
