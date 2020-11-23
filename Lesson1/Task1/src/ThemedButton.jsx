import React, { Component } from 'react';

import { ThemeContext } from '../src/themes';

class ThemedButton extends Component {
    render(){
        this.context;

        return(
            <button
                {...this.props} className="btn" 
                style={{
                    background:this.context.background,
                    color:this.context.fontColor
            }}/>
        )
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;