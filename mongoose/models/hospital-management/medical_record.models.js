import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    }

},{timestamps: true});

export const MedicalRecord = mongoose.model( 'MedicalRecord', medicalRecordSchema )