import React from 'react'

const NavMain = (props) =>
{
    return(
        <ul className={'nav-main'}>
            <li className={'nav-main__item'}><a className={'active'}>Home</a></li>
            <li className={'nav-main__item'}><a>Products</a></li>
            <li className={'nav-main__item'}><a>Hot Deals</a></li>
            <li className={'nav-main__item'}><a>About</a></li>
            <li className={'nav-main__item'}><a>Contact</a></li>
        </ul>)
};

export default NavMain;