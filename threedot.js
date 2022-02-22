const ages = [12, 56, 42, 21, 12,]
const ages1 = [23, 25, 56,]
const ages2 = [25, 56, 84,]
const allAges= ages.concat(ages1).concat([5]).concat(ages2);
console.log(allAges);
//  es6 use
const allAges1 = [...ages, ...ages1, 5, ...ages2]
console.log(allAges1);

//  hight number 
const business = 390;
const minister = 890;
const sochib = 900;
const total= Math.max(business, minister, sochib);
//  es6 used
const totalAll=[390,890,900,610,642,982]
const total1 = Math.max(...totalAll)
console.log(total1);