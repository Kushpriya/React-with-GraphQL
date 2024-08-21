import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ApolloClient,ApolloProvider, InMemoryCache} from "@apollo/client";
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  // uri: "https://bf48-110-44-126-21.ngrok-free.app/graphiql",
  uri: "https://rickandmortyapi.com/graphql",

  // uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

//https://rickandmortyapi.com/graphql

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client = {client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
