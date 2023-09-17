import asyncHandler from "../middlewares/asyncHandler.js";
import Holiday from "../models/HolidayModel.js";


const getHolidays = asyncHandler(async(req,res) => {
   const holidays = await Holiday.find();
   res.status(200).json(holidays);
})

const saveHolidays = asyncHandler(async(req,res) => {
   const {name,fromDate,toDate, holidayId} = req.body;

   if(holidayId && holidayId != null){
      const fetchedHoliday = await Holiday.findById(holidayId);
      if(fetchedHoliday){
         fetchedHoliday.name = name;
         fetchedHoliday.fromDate = fromDate;
         fetchedHoliday.toDate = toDate;
         let storedHoliday = await fetchedHoliday.save();
         res.status(200).json(storedHoliday)
      }else{
         res.status(404);
         throw new Error('Holiday not found')
      }
   }else{
      let storedHoliday = await Holiday.create({name,fromDate,toDate});
      res.status(201).json(storedHoliday)
   }
})

const deleteHoliday = asyncHandler (async(req,res) => {
   const {_id} = req.body;
   const deleted = await Holiday.findByIdAndDelete(_id);
   res.status(200).json(deleted)
})


export {
   getHolidays, saveHolidays,deleteHoliday
}
