import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
   name: {
      type: String,
      required:true
   },
   department: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Department',
      required: true
   },
   isActive: {
      type: Boolean,
      default:true
   }
}, {timestamps:true})

const Role = mongoose.model('Role', RoleSchema);

export default Role;

