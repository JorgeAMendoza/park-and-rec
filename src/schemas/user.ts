import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minlength: 8,
  },
  name: String,
  passwordHash: String,
  favoriteCenters: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'RecreationCenter' },
  ],
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  },
})
export default mongoose.model('User', userSchema)
