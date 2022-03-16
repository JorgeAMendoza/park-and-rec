import mongoose from 'mongoose'

const gymSchema = new mongoose.Schema({
  name: String,
  openGymTimes: [
    {
      day: String,
      open: String,
      close: String,
    },
  ],
  recreationCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RecreationCenter',
  },
})

gymSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v
  },
})

export default mongoose.model('Gym', gymSchema)
