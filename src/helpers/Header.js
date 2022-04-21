import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {


    return (

        <nav>
            {/*<NavLink to='/' exact>
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>Logout</Button>
    </NavLink>*/}
            <NavLink to='/usercomp' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>List</Button>
    </NavLink>

            <NavLink to='/posts' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>Posts</Button>
            </NavLink>
            <NavLink to='/postdata' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>PostData</Button>

            </NavLink>
            <NavLink to='/signup' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>SignUp</Button>
            </NavLink>
            <NavLink to='/fetchData' >
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>FetchData</Button>
            </NavLink>
            <NavLink to='/form' exact>
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>Form</Button>
            </NavLink>
            <NavLink to='/tablelist' exact>
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>TableList</Button>
            </NavLink>
            <NavLink to='/timer' exact>
                <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>Timer</Button>
            </NavLink>

        

        </nav>

    )
}

export default Header