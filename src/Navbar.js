import React from 'react';
// import Link from 'react-router-dom'
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {

   

     const chngingred = () =>{
         props.threecolor(1);
     }
     const chnginggreen = () =>{
        props.threecolor(3);
    }
    const chngingyellow = () =>{
        props.threecolor(2);
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.num ===1 ? 'dark' :props.mode} bg-${props.num ===1 ? 'dark' :props.mode}`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/">TextChngr</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item" >
                                <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">Contact us</NavLink>
                            </li>

                        </ul>
                        {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-danger" onClick = {chngingred}>Red</button>
                            <button type="button" className="btn btn-warning" onClick = {chngingyellow}>Yellow</button>
                            <button type="button" className="btn btn-success" onClick = {chnginggreen}>Green</button>
                        </div>

                        <div className={`mx-2 form-check form-switch text-${props.mode === 'dark' || props.num === 1 ? 'light' : 'dark'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.togglemode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;

