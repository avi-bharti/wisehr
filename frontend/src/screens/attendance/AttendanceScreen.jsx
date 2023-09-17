import BreadCrumb from "../../components/widgets/Breadcrumb";

const AttendanceScreen = () => {
   const pages = [{
      name: 'Attendance',
      path: '/attendance'
   }];
   return (  
      <main>
         <BreadCrumb title={'Attendance'} pages={pages} />
      </main>
   );
}
 
export default AttendanceScreen;