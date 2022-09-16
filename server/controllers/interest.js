
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

export const  getAllInterest = async(req, res, next) => {
  try {
    if(!req.query.name){
      const interest = await Interest.find();
        return res.json({
           status: 'success',
           data: interest
         }).status(200)
    }
    const interest = await Interest.find({ "name": { $regex: `.*${req.query.name}` }});
      return res.json({
         status: 'success',
         data: interest
       }).status(200)
  } catch (error) {
    console.error(`Error fetching interest:: ${error.message}`)
    next(error)
  }
}

export const  interest = async (req, res, next) => {
  try {
    const { interestId } = req.params;
   const interest = await Interest.findOne({ _id: interestId });
      if(interest){
        await Interest.deleteOne({ _id: interestId });
          return res.json({
            status: 'success',
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
