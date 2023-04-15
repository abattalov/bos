import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Badge} from '@mui/material';

export default function Footer() {

    const navigateToFacebook = () => {
        window.open('https://www.facebook.com/Beacon-of-Strength-101314872784549')
        }

    return (
        <div className='footer'>
            <div>
                <div className='social-media'>
                <Badge onClick={navigateToFacebook}>
                    <FacebookIcon/>
                </Badge>
                <Badge>
                    <InstagramIcon/>
                </Badge>
                </div>
            </div>
            <div>
                <h3>Telephone: 218-461-2118</h3>
            </div>
            <div className='copywrite'>&#169; 2023 Beacon of Strength</div>
        </div>
  )
}
