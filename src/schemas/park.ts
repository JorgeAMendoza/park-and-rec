import mongoose from 'mongoose'

const parkSchema = new mongoose.Schema({
  name: String,
  address: String,
  description: [String],
  recreationCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RecreationCenter',
  },
})

parkSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Park', parkSchema)
