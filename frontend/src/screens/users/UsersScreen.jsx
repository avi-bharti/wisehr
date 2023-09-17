import { useEffect, useState } from "react";
import BreadCrumb from "../../components/widgets/Breadcrumb";
import { useGetUsersQuery } from "../../slices/userApiSlice";

const UsersScreen = () => {
   const {data:userList, isLoading, error} = useGetUsersQuery();


   const pages = [{
      name: 'Users',
      path: '/users'
   }];

   const buttons = [
    {
        name: 'Add',
        path: '/users/add',
        class: ''
    }
   ];
   return (  
      <main>
         <BreadCrumb title={'Users'} pages={pages} buttons={buttons}/>
         <div className="bottom-data">
                    <div className="orders">
                        <div className="header">
                            <i className='bx bx-receipt'></i>
                            <h3>Active Users</h3>
                            <i className='bx bx-filter'></i>
                            <i className='bx bx-search'></i>
                        </div>
                        <table>
                            <thead>
                              
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Department</th>
                                    <th>Created on</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {isLoading ? (
                              <tr><td colSpan='6'>Loading</td></tr>
                              ) : error ? (
                               <tr><td colSpan='6'>{error?.data?.message || error.message}</td></tr>
                            ) :(
                            <> 
                            {userList.map((user) => (
                                 <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role ?? 'N/A'}</td>
                                    <td>{user.department ?? 'N/A'}</td>
                                    <td>{new Date(user.createdAt).toDateString()}</td>
                                    <td>
                                        <i className="bx bx-pencil"></i>
                                    </td>
                                 </tr>
                                 ))}
                            </>
                            )}
                            </tbody>
                        </table>
                    </div>
                    </div>
      </main>
   );
}
 
export default UsersScreen;