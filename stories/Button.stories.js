import React from 'react';
import { action } from '@storybook/addon-actions'
import Button from '../components/form/button';
import { withKnobs, text } from "@storybook/addon-knobs";


//storiesOf('Button', module).add('Call to action', () => <CallToAction label="Submit" />);

export default {
    title: 'components |atoms/Button',
    component: Button,
    decorators: [withKnobs]
}

export const button = () => <Button label={text("Label","submit")} onClick={action('button-click')}></Button>
