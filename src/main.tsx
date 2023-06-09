import ReactDOM from 'react-dom/client'
import { CookiesProvider } from "react-cookie";
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<CookiesProvider>
  <App />
</CookiesProvider>,
)
