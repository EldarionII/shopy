import React from 'react'

const NavExtra = (props) =>
{
    return(
        <ul className={(props.className ? props.className + " " : "") + 'nav-extra'}>
            <li className={'nav-extra__item'}><input type={'search'}/></li>
            <li className={'nav-extra__item'}><a>profile</a></li>
            <li className={'nav-extra__item'}><a>cart</a></li>
        </ul>)
};

export default NavExtra;