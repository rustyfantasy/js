function dateFormat(d, f = '.') {
  return d.replace( /-/g, f);
}

export default dateFormat;
