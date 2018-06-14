import React from 'react'
import IconFacebook from './facebook.svg'
import IconTwitter from './twitter.svg'
import IconGooglePlus from './google +.svg'
import IconInstagram from './instegram.svg'

const Social = (props) =>
{
    return(
        <ul className={(props.className ? props.className + " " : "") + 'social'}>
            <li className={'social_item'}>
                <a className={'social__facebook'}>
                    <img src={IconFacebook} alt={'link to Facebook'}/>
                </a>
            </li>
            <li className={'social_item'}>
                <a className={'social__twitter'}>
                    <img src={IconTwitter} alt={'link to Twitter'}/>
                </a>
            </li>
            <li className={'social_item'}>
                <a className={'social__google-plus'}>
                    <img src={IconGooglePlus} alt={'link to Google+'}/>
                </a>
            </li>
            <li className={'social_item'}>
                <a className={'social__instagram'}>
                    <img src={IconInstagram} alt={'link to Instagram'}/>
                </a>
            </li>
        </ul>)
};

export default Social;