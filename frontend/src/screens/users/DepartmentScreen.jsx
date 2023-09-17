import BreadCrumb from "../../components/widgets/Breadcrumb";

const DepartmentScreen = () => {
   const pages = [{
      name: 'Departments',
      path: '/departments'
   }];
   return (  
      <main>
         <BreadCrumb title={'Departments'} pages={pages} />
      </main>
   );
}
 
export default DepartmentScreen;