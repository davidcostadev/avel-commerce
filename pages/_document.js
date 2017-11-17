import Document, { Head, Main, NextScript } from 'next/document'
import { initStore, setCategories } from '../store'
import withRedux from 'next-redux-wrapper'
import flush from 'styled-jsx/server'
// import { ServerStyleSheet } from 'styled-components'



import ApiCategories from '../api/Categories'

import HeaderPage from '../src/components/HeaderPage';
import FooterPage from '../src/components/FooterPage';
import Sitemap from '../src/components/Sitemap';
import Copy from '../src/components/Copy';

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    // console.log('MyDocument')

    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    const categories = await ApiCategories()
    return { html, head, errorHtml, chunks, styles, categories }

    // console.log(categories)

    // store.dispatch(setCategories(categories))
  // static async getInitialProps ({ renderPage }) {
    // const sheet = new ServerStyleSheet()
    // const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    // const styleTags = sheet.getStyleElement()
    // const categories = await ApiCategories()

    // return { ...page, styleTags, store }
    // return { ...page, styleTags, store }
    // return {  }
    // return { categories }
  }


  render () {
    // console.log(this.props)
    return (
      <html>
        <Head>
          <title>My page</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css" />
            <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
            <link rel='stylesheet' href='/static/css/bundle.css' />
            {this.props.styleTags}
        </Head>
        <body>
          <HeaderPage categories={this.props.categories}/>
          <Main  />
          <FooterPage>
            <Sitemap />
            <Copy />
          </FooterPage>
          <NextScript />
        </body>
      </html>
    )
  }
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     // addCount: bindActionCreators(addCount, dispatch),
//     // startClock: bindActionCreators(startClock, dispatch)
//   }
// }

// export default withRedux(initStore, null, mapDispatchToProps)(MyDocument)

