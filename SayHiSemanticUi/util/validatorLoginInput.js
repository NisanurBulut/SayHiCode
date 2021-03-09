module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if (username.trim() === '') {
      errors.username = 'Username must not be empty';
    }
    if (password.trim() === '') {
      errors.password = 'Password must not be empty';
    }

    return {
      errors,
      valid: Object.keys(errors).length < 1
    };
  };