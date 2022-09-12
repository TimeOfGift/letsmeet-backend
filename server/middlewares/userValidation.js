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

export const eventValidator = (req, res, next) => {
  const {
    title, description, imageUrl, location,
    startDate, startTime, endDate, endTime, eventTypeId, number0fAttendees, price,
    active, webinarUrl, webinarId
  } = req.body;
  const errors = {};
  if (title === undefined || description === undefined || imageUrl === undefined || location === undefined ||
    startDate === undefined || startTime === undefined || endDate === undefined || endTime === undefined || eventTypeId === undefined ||
    number0fAttendees === undefined || price === undefined || active == undefined || webinarUrl === undefined || webinarId === undefined) {
    return res.json({
      message: 'All or some of the field is/are missing'
    }).status(422)
  }

  if (!validator.isEmpty(title)) {
    if (!validator.isLength(title, { min: 5, max: 50 })) {
      errors.username = 'title must be between  to 50 characters';
    }
  } else { errors.username = 'title  is required'; }

  if (!validator.isEmpty(description)) {
    if (!validator.isLength(description, { min: 25, max: 250 })) {
      errors.description = 'description must be between 25 to 100 characters';
    }
  } else { errors.description = 'description  is required'; }

  if (!validator.isEmpty(imageUrl)) {
    if (!validator.isLength(imageUrl, { protocols: ['http', 'https', 'ftp'] })) {
      errors.imageUrl = 'imageUrl  must be of type string url';
    }
  } else { errors.imageUrl = 'imageUrl  is required'; }

  if (!validator.isEmpty(location)) {
    if (!validator.isLength(location, { min: 3, max: 50 })) {
      errors.location = 'location must be between 5 to 50 characters';
    }
  } else { errors.location = 'location  is required'; }

  if (!validator.isEmpty(startDate)) {
    if (!validator.isLength(startDate, { min: 5, max: 25 })) {
      errors.startDate = 'startDate must be between 5 to 25 characters';
    }
  } else { errors.startDate = 'startDate  is required'; }

  if (!validator.isEmpty(startTime)) {
    if (!validator.isLength(startTime, { min: 5, max: 25 })) {
      errors.startTime = 'startTime must be between 5 to 25 characters';
    }
  } else { errors.startTime = 'startTime  is required'; }

  if (!validator.isEmpty(endDate)) {
    if (!validator.isLength(endDate, { min: 5, max: 25 })) {
      errors.endDate = 'endDate  must be between 5 to 25 characters';
    }
  } else { errors.endDate = 'endDate  is required'; }

  if (!validator.isEmpty(endTime)) {
    if (!validator.isLength(endTime, { min: 5, max: 25 })) {
      errors.endTime = 'endTime  must be between 5 to 25 characters';
    }
  } else { errors.endTime = 'endTime  is required'; }

  if (!validator.isEmpty(eventTypeId)) {
    if (!validator.isLength(eventTypeId, { min: 1, max: 25 })) {
      errors.eventTypeId = 'eventTypeId  must be between 1 to 25 characters';
    }
  } else { errors.eventTypeId = 'eventTypeId  is required'; }

  if (!validator.isEmpty(number0fAttendees)) {
    if (!validator.isNumeric(number0fAttendees, {no_symbols: true})) {
      errors.number0fAttendees = 'number0fAttendees  must be of type number';
    }
  } else { errors.number0fAttendees = 'number0fAttendees  is required'; }

  if (!validator.isEmpty(price)) {
    if (!validator.isFloat(price, { min: 0.00, max: 1000000.00 })) {
      errors.price = 'price  must be of type number';
    }
  } else { errors.price = 'price  is required'; }

  if (!validator.isEmpty(active)) {
    if (!validator.isBoolean(active, { loose: false })) {
      errors.active = 'active  must be of type boolean';
    }
  } else { errors.active = 'active  is required'; }

  if (!validator.isEmpty(webinarUrl)) {
    if (!validator.isLength(webinarUrl, {  min: 5, max: 250 })) {
      errors.webinarUrl = 'webinarUrl must be between 5 to 250 characters';
    }
  } else { errors.webinarUrl = 'webinarUrl  is required'; }

  if (!validator.isEmpty(webinarId)) {
    if (!validator.isLength(webinarId, { min: 5, max: 50 })) {
      errors.webinarId = 'webinarId must be between 5 to 50 characters';
    }
  } else { errors.webinarId = 'webinarId  is required'; }

  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }
  next();
};

export const updateEventValidator = (req, res, next) => {
  const {
    title, description, imageUrl, location, 
    number0fAttendees, price, active, webinarUrl, webinarId
  } = req.body;
  const errors = {};
  if (title === undefined || description === undefined || imageUrl === undefined || 
    location === undefined ||number0fAttendees === undefined || price === undefined || 
    active == undefined || webinarUrl === undefined || webinarId === undefined) {
    return res.json({
      message: 'All or some of the field is/are missing'
    }).status(422)
  }

  if (!validator.isEmpty(title)) {
    if (!validator.isLength(title, { min: 5, max: 50 })) {
      errors.username = 'title must be between  to 50 characters';
    }
  } else { errors.username = 'title  is required'; }

  if (!validator.isEmpty(description)) {
    if (!validator.isLength(description, { min: 25, max: 250 })) {
      errors.description = 'description must be between 25 to 100 characters';
    }
  } else { errors.description = 'description  is required'; }

  if (!validator.isEmpty(imageUrl)) {
    if (!validator.isLength(imageUrl, { protocols: ['http', 'https', 'ftp'] })) {
      errors.imageUrl = 'imageUrl  must be of type string url';
    }
  } else { errors.imageUrl = 'imageUrl  is required'; }

  if (!validator.isEmpty(location)) {
    if (!validator.isLength(location, { min: 3, max: 50 })) {
      errors.location = 'location must be between 5 to 50 characters';
    }
  } else { errors.location = 'location  is required'; }

  if (!validator.isEmpty(number0fAttendees)) {
    if (!validator.isNumeric(number0fAttendees, {no_symbols: true})) {
      errors.number0fAttendees = 'number0fAttendees  must be of type number';
    }
  } else { errors.number0fAttendees = 'number0fAttendees  is required'; }

  if (!validator.isEmpty(price)) {
    if (!validator.isFloat(price, { min: 0.00, max: 1000000.00 })) {
      errors.price = 'price  must be of type number';
    }
  } else { errors.price = 'price  is required'; }

  if (!validator.isEmpty(active)) {
    if (!validator.isBoolean(active, { loose: false })) {
      errors.active = 'active  must be of type boolean';
    }
  } else { errors.active = 'price  is required'; }

  if (!validator.isEmpty(webinarUrl)) {
    if (!validator.isLength(webinarUrl, {  min: 5, max: 250 })) {
      errors.webinarUrl = 'webinarUrl must be between 5 to 250 characters';
    }
  } else { errors.webinarUrl = 'webinarUrl  is required'; }

  if (!validator.isEmpty(webinarId)) {
    if (!validator.isLength(webinarId, { min: 5, max: 50 })) {
      errors.webinarId = 'webinarId must be between 5 to 50 characters';
    }
  } else { errors.webinarId = 'webinarId  is required'; }

  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }
  next();
};
