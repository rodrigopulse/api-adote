import { Schema, Document, model } from 'mongoose'

interface PageInterface extends Document {
  title?: string
  subtitle?: string,
  description?: string,
  admins?: string[],
  logo?: string,
}

const PageSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  subtitle: String,
  description: String,
  admins: Array,
  logo: String
}, {
  timestamps: true
})

export default model<PageInterface>('Page', PageSchema)
