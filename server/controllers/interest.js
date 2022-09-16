
import Interest from '../models/interest'

export const  createInterest = async(req, res, next) => {
  try {
    const { body: { name }, user } = req;
    const payload = { user_id: user.user_id, name, is_selected: false }
   const interest = await Interest.create(payload);
   return res.json({
    status: 'success',
    message: 'Interest created successfully',
    data: interest
   });
  } catch (error) {
    console.error(`Error creating interest:: ${error.message}`)
    next(error)
  }
};

export const  getAllInterest = (req, res ) => {
 Interest.find({}).then((interests)=> {
  return res.json({
     status: 'success',
     data: interests
   }).status(200)
 })
}

export const  interest = async (req, res, next) => {
  try {
    const { interestId } = req.params;
   const interest = await Interest.findOne({ _id: interestId });
      if(interest){
        await Interest.deleteOne({ _id: interestId });
          return res.json({
            status: 'error',
            message: 'Successfully delete interests.'
          }).status(200);
      };

      return res.json({
        status: 'error',
        message: 'Interest not found.'
      }).status(404);
  } catch (error) {
    console.error(`Error deleting interest:: ${error.message}`)
    next(error)
  }
  };
