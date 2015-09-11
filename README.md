# material-ui-es6-sample

[Material-UI](http://material-ui.com) sample using ES6 & [jspm](http://jspm.io/).

This is basically a re-write of the Material-UI [example projects](https://github.com/callemall/material-ui/tree/master/examples) as ES6 and uses jspm as the browser package manager / transpiler.
The sample is hosted by [Browsersync](http://www.browsersync.io/).

## How to use

```bash

# Clone this repo
git clone https://github.com/lyphtec/material-ui-es6-sample

# cd into it
cd material-ui-es6-sample

# install necessary npm & jspm packages
npm install
jspm install

# make sure that we are using react@0.13.3 (as it seems that the react-tap-event-plugin module tries to also install react@0.12.2 :(
jspm resolve --only npm:react@0.13.3
jspm clean

# start browser-sync (this will serve up the site in 'src' & starts up the default browser)
npm start
```

As an alternative to using Browsersync, if you are not interested in live browser reloads when there are source file changes, you can use a lightweight http server like [serve](https://www.npmjs.com/package/serve):

```bash
# install serve globally
npm install -g serve

# start up serve
cd src
serve

# you can now access the sample site at http://localhost:3000
``` 