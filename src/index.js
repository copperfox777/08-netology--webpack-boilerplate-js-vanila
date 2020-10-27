// Test import of a JavaScript function
import {fetchClient} from './js/fetchClient';
import {delay} from './js/delay';
// Test import of styles
import './styles/index.scss';

import loaderSvg from './images/loader.svg';
const loader = document.createElement('img')
loader.src = loaderSvg
loader.className = 'loader'



// Appending to the DOM
const container = document.createElement('div');
container.className = 'container';


const heading = document.createElement('div');
heading.className = 'block';
heading.innerHTML = 'Изучайте <span class="blue">актуальные темы</span>';

container.append(loader);

(async () => {
  const waiter = await delay(2000);
  //время на полюбоваться спинером
  let response = await fetchClient('https://gitcdn.link/repo/netology-code/ajs-task/master/netology.json');
  container.innerHTML = '';
  
  container.append(heading);
  response.data.forEach(item =>{

    const title = item.direction.title;
    let counter = 0;
    item.groups.forEach(element => {
      counter += element.items.length;
    });
    
    const blockEL = document.createElement('div');
    blockEL.className = 'block';
    
    const titleEl = document.createElement('div');
    titleEl.className = 'name';
    titleEl.innerHTML=title;
    
    const amountEl = document.createElement('div');
    amountEl.className = 'amount';
    amountEl.innerText = '' + counter + ' курсов';
    
    const circle = document.createElement('div')
    circle.className = 'circle'
    

    blockEL.append(circle,titleEl,amountEl);
    container.append(blockEL);
    
  })
})();

const app = document.querySelector('#root');
app.append(container);
