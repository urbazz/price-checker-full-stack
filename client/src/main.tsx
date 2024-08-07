import onScan from 'onscan.js';
import ReactDOM from 'react-dom/client';
import App from './app/App';

onScan.attachTo(document);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
