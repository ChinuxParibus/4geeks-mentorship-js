const PRONOUN = ['the','our', 'my', 'one']
const ADJ = ['great', 'big', 'amazing' ]
const NOUN = ['jogger','racoon', 'possum', 'avocado']
const EXT = ['.com', '.net', '.io']

const combine = (arr) => arr.reduce((a, b) => a.flatMap(x => b.map(y => [...x, y])), [[]])

// for(let i = 0, length1 = PRONOUN.length; i < length1; i++) {
//   for(let j = 0, length2 = ADJ.length; j < length2; j++) {
//     for(let k = 0, length3 = NOUN.length; k < length3; k++) {
//       domains.push(`${PRONOUN[i]}${ADJ[j]}${NOUN[k]}.com`)
//     }
//   }
// }

const domains = combine([PRONOUN, ADJ, NOUN, EXT]).map(a => a.join(''))

console.log(domains)
