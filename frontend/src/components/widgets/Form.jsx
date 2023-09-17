const Form = ({children}) => {
   return (  
      <div className="container">
         <div className="form-container">
            {children}
         </div>
      </div>
   );
}
 
export default Form;