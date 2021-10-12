let levenshtein = require("fast-levenshtein");
/* var distance = levenshtein.get("back", "book"); // 2
var distance = levenshtein.get("我愛你", "我叫你"); // 1
console.log(distance);
 */

const target = {
  red: "Rojo",
  green: "Verde",
  blue: "Azul",
};

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const suggestion = Object.keys(obj).find((key) => {
      return levenshtein.get(key, prop) <= 3;
    });

    if (suggestion) {
      console.log(`${prop} no se encontro, quisiste decir ${suggestion}?`);
    }

    return obj[prop];
  },
};

const proxy = new Proxy(target, handler);
console.log(proxy.red);
