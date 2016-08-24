import React from 'react';


 const Navbar = React.createClass({
   
   render: function () {
     return (
       <nav className="nav">
         <div className="nav-left">
           <a className="nav-item is-brand" href="#">
             <img src="/images/bulma.png" alt="Bulma logo}"/>
           </a>
         </div>

         <div className="nav-center">
           <a className="nav-item" href="#">
      <span className="icon">
        <i className="fa fa-github"/>
      </span>
           </a>
           <a className="nav-item" href="#">
      <span className="icon">
        <i className="fa fa-twitter"/>
      </span>
           </a>
         </div>

  <span className="nav-toggle">
    <span/>
    <span/>
    <span/>
  </span>

         <div className="nav-right nav-menu">
           <a className="nav-item" href="#">
             Home
           </a>
           <a className="nav-item" href="#">
             Documentation
           </a>
           <a className="nav-item" href="#">
             Blog
           </a>

    <span className="nav-item">
      <a className="button" >
        <span className="icon">
          <i className="fa fa-twitter"/>
        </span>
        <span>Tweet</span>
      </a>
      <a className="button is-primary" href="#">
        <span className="icon">
          <i className="fa fa-download"/>
        </span>
        <span>Download</span>
      </a>
    </span>
         </div>
       </nav>
     )
   }
   
 });

export default Navbar;