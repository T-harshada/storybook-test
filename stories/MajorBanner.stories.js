import React from 'react'
import MajorBanner from '../components/major.banner'
import {withKnobs, text} from '@storybook/addon-knobs'
import '../bootstrap-reboot.min.css'
import '../bootstrap.css'
import '../bootstrap-grid.css'
import '../main.css'

export default {
 name: "Banner",
 component: MajorBanner,
 title: "components | Banner/Major",
 decorators: [withKnobs]
}

export const withOnlyTitle = () => <MajorBanner
 title={text("Title","Banner Title")}
 photo={text("photo", "People Outdoors/shutterstock_116403520.jpg")}
/>
export const withAllTextOptions = () => <MajorBanner
 photo={text("photo", "People Outdoors/shutterstock_116403520.jpg")}
 subtitle={text("subtitle", "Banner subtitle")}
 body={text("body", "Banner Body")}
/>
