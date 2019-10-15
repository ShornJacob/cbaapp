-------------------------------------------------------------------------------------------------------------------------------
npm install bulma node-sass --save-dev
Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

npm install gatsby-plugin-sass

Add
plugins: [`gatsby-plugin-sass`]
in gatsby-config.js

https://www.gatsbyjs.org/docs/bulma/
add mystyles.scss
--------------------------------------------------------------------------------------------------------------------------------

Debug Css
Add debug.css file
Add gastby-browser.js and import debug.css

--------------------------------------------------------------------------------------------------------------------------------React Front Awesome

https://www.npmjs.com/package/@fortawesome/react-fontawesome
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome

https://scotch.io/tutorials/using-font-awesome-5-with-react
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon={faHome} />
--------------------------------------------------------------------------------------------------------------------------------