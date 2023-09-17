import { Link } from "react-router-dom";

const BreadCrumb = ({title, pages, buttons}) => {
   return (  
      <div className="header">
                    <div className="left">
                        <h1>{title}</h1>
                        {pages && (<ul className="breadcrumb">
                           {pages.map((p) => (
                            <li key={p.name}><Link to={p.path}>{p.name}</Link></li>
                           ))}
                        </ul>)}
                    </div>
                    <div className="right">
                     {buttons && buttons.map((b) => (
                        <Link to={b.path ?? '/'} className={`report ${b.class}`} key={b.name}>
                           <span>{b.name}</span>
                        </Link>
                     ))}
                    </div>

                </div>
   );
}
 
export default BreadCrumb;