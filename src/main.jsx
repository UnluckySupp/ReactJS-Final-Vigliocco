import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { CartProvider } from './context/CartContext.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyDmolpeprNtdOUvRSXbUPsDWrKfXuWfoTs",
  authDomain: "entrega-final-7bb72.firebaseapp.com",
  projectId: "entrega-final-7bb72",
  storageBucket: "entrega-final-7bb72.appspot.com",
  messagingSenderId: "296168502522",
  appId: "1:296168502522:web:4ec723909f278ce1098543"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
)
