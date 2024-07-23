import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
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
    bloodGroup: {
        type: String,
        enum:['A+','A-','B+','B-','AB+','AB-','O+','O-'],
        required: true
    },
    gender:{
        type: String,
        enum:['male','female','other'],
        required: true
    },
    diagnoseDisease: {
        type: String,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    admittedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    }

},{timestamps: true});

export const Patient = mongoose.model( 'Patient', patientSchema )