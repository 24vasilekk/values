export const formatPrice = (priceInCents, currency = 'RUB') => {
  const price = priceInCents / 100;
  
  const formatters = {
    RUB: (p) => `${p.toLocaleString('ru-RU')} ₽`,
    USD: (p) => `$${p.toLocaleString('en-US')}`,
    EUR: (p) => `€${p.toLocaleString('de-DE')}`,
  };

  return formatters[currency](price);
};

export const calculateDiscount = (originalPrice, discountPercent) => {
  return originalPrice * (1 - discountPercent / 100);
};