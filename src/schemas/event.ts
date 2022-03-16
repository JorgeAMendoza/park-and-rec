import mongoose from 'mongoose'

const eventSchmea = new mongoose.Schema({
  name: String,
  date: {
    day: String,
    start: String,
    end: String,
  },
  info: [String],
  features: [String],
  recreationCenter: {
    types: mongoose.Schema.Types.ObjectId,
    ref: 'RecreationCenter',
  },
})

eventSchmea.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Event', eventSchmea)
