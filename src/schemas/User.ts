import { Schema, Document, model } from 'mongoose'
import bcrypt from 'bcrypt'
interface UserInterface extends Document {
  email?: string
  firstName?: string,
  lastName?: string,
  password?: string,
  fullName(): string
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  firstName: String,
  lastName: String,
  password: String
}, {
  timestamps: true
})

UserSchema.pre<UserInterface>('save', async function (next) {
  try {
    // Criptografa a senha
    this.password = await bcrypt.hash(this.password, 12)
    return next()
  } catch (err) {
    return next(err)
  }
})

UserSchema.methods.fullName = function (): string {
  return this.firstName + ' ' + this.lastName
}

export default model<UserInterface>('User', UserSchema)
