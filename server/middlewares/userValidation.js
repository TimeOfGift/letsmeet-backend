import validator from 'validator';


export const signUpValidator = (req, res, next) => {
  const {
    first_name, last_name, username, email, password
  } = req.body;
  const errors = {};
  if (first_name === undefined || email === undefined || password === undefined || last_name === undefined) {
    return res.status(400)
      .json({
        message: 'All or some of the field is/are undefined'
      });
  }
  if (!validator.isEmpty(first_name)) {
    for (let i = 0; i < first_name.length; i += 1) {
      if (validator.toInt(first_name[i])) {
        errors.first_name = 'first_name  must not contain numbers';
        break;
      }
    }
  } else { errors.first_name = 'first_name  is required'; }

  if (!validator.isEmpty(last_name)) {
    for (let i = 0; i < last_name.length; i += 1) {
      if (validator.toInt(last_name[i])) {
        errors.last_name = 'last_name  must not contain numbers';
        break;
      }
    }
  } else { errors.first_name = 'last_name  is required' }


  // if (!validator.isEmpty(username)) {
  //   if (!validator.isLength(username, { min: 2, max: 15 })) {
  //     errors.username = 'username must be between 2 to 100 characters';
  //   }
  // } else { errors.username = 'username  is required'; }

  if (!validator.isEmpty(email)) {
    if (!validator.isEmail(email)) {
      errors.email = 'Enter a valid email address';
    }
  } else { errors.email = 'email is required'; }
  if (!validator.isEmpty(password)) {
    if (!validator.isLength(password, { min: 8 })) {
      errors.password = 'password must be eight character or more';
    }
  } else { errors.password = 'password  is required'; }
  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }
  next();
}


export const signInValidator = (req, res, next) => {
  const { username, password, email } = req.body;
  const errors = {};

// const identifier = username || email;
  if (password === undefined || email === undefined) {
    return res.status(400)
      .json({
        status: 'error',
        message:'All or some of the field is/are undefined'
      });
  }
  if (validator.isEmpty(email)) {
    errors.email = 'email is required'
  } 

  if (!validator.isEmpty(password)) {
    if (!validator.isLength(password, { min: 6 })) {
      errors.password = 'password must be six character or more';
    }
  } else {
    errors.password = 'password  is required'
  }

  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }
  next();
}

