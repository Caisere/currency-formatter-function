import './style.css';
import { 
  currencyUSFormat, 
  currencyCAFormat, 
  currencyBritainConverter,
  currencyEuroConverter }
from './formatCurrency.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p>${currencyUSFormat(60000)}</p>
    <p>${currencyCAFormat(60000)}</p>
    <p>${currencyBritainConverter(60000)}</p>
    <p>${currencyEuroConverter(240000)}</p>
  </div>
`;