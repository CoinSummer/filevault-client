import { createGlobalStyle } from 'styled-components'

export const GlobalIconFont = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 2280941 */
    src: url('//at.alicdn.com/t/font_2280941_909f1mr6ub.eot');
    src: url('//at.alicdn.com/t/font_2280941_909f1mr6ub.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2280941_909f1mr6ub.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2280941_909f1mr6ub.woff') format('woff'),
    url('//at.alicdn.com/t/font_2280941_909f1mr6ub.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2280941_909f1mr6ub.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`