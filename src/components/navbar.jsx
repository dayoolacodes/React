import React from 'react';

// class NavBar extends Component {
//     render() {
//         return ( <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#home">Navbar
//           <span className="badge badge-info badge-pill shadow m-2">{this.props.totalCounter}</span>
//         </a>
//       </nav>  );
//     }
// }
 
// export default NavBar;
const NavBar = ({totalCounter}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
         <a className="navbar-brand" href="#home">Navbar
           <span className="badge badge-info badge-pill shadow m-2">{totalCounter}</span>
         </a>
     </nav> 
        
     );

     
}
 
export default NavBar;