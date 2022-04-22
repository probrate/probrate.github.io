const jwt = require('jsonwebtoken')

let secret = "undeniablylucrative1337";

let f = jwt.sign({
  sui: "segs",
  seg: "suis",
  username: "SUI"
}, secret)
console.log(f);

function wt() {
let decode = jwt.verify(f, secret);

console.log(decode);

}

setTimeout(wt, 3000);
// wt();