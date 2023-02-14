const open = document.getElementById('open-btn');
const close = document.getElementById('close-btn');
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);
const heading = document.createElement('h2');
const instructors = document.getElementById('instructors');
heading.innerHTML = 'Our Instructors';
instructors.appendChild(heading);
const bottomLine = document.createElement('div');
bottomLine.className = 'bottom-line';
instructors.appendChild(bottomLine);
const teachers = [
  {
    image: 'assets/camron ross.webp',
    name: 'Camron Ross',
    summary: 'Founder of warior trader',
    description: 'Have an experience more than 10 years in penny stocks and succesful track record',
    square: 'assets/abstract squqre.jpg',
    class: 'first',
    id: 'speaker1',
  },
  {
    image: 'assets/ahmed zamzm.jpg',
    name: 'Ahmed Zamam',
    summary: 'Founder of atradez',
    description: 'Have an experience more than 5 years in penny stocks and succesful track record',
    square: 'assets/abstract squqre.jpg',
    class: 'second',
    id: 'speaker2',
  },
  {
    image: 'assets/wade guth.png',
    name: 'Wade Guth',
    summary: 'Founder of Trade Ats',
    description: 'Have an experience more than 10 years in institutional trading and succesful track record',
    square: 'assets/abstract squqre.jpg',
    class: 'third',
    id: 'speaker3',
  },
  {
    image: 'assets/claytrader.jpg',
    name: 'Clay Trader',
    summary: 'Founder of Clay Trader',
    description: 'Have an experience more than 10 years in penny stocks and succesful track record',
    square: 'assets/abstract squqre.jpg',
    class: 'forth',
    id: 'speaker4',
  },
  {
    image: 'assets/carl icahn.jpg',
    name: 'Carl Ichan',
    summary: 'Founder of Icahn Enterprises',
    description: 'He is the founder and controlling shareholder of Icahn Enterprises',
    square: 'assets/abstract squqre.jpg',
    class: 'fifth',
    id: 'speaker5',
  },
  {
    image: 'assets/paul tudor jones.jpg',
    name: 'paul tudor jones',
    summary: 'Founder of warior trader',
    description: ' American billionaire hedge fund manager',
    square: 'assets/abstract squqre.jpg',
    class: 'sixth',
    id: 'speaker6',
  },
];
const container = document.createElement('div');
container.className = 'container';
instructors.append(container);
for (let i = 0; i < teachers.length; i += 1) {
  const instructor = document.createElement('div');
  instructor.className = 'teacher';
  instructor.setAttribute('id', teachers[i].id);
  instructor.innerHTML = `
<img src = "${teachers[i].image}" alt ="Instructior Photo" class="teacher-img">
<img src = "assets/black and white.jpg" alt = "black and white image" class= "baw">
<h3>${teachers[i].name}</h3>
<p class="summary">${teachers[i].summary}</p>
<p class="description">${teachers[i].description}</p>
<div class="gray-line ${teachers[i].class}"></div>
`;
  container.append(instructor);
}