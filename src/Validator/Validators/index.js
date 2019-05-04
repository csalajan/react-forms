import { isObjectEmpty } from '../../helpers';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Required = (value) => {
  if (typeof value === 'object') {
    return !isObjectEmpty(value);
  }

  return !!value;
};

export const RequiredTrue = (value) => {

};

export const Number = (value) => {
  return !isNaN(parseInt(value));
};

export const Email = (value) => {
  return emailRegex.test(value);
};

export const Min = (value) => {

};

export const Max = (value) => {

};
