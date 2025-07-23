import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
import { currencyUSFormat } from './formatCurrency.ts';
import { currencyCAFormat } from './formatCurrency.ts';
import { currencyBritainConverter } from './formatCurrency.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <p>${currencyUSFormat(60000)}</p>
    <p>${currencyCAFormat(60000)}</p>
    <p>${currencyBritainConverter(60000)}</p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
