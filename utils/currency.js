function currency(value, locale='kr-KR', sign='KRW') {
  return new Intl.NumberFormat( locale,
    { style: 'currency', currency: sign },
  )
  .format(value);
}

export default currency;
