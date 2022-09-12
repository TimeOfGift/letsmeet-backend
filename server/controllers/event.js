import Event from '../models/event';

export const event = async (req, res, next) => {
    try {
        const { body, user } = req;
        const payload = {
            user_id: user.user_id, title: body.title, description: body.description, image_url: body.imageUrl, location: body.location,
            start_date: body.startDate, start_time: body.startTime, end_date: body.endDate, end_time: body.endTime,
            event_type_id: body.eventTypeId, number_of_Attendees: body.number0fAttendees, price: body.price,
            active: body.active, webinar_url: body.webinarUrl, webinar_id: body.webinarId
        };
        const eventDetails = await Event.create(payload);
        if (eventDetails) {
            return res.json({
                status: 'success',
                message: 'event successfully created',
                data: eventDetails
            }).status(201)
        };
    } catch (error) {
        console.error(`Error creating event:::, ${error.message}`)
        next(error)
    }
};

export const updateEvent = async (req, res, next) => {
    try {
        const { eventId } = req.params;
        const { body } = req;
        const payload = {
            title: body.title, description: body.description, image_url: body.imageUrl,
            location: body.location, number_of_Attendees: body.number0fAttendees, price: body.price,
            active: body.active, webinar_url: body.webinarUrl, webinar_id: body.webinarId
        };
        const event = await Event.findByIdAndUpdate(eventId, payload);
        if(!event){
            return res.json({
                status: 'success',
                message: 'Event successfully updated.',
                data: event
            }).status(200);
        };
        return res.json({
            status: 'success',
            message: 'event not found.',
        }).status(404);
    } catch (error) {
        console.error('Error updating event event', error.message)
        next(error)
    }
};

export const deleteEvent = async (req, res, next) => {
    try {
        const { eventId } = req.params;
        const event = await Event.findOne({ _id: eventId });
        if (event) {
            await Event.deleteOne({ _id: eventId });
            return res.json({
                status: 'error',
                message: 'Successfully delete interests.'
            }).status(200);
        };
        return res.json({
            status: 'error',
            message: 'event not found.'
        }).status(404);
    } catch (error) {
        console.error('Error deleting event', error.message)
        next(error)
    }
};
