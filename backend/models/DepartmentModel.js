import mongoose from "mongoose";

const DepartmentSchema = mongoose.Schema({
   name: {
      type: String,
      required:true
   },
   isActive: {
      type: Boolean,
      default: true
   }
}, {timestamps:true})

const Department = mongoose.model('Department', DepartmentSchema);

export default Department;