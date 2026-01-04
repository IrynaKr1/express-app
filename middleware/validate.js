const yup = require('yup');

module.exports.validateTaskOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedTask = await yup
      .object({
        title: yup.string().trim().min(5).max(100).required(),
        description: yup.string().trim().min(5).max(250).required(),
      })
      .validate(body);
    req.body = validatedTask;
    next();
  } catch (error) {
    console.log('error', error);
  }
};

module.exports.validateTaskOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedTask = await yup
      .object({
        title: yup.string().trim().min(5).max(100),
        description: yup.string().trim().min(5).max(250),
        isDone: yup.boolean(),
      })
      .validate(body);
    req.body = validatedTask;
    next();
  } catch (error) {
    console.log('error', error);
  }
};
