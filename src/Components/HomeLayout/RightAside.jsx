 import React from 'react';
import SocialLogin from '../SocialLogin';
import Findus from '../Findus';
import Qzone from '../Qzone';
 
 const RightAside = () => {
    return (
        <div className='space-y-6'>
            <SocialLogin></SocialLogin>
            <Findus></Findus>
            <Qzone></Qzone>
        </div>
    );
 };
 
 export default RightAside;