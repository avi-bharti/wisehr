import BreadCrumb from "../../components/widgets/Breadcrumb";

const RolesScreen = () => {
   const pages = [{
      name: 'Roles',
      path: '/roles'
   }];
   return (  
      <main>
         <BreadCrumb title={'Roles'} pages={pages} />
      </main>
   );
}
 
export default RolesScreen;