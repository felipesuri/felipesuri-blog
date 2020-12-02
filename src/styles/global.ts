import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    background: #373636;
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px #181818; 
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb {
    background: #9730BF; 
    border-radius: 30px;
    animation: background 1s;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #aa52cc; 
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

	textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
	}
`
