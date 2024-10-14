import { data } from './articles.js';
import { format } from 'https://esm.sh/date-fns';

// to prevent repeated document reflows
let fragment = document.createDocumentFragment();
for (const article of data) {
    console.log(article);

    const container = document.createElement('section');

    const div = document.createElement('div');

    const heading = document.createElement('h2');
    heading.innerHTML = `<a href=${article.url}>${article.title}</a>`

    const description = document.createElement('p');
    description.innerText = article.description;

    // semantic HTML time element
    const date = document.createElement('time');
    date.dateTime = article.publishedAt;
    date.innerText = format(new Date(article.publishedAt), "MM/dd/yyyy HH:mm");

    const subheading = document.createElement('span');
    subheading.appendChild(date);
    subheading.innerText += ` | ${article.source.name}`;

    div.append(heading, subheading, description);
    container.appendChild(div);

    const img = document.createElement('img');
    img.src = article.urlToImage;
    container.appendChild(img);
    
    // couldn't get this to work consistently, some errors with CORS
    // if (article.urlToImage != null) {
    //         fetch(article.urlToImage, {
    //             method: 'head'
    //         })
    //             .then((response) => {
    //                 if (response.ok == false) {
    //                     return;
    //                 }

    //                 img.src = article.urlToImage;
    //                 container.appendChild(img);
    //             })
    //             .catch((error) => {
    //                 console.warn(error.message)
    //             })
    // }

    fragment.appendChild(container);
}

document.querySelector('main').appendChild(fragment);