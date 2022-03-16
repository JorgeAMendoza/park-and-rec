import mongoose from 'mongoose'

const rentRoomSchema = new mongoose.Schema({
  roomName: String,
  maxOccupancy: Number,
  amenities: [String],
  perHourRate: Number,
  recreationCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RecreationCenter',
  },
})

export default mongoose.model('RentRoom', rentRoomSchema)
