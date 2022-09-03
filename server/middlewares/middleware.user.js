import User from '../models/user';
  
  export const getUser = (type = '') => async(req, res, next) => {
    try {
        const email = req.body.email || req.decoded.email;
        const user = await User.findOne({ email });
      if (!user && type === 'authenticate') {
        return res.status(404)
         .json({
            status: 'error',
            message: 'User dose not exist.'
        });
      }
      if (user && type === 'validate') {
        return res.json({
          status: 'error',
          message: 'successfully confirms that user account already exists'
      }).status(400);
      }
      req.user = user;
      return next();
    } catch (error) {
      console.error(`getting user details from the database failed::`, error.message);
      return next(error);
    }
  };
  