import React from 'react';
import './DescriptionBox.css';
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box">
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilities buying and selling of products or services over the internet serves as a virtual marketplace where business and individual showcase their products, interact with customers, and conduction transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their accessibility , and the global reach they offer.</p>
                <p>E-commerce websites typically display products or services detailed descriptions, images,prices and any available . each product usually has its with relevant information.</p>
            </div>
        </div>
    );
};

export default DescriptionBox;