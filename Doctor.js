import mongoose from 'mongoose'

const DoctorSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true},
        fullName: {type: String, required: true},
        doctorSpecialist: {type: String, required: true},
        specialization: []
    },
    { timestamps: true}
    
)
const Doctor = mongoose.model('Doctor', DoctorSchema)
export default Doctor