import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MatrixProvider from './contexts/matrix.context';
import ClientProvider from './contexts/client/client.context';
import ReportProvider from './contexts/client/report.context';
import ContactProvider from './contexts/contact/contact.context';
import SessionProvider from './contexts/session/session.context';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { Global } from './styles/global';
import Global from './styles/global'
import InformationProvider from './contexts/information/information.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MatrixProvider>
      <InformationProvider>        
      <ContactProvider>
        <ClientProvider>
          <SessionProvider>
              <ReportProvider>
                <Global />
                <App />
              </ReportProvider>
          </SessionProvider>
        </ClientProvider>
      </ContactProvider>
      </InformationProvider>
    </MatrixProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
