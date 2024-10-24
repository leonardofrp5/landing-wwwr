import mongoose, { Document, Model, Schema } from 'mongoose'

interface SessionI extends Document {
  name: string
  phoneNumber: string
  rh: string
  location: string
  kms: string
  emergencyPhoneNumber: string
  isVerified: boolean
  countryCode: string
  scheduledTime: Date
  verificationAttemps: any[]
}

export const SessionSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  rh: { type: String, required: true },
  location: { type: String, required: true },
  kms: { type: String, required: true },
  emergencyPhoneNumber: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  countryCode: { type: String, required: true, default: '+57' },
  scheduledTime: { type: Date, required: true },
  verificationAttemps: { type: Array, require: false }
}, {
  timestamps: true
})

export const Session: Model<SessionI> = mongoose.models.Session || mongoose.model<SessionI>('Session', SessionSchema)
