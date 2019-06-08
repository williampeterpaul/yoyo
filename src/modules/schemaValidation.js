const jsonschema = require('jsonschema').Validator;

const validator = new jsonschema();

const preferencesSchema = {
  id: '/Preferences',
  type: 'object',
  properties: {
    optional: { type: 'boolean' },
  },
  required: ['optional'],
};

const settingsSchema = {
  id: '/Settings',
  type: 'object',
  properties: {
    nickname: { type: 'string' },
    email: { type: 'string' },
  },
  required: ['nickname', 'email'],
};

const schema = {
  id: '/Schema',
  type: 'object',
  properties: {
    preferences: { $ref: '/Preferences' },
    settings: { $ref: '/Settings' },
  },
};

function validate(configuration) {
  validator.addSchema(preferencesSchema, '/Preferences');
  validator.addSchema(settingsSchema, '/Settings');

  const result = validator.validate(configuration, schema);

  return result.valid;
}

module.exports = {
  validate,
};
