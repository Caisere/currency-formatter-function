type Value = number;

export function currencyUSFormat(value: Value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function currencyCAFormat(value: Value) {
  return new Intl.NumberFormat('ca', {
    style: 'currency',
    currency: 'CAD',
  }).format(value);
}

export const currencyBritainConverter = (value: Value) => {
  return new Intl.NumberFormat('gb', {
    style: 'currency',
    currency: 'GBR',
  }).format(value);
};


export const currencyEuroConverter = (value: Value) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
};
