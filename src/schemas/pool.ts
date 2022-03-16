import mongoose from 'mongoose'

const poolSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: Number,
  description: [String],
  hours: [{ day: String, open: String, close: String }],
  recreationCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RecreationCenter',
  },
})

poolSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__V
  },
})

export default mongoose.model('Pool', poolSchema)
