//将10进制数转化成2进制
function toBin(dec) {
  var bits = [];
  var dividend = dec;
  var remainder = 0;
  while (dividend >= 2) {
    remainder = dividend % 2;
    bits.push(remainder);
    dividend = (dividend - remainder) / 2;
  }
  bits.push(dividend);
  bits.reverse();
  return bits.join("");
}
