const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv();
addFormats(ajv);

const registerValidation = (body) => {
  const schema = {
    type: "object",
    properties: {
      name: {
        type: "string",
        maxLength: 255,
      },
      username: {
        type: "string",
        maxLength: 255
      },
      password: {
        type: "string",
        minLength: 6,
        maxLength: 1024,
      }
    },
    required: ["name", "username", "password"],
  };
  const valid = ajv.validate(schema, body);
  var error = ajv.errors;
  if (!valid) {
    error = ajv.errors[0].message;
  }

  return {
    valid,
    error,
  };
};

const loginValidation = (body) => {
  const schema = {
    type: "object",
    properties: {
      username: {
        type: "string",
        maxLength: 255
      },
      password: {
        type: "string",
        minLength: 6,
        maxLength: 1024,
      }
    },
    required: ["username", "password"],
  };
  const valid = ajv.validate(schema, body);
  var error = ajv.errors;
  if (!valid) {
    error = ajv.errors[0].message;
  }

  return {
    valid,
    error,
  };
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;