import React from 'react'
import s from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    console.log('Footer')
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <div className={s.footerSocial}>
                    <a href="https://www.facebook.com/mona.magomedova"><FontAwesomeIcon icon={faFacebookF}/></a>
                    <a href="https://t.me/mona_mag21"><FontAwesomeIcon icon={faTelegramPlane}/></a>
                    <a href="https://github.com/MonaMag"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="http://linkedin.com/in/manarsha-magomedova-21372283">
                        <FontAwesomeIcon icon={faLinkedinIn}/></a>
                </div>
                <div className={s.copyright}>@ 2022 | mona | All rights reserved</div>
            </div>
        </div>
    )
}
