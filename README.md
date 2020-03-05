# storybook-test

### manual set up
npm i -s react react-dom
npm i @storybook/react -D
npm i babel-loader @babel/core -D

npm run storybook

adding storybook config
create a config file in .storybook folder

### add storybook to existing project
npx -p @storybook/cli sb init

npx - package runner that allows to run cli tool that is hosted in registry

this command will 
create .storybook folder
created stories folder and added index file
it updated package.json and added scripts to run storybook

## storiesOf api 
storyblok 5.2 migrated to component story format

## grouping stories
    title: 'group| folder/variation'
    eg: title: 'components| Banner/Major'
        title: 'components| Banner/Minor'

## Theming storybook
create file manager.js

## using addons
https://storybook.js.org/addons/
install addons as dev dependencies
add them to addons array in main.js

### adding static assets
update scripts 
