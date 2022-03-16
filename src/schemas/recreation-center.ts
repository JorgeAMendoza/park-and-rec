import mongoose from 'mongoose'

const recreationCenterSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  address: String,
  description: [String],
  hours: [
    {
      day: String,
      open: String,
      close: String,
    },
  ],
  programs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Program',
    },
  ],
  pool: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pool',
  },
  gym: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gym',
  },
})

recreationCenterSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('RecreationCenter', recreationCenterSchema)
