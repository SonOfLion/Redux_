import React, { Component } from 'react';
import ThemedButton from '../src/ThemedButton';
import { themes, ThemeContext } from '../src/themes';

import '../src/index.scss';

class App extends Component {
    state={
        theme: themes.dark,
    };

    toggleThemes = () => {
        const newTheme = this.state.theme === themes.dark 
            ? themes.light
            : themes.dark;
            
        this.setState ({
            theme: newTheme,
        })
    };
    render(){
        return(
            <>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton onClick={this.toggleThemes}>Dymamic Theme</ThemedButton>
                </ThemeContext.Provider>
                <ThemedButton onClick={this.toggleThemes}>Default Theme</ThemedButton>
            </>
        );
    }
};

export default App;