
import Interest from '../models/interest'

export const  getAllInterest = (req, res ) => {
 Interest.find({}).then((interests)=> {
   res.json({
     status: 'success',
     data: interests
   }).status(200)
 })
 
}
