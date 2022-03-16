import mongoose from 'mongoose'

const programSchema = new mongoose.Schema({
  name: String,
  description: [String],
  benefits: [String],
  hours: [
    {
      day: String,
      start: String,
      end: String,
    },
  ],
  price: [
    {
      ageRange: String,
      price: Number,
    },
  ],
  recreationCenter: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RecreationCenter',
    },
  ],
})

programSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Program', programSchema)
