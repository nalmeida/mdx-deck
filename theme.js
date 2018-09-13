import theme from 'mdx-deck/themes'

const sapientBlue = '#0030FF';

export default {
  ...theme,
  font: 'Gotham HTF, sans-serif',
  monospace: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif',
  // weights:' array of font weights for the main font',
  // fontSizes:' array of font sizes from smalles  to largest',
  colors: {
    background: '#fff',
    text:'#000',
    link: sapientBlue,
    // heading: '#000',
    // blockquote: '',
    pre: '#fff',
    preBackground: sapientBlue,
    code: '#fff',
    codeBackground: sapientBlue
  },
  // transitionTimingFunction: 'timing function value for slide transitions',
  // transitionDuration: 'duration value for slide transitions.set to 0 to disable transitions',
  // css: 'root CSS object',
  // heading: 'CSS for all headings',
  // h1: 'font-family: "Miller Text","Times New Roman",serif;',
  // h2: 'CSS for<h2>',
  // h3: 'CSS for<h3>',
  // h4: 'CSS for<h4>',
  // h5: 'CSS for<h5>',
  // h6: 'CSS for<h6>',
  paragraph: 'font-size: 1.3em;',
  // link: 'background-color:red;',
  // ul: 'CSS for<ul>',
  // ol: 'CSS for<ol>',
  // li: 'CSS for<li>',
  // img: 'CSS for<img>',
  // blockquote: 'CSS for<blockquote>',
  // table: 'CSS for<table>',
  // components: 'object of MDX components to render markdown',
  // Provider: 'component for wrapping the entire app',
  // css: {
  //   // textAlign: 'left',
  //   // fontSize: '16px',
  //   '@media screen and (min-width:64em)': {
  //     fontSize: '32px',
  //   },
  //   '& .Slide > div': {
  //     minWidth: '80vw',
  //     minHeight: '60vh'
  //   }
  // }

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
