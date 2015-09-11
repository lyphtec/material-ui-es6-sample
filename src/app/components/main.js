// ES6 version of https://github.com/callemall/material-ui/blob/master/examples/browserify-gulp-example/src/app/components/main.jsx
import React from 'react';
import mui from 'material-ui';

const RaisedButton = mui.RaisedButton;
const Dialog = mui.Dialog;
const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        // 'this' used in _handleTouchTap() needs to be bound to the component instance : see http://stackoverflow.com/questions/29577977/react-ref-and-setstate-not-working-with-es6
        this._handleTouchTap = this._handleTouchTap.bind(this);
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    componentWillMount() {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
    }

    render() {
        const containerStyle = {
            textAlign: 'center',
            paddingTop: '200px'
        };

        const standardActions = [
            { text : 'Okay' }
        ];

        return (
            <div style={containerStyle}>
                <Dialog
                    title="Super Secret Password"
                    actions={standardActions}
                    ref="superSecretPasswordDialog">
                    1-2-3-4-5
                </Dialog>

                <h1>material-ui</h1>
                <h2>example project</h2>

                <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
            </div>
        );
    }

    _handleTouchTap() {
        this.refs.superSecretPasswordDialog.show();
    }
}

// ES6 classes don't support property declarations (it's in ES7) - so we must do this outside of the class definition
Main.childContextTypes = {
    muiTheme: React.PropTypes.object
};
