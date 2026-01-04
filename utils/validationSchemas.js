const yup = require('yup');

const TITLE_VALIDATION_SCHEMA = yup.string().trim().min(5).max(100);
const DESCRIPTION_VALIDATION_SCHEMA = yup.string().trim().min(5).max(250);

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMA.required(),
  description: DESCRIPTION_VALIDATION_SCHEMA.required(),
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMA,
  description: DESCRIPTION_VALIDATION_SCHEMA,
});
