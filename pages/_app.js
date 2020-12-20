import NextApp from 'next/app';
import { Provider as BumbagProvider, css } from 'bumbag';

const theme = {
    global: {
      fontSize: 24,
      styles: {
        base: css`
          html,
          body {
            color: white;
            background-color: black;
          }
        `
      }
    }
  }

export default class App extends NextApp {
    
  render() {
    const { Component, pageProps } = this.props;
    return (
      <BumbagProvider theme={theme} isSSR>
        <Component {...pageProps} />
      </BumbagProvider>
    );
  }
}