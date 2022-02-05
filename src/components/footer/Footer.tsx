import React from 'react'
import s from './Footer.module.css'

export const Footer = () => {
    console.log('FOOTER')
    return (
        <div className={s.footer}>
            <div className={s.text}>Склонение слов онлайн</div>
            <div>@ 2022. All rights reserved.</div>
        </div>
    );
};
