const persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Kate', age: 21, city: 'New York' },
  { name: 'Mike', age: 25, city: 'Chicago' },
  { name: 'Anna', age: 19, city: 'Los Angeles' },
  { name: 'Tom', age: 30, city: 'Houston' }
];
persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = 2023;
console.log("Вивід через for");
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}
console.log("Вивід через for of");
for (let p of persons) {
  console.log(p);
}
console.log("Вивід через forEach");
persons.forEach(p => console.log(p));
console.log("Властивості масиву");
console.log(persons.groupName, persons.teacher, persons.year);

const defaults = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
const userSetting = { mode: 'production', debugLevel: 'trace' };

const settings1 = Object.assign({}, defaults, userSetting);
console.log("Object.assign:", settings1);

const settings2 = { ...defaults, ...userSetting };
console.log("Spread:", settings2);

const settings3 = {};
for (let key in defaults) settings3[key] = defaults[key];
for (let key in userSetting) settings3[key] = userSetting[key];
console.log("For-in:", settings3);

Object.defineProperty(persons[0], 'birthYear', {
  get: function() {
    return 2025 - this.age;
  },
  enumerable: true
});
console.log(persons[0].name, "народився у", persons[0].birthYear);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined1 = arr1.concat(arr2);
const combined2 = [...arr1, ...arr2];
const combined3 = [].concat(arr1, arr2);

const personsText = persons.map(p => `${p.name} from ${p.city} born in ${2025 - p.age}`);
console.log(personsText);

const older20 = persons.filter(p => p.age > 20);
console.log("Старші 20:", older20);

const { name, city } = persons[0];
console.log("Ім'я:", name, "Місто:", city);

const [firstPerson] = persons;
console.log("Перший елемент масиву:", firstPerson);

function getUserData(username) {
  const user = persons.find(p => p.name === username);
  if (!user) throw new Error('Unable to find user');
  return user;
}
function showUserInfo(name) {
  console.log("Loading...");
  try {
    const user = getUserData(name);
    console.log(user);
    console.log("Loading finished");
  } catch (err) {
    console.error(err.message);
    console.log("Loading finished");
  }
}
showUserInfo('John');
showUserInfo('Alice');

function textToArray(text) {
  return text.split('');
}
console.log(textToArray("Hello"));

function reverseWord(word) {
  return word.split('').reverse().join('');
}
console.log(reverseWord("Hello"));

function isJSFile(filename) {
  return filename.endsWith('.js');
}
console.log(isJSFile("index.js"));
console.log(isJSFile("style.css"));

function sentenceToWords(sentence) {
  return sentence.split(' ');
}
console.log(sentenceToWords("JavaScript is awesome"));

function replaceWord(text, oldWord, newWord) {
  return text.replace(oldWord, newWord);
}
console.log(replaceWord("I like apples", "apples", "oranges"));