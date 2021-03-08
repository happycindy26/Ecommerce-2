import React from 'react';
import video from '../../images/Botani_Insta.mp4';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <h3 className="about__title">Our Story</h3>
            <div className="about__intro">
                <iframe className="about__intro--video" width="250" height="250" src={video} frameBorder=""></iframe>
                <div className="about__intro--sidetext">
                <p>In 1998, Botani paved the way for a new era of eco-conscious, toxin-free, plant based skin-care – inspiring our brand name which literally translates to ‘plant’ in Greek.</p>
                <p>Today, Botani offers award-winning skin-care for the whole family that is proudly Australian made, clinically verified and ethically conscious. Our key ingredient, Olive Squalene, can be found in most of our products, most potently in our number 1 selling Olive Skin Serum.</p>
                <p>With rates of skin conditions and diseases continuing to rise worldwide, as well as the rise of chemicals and toxins in our environment, there has never been a more important time to take a holistic approach to your health and wellbeing including switching to natural, plant-based skin-care.</p>
                <p>As true for beauty as it is for food – high quality, natural ingredients, simplicity and passion is the best recipe for success – my grandmother taught me this. I believe in a minimalist, uncomplicated approach to natural beauty, and I wish you all the success in your journey to healthy, beautiful skin.</p>
                </div>
            </div>
            <div className="about__intro--sidetext">
                <p>100% botanically based natural problem-solving skincare and pharmaceutical products. Our skincare products contain a blend of high quality certified organic ingredients and skin-friendly plant actives that are in sync with your skin.</p>
                <p>At Botani, we only use natural plant-based ingredients. Each product is formulated using olive derived plant actives, including our signature ingredient Olive Squalene, traditional herbal extracts, potent superfoods and Australian native plant extracts. Our products are vegan certified and cruelty-free.</p>
            </div>
        </div>
    );
}

export default About;