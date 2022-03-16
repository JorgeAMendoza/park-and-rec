import mongoose from 'mongoose'

const fitnessRoomSchema = new mongoose.Schema({
  name: String,
  description: [String],
  amenities: [String],
  hours: [
    {
      day: String,
      open: String,
      close: String,
    },
  ],
  prices: {
    dayPrice: Number,
    monthlyPrice: [
      {
        ageRange: String,
        price: Number,
      },
    ],
  },
  recreationCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RecreationCenter',
  },
})

fitnessRoomSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('FitnessRoom', fitnessRoomSchema)
