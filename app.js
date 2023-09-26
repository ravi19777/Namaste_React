import React from 'react';  // importing "React" from 'react' module

import ReactDOM from 'react-dom/client' // import "ReactDOM" from 'react-dom' module ;

// <!-- react element creation -->
const heading1 = React.createElement('h3',{},"This is the children of the react element!!");

{/* // root element creation */}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading1);