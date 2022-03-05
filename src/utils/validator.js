/* eslint-disable */
import { shouldUseMock } from './common';

export const RegexpType = {
  EMAIL: 'email',
  NUMBER: 'number',
  FLOAT: 'float',
  STRING: 'string',
  ADDRESS: 'address',
  ALPHA_NUMERIC: 'alphaNumeric',
  FISCAL_CODE: 'fiscalCode',
  POSTAL_CODE: 'postalCode',
  EAN: 'ean',
  PASSWORD: 'password',
  SPACEONLY: 'space',
  MOBILE_PHONE: 'mobile_phone',
  TELEPHONE: 'telephone'
};

const RegexpRule = {
  [RegexpType.EMAIL]: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi,
  [RegexpType.NUMBER]: /^\d+$/g,
  [RegexpType.FLOAT]: /(\d+(\.\d+)?)/,
  //[RegexpType.STRING]: /^[a-zA-Z0-9!@#$£€%^&*()_+\-=\[\]{};':"\\|,.<>°§\/?èéòàìùç ]*$/,
  [RegexpType.STRING]: /^.*$/,
  [RegexpType.ADDRESS]: /^[a-zA-Z0-9_\/.,èéòàìù'](?:[a-zA-Z0-9_\/.,'\sèéòàìù\-]+)?$/gi,
  [RegexpType.ALPHA_NUMERIC]: /^[a-z A-Z 0-9_.-]*$/gi,
  [RegexpType.FISCAL_CODE]: /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i,
  [RegexpType.POSTAL_CODE]: /^[0-9]{5}$/gm,
  [RegexpType.EAN]: /^(\d{13})?$/g,
  // [RegexpType.PASSWORD]: shouldUseMock() ? /^[a-z A-Z 0-9_.-]*$/gi : "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})",
  [RegexpType.PASSWORD]: /^[a-z A-Z 0-9_.-]*$/gi,
  [RegexpType.SPACEONLY]: /^\s/,
  [RegexpType.MOBILE_PHONE]: /^\+([0-9]*\-?\ ?\/?[0-9]*)$/,
  [RegexpType.TELEPHONE]: /^\+([0-9]*\-?\ ?\/?[0-9]*)$/
};

export const validator = (
  type = RegexpType.ALPHA_NUMERIC,
  data,
  required = false,
) => {
  if (required) {
    if (data !== undefined && data !== '' && data !== null) {
      return new RegExp(RegexpRule[type]).test(data);
    }
    return false;
  } else if (data !== undefined && data !== '' && data !== null) {
    return new RegExp(RegexpRule[type]).test(data);
  }
  return true;
};
