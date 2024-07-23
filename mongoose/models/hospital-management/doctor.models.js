import mongoose from "mongoose";

const HospitalDetailsSchema = new mongoose.Schema( {
    name: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    WorkingHours: {
        type: String,
        required: true
    }
})
const doctorSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    salary: {
        type: Number,
        required: true
    },
    workInHospital: [HospitalDetailsSchema]
}, { timestamps: true } );

export const Doctor = mongoose.model( 'Doctor', doctorSchema )