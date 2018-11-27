import React from 'react';
import Navbar2 from '../components/Navbar2';
import 'bootstrap/dist/css/bootstrap.css';

import Layout from '../containers/Layout';

const About = () => {
    return (
        <div>
            <Navbar2/>
        <Layout>
            <h2>About</h2>
            <p>
                Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                alcatra.
            </p>
        </Layout>
            </div>
    );
};

export default About;