import mongoose from "mongoose";

const HolidaySchema = mongoose.Schema({
   name: {
      type: String,
      required:true
   },
   fromDate: {
      type: String,
      required:true
   },
   toDate: {
      type: String,
      required:true
   }
}, {timestamps:true})

const Holiday = mongoose.model('Holiday', HolidaySchema);

export default Holiday;