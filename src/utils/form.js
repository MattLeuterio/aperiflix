export const newFormField = ({
  field = '', value = '', valid, type, required = false, touched = false
}) => ({
  field, value, valid: valid || !required, type, required, touched
});

export const newForm = (fields = [{}]) => {
  let form = {};
  fields.forEach(({
    field = '', valid = false, value, type, required, touched
  }) => {
    form = {
      ...form,
      [field]: {
        field, value, valid, type, required, touched
      }
    };
  });
  return form;
};

export const isValidForm = (form = {}) => {
  let isValid = true;
  Object.keys(form).forEach(key => {
    const { required = false, value, valid = false } = form[key];
    isValid = isValid && (required ? Boolean(value) && typeof valid !== 'string' && valid : valid && typeof valid !== 'string');
  });
  return isValid;
};
