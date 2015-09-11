// ES6 version of https://github.com/callemall/material-ui/blob/master/examples/browserify-gulp-example/src/app/app.jsx
import React from 'react';
import Main from './components/main';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for React Developer Tools
window.React = React;

injectTapEventPlugin();

React.render(<Main />, document.body);
