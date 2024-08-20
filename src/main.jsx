import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ApolloClient,ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})

//https://rickandmortyapi.com/graphql

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client = {client}>
    <App />
    </ApolloProvider>
  </StrictMode>,
)
