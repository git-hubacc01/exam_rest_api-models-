import mongoose from 'mongoose'
import { PatientSchema } from './Patient.js'

const WardSchema = new mongoose.Schema(
    {
        version: { type: String, required: true, unique: true},
        room: {type: Number, required: true},
        WardId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ward',
            required: true
        },
        patients: [PatientSchema]
    },
    { timestamps: true }
)

const Ward = mongoose.model('Ward', WardSchema)
export default Ward