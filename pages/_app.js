import '../styles/globals.css'
import {ApolloCache,ApolloClient,ApolloProvider} from '@apollo/client'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient(
    {uri: "ttp://backend05.codebootcamp.co.kr/graphql",
    cache: new ApolloCache()}
  )
  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  ) 
}

export default MyApp
