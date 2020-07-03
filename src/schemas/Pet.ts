import { Schema, Document, model } from 'mongoose'

interface PetInterface extends Document {
  name?: string,
  description?: string,
  images?: string[],
  status?: number,
  size?: string,
  pageId?: string,
  sex?: string,
  video?: string
}

const PetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: Array,
  status: Number,
  size: String,
  pageId: String,
  sex: String,
  video: String
})

export default model<PetInterface>('Pet', PetSchema)
