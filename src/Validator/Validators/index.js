import { isObjectEmpty } from '../../helpers';

export const Required = (value) => {
  if (typeof value === 'object') {
    return !isObjectEmpty(value);
  }

  return !!value;
};

export const Number = (value) => {
  return !isNaN(parseInt(value));
};
