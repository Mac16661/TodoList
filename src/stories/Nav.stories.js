// Nav.stories.js

import React from 'react';
import Nav from './Nav';

//This default export determines where your story goes in the stroy list
export default {
    title: 'Component/Nav',
    component: Nav,
}

//we created a "template " of how args map to rendering
const Template = (args) => <Nav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {

}