import React from 'react'
import SocialLinks from '../social/social'
import SiteLogo from '../site-logo/site-logo'

export class SiteHeader extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <header className={'site-header'}>
                <div className={'centerer'}>
                    <div className={'site-header__contacts'}>
                        <div className={'site-header__email-phone'}>
                            <a className={'site-header__email'}>info@shopy.com</a>
                            <a className={'site-header__phone'}>996 - 5553 - 453</a>
                        </div>
                        <SocialLinks className={"site-header__social"}/>
                    </div>
                    <nav className={'site-header__site-navigation'}>
                        <a className={'site-header__logo-link'}>
                            <SiteLogo/>
                        </a>
                        <ul className={'site-header__main-nav'}>
                            <li><a>Home</a></li>
                            <li><a>Products</a></li>
                            <li><a>Hot Deals</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        <ul className={'site-header__extra-nav'}>
                            <li><input type={'search'}/></li>
                            <li><a>profile</a></li>
                            <li><a>cart</a></li>
                        </ul>
                    </nav>
                </div>
            </header>)
    }
}