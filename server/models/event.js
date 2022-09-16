import { model, Schema } from "mongoose";

const eventSchema = new Schema({
    user_id: String,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    event_type_id: {
        type: String,
        required: true
    },
    number_of_Attendees: Number,
    price: {
        type: String,
        required: true
    },
    active: Boolean,
    webinar_url: {
        type: String,
        required: true
    },
    webinar_id: {
        type: String,
        required: true
    }
},
{ timestamps: true }
);

export default model('Event', eventSchema);