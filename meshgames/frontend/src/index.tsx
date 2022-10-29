import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { offsetLimitPagination } from "@apollo/client/utilities";


const client = new ApolloClient({
  uri: 'http://localhost:8080/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          games: offsetLimitPagination(["where"]) //uses built in merge to merge lists of results in cache if they are in the same search (hence "where") 

        }
      }
    }
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
