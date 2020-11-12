const aries = `♈`,
  taurus = `♉`,
  gemini = `♊`,
  cancer = `♋`,
  leo = `♌`,
  virgo = `♍`,
  libra = `♎`,
  scorpio = `♏`,
  sagittarius = `♐`,
  capricorn = `♑`,
  aquarius = `♒`,
  pisces = `♓︎`;

const fireSigns = [aries, leo];
const earthSigns = [sagittarius, taurus, virgo, capricorn];
const airSigns = [libra, aquarius];
const waterSigns = [cancer, scorpio, pisces];

// Part 1 - Manipulating elements inside arrays

const sagittaire = earthSigns.shift();

fireSigns.push(sagittaire);

console.log(
  fireSigns[fireSigns.length - 1] === "♐"
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);

console.log(earthSigns[0] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

airSigns.unshift(gemini);

console.log(airSigns[0] === "♊" ? "Good Answer ✅" : "Wrong Answer ❌");

const indexScorpio = waterSigns.lastIndexOf(scorpio);

console.log(indexScorpio === 1 ? "Good Answer ✅" : "Wrong Answer ❌");

const secondElement = waterSigns[1];

console.log(secondElement === "♏" ? "Good Answer ✅" : "Wrong Answer ❌");

// Part 2 –  Merging arrays

let zodiacSigns = [];

zodiacSigns.push(fireSigns, earthSigns, waterSigns, airSigns);

console.log(
  zodiacSigns !== null &&
    zodiacSigns.toString() === "♈,♌,♐,♉,♍,♑,♋,♏,♓︎,♊,♎,♒"
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);

/*  
    🏁 Please print dynamically in console how many elements you have now in the zodiacSigns array
 */

console.log(`There is ${zodiacSigns.toString().length} signs in the zodiac`);
