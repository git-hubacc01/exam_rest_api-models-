import mongoose from 'mongoose'

export const PatientSchema = new mongoose.Schema(
    {
        code: {type: String, required: true, unique: true},
        patientName: {type: String, required: true},
        adresss: {type: String, required: true},
        age: {type: Number, required: true},
        bloodType: {type: String, required: true},
        specialization: String,
        medicalHistory: {type: String, required: true},
    },       
    { timestamps: true }
)

const Patient = mongoose.model('Patient', PatientSchema)
export default Patient