import React       from 'react'
import Contacts    from './contacts/contacts'
import SocialLinks from './social/social'
import SiteLogo    from '../site-logo/site-logo'
import NavMain     from './nav-main/nav-main'
import NavExtra     from './nav-extra/nav-extra'

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
                    <div className={'site-header__contacts-container'}>
                        <div  className={'site-header__contacts centerer'}>
                            <Contacts/>
                            <SocialLinks/>
                        </div>
                    </div>
                    <nav className={'site-header__nav-site centerer'}>
                        <a className={'site-header__site-logo'}>
                            <SiteLogo/>
                        </a>
                        <NavMain/>
                        <NavExtra className={'site-header__nav-extra'}/>
                    </nav>
            </header>)
    }
}