const students = [
  { name: 'karthik', age: 25, gender: 'male' },
  { name: 'Marry', age: 22, gender: 'female' },
  { name: 'keerthi', age: 23, gender: 'male' },
  { name: 'Christy', age: 23, gender: 'female' },
  { name: 'Christy', age: 30, gender: 'female' },
];

const male = document.getElementById('male');
const female = document.getElementById('female');
const form = document.getElementById('form');
const display = document.getElementById('display');
const button = document.querySelector('button');
const gender = document.getElementsByName('gender');
form.addEventListener('submit', e => {
  let avgs;
  let favgs;
  if (gender[0].checked) {
    let maleSum = 0;
    let maleAvg = 0;
    let count = 0;
    for (let sutdent of students) {
      if (sutdent.gender === 'male') {
        maleSum = maleSum + sutdent.age;
        count++;
      }
    }
    avgs = maleAvg + maleSum / count;
    display.innerText = avgs;
  }
  if (gender[1].checked) {
    let femaleSum = 0;
    let femaleAvg = 0;
    let fcount = 0;
    for (let sutdent of students) {
      if (sutdent.gender === 'female') {
        femaleSum = femaleSum + sutdent.age;
        fcount++;
      }
    }
    favgs = femaleAvg + femaleSum / fcount;
    display.innerText = favgs;
  }
  e.preventDefault();
});
