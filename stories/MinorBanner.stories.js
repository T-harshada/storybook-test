import React from 'react'
import MinorBanner from '../components/minor.banner'
import {withKnobs, text} from '@storybook/addon-knobs'

export default {
    name: 'MinorBanner',
    component: MinorBanner,
    title:"components| Banner/Minor",
    decorators: [withKnobs]
}

export const noPicture = () => <MinorBanner title="Banner title" subtitle="Banner Subtitle" body="Banner body"/>
export const withPicture = () => <MinorBanner
    title={text("title", "Banner title")}
    subtitle={text("subtitle", "Banner Subtitle")}
    body={text("body","Banner body")}
    leftPhoto={text("leftPhoto", "Products/boots/shutterstock_66842440.jpg")}
    rightPhoto={text("rightPhoto", "Products/boots/shutterstock_1121278055.jpg")}
   />
