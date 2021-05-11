const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'ZqDkjQ09G7Z1BGgscR8IZvVlfQCLRUdq'; // please include your own key
let url;
// declared url variable
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
// ^these are the form- 
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');
//^these are the results area
// referencing back to html values
// setting up variable to reference dom elements
nav.style.display = 'none';
let pageNumber = 0;
// console.log('PageNumber:', pageNumber);
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
// when we hit submit in searchform, runs fetchresults, next/prev page button>runs next/previous page functions

function fetchResults(e) {
    // naming function, placeholder parameter
    // console.log(e);
    e.preventDefault();
    // not refreshing page on form submit, keeping info
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
    // initialiing base url+key+start at page 0, search term entered
    // console.log('URL:', url);
    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
        console.log('URL:', url);
    }
    // if start date is entered- ie not empty- add the start date value to end of url
    if (endDate.value !== '') {
        console.log(endDate.value)
        url += '&end_date=' + endDate.value;
        console.log('URL:', url);
    }
    // if end date is entered- ie not empty- add the end date value to end of url
    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        // when fulfilled- returns results- as json (not http)
        .then(function (json) {
            console.log(json);
            displayResults(json);
        })
        // taking the jsonified results and passing into function displayResults
}
function displayResults(json) {
    // creating displayResults function called above
    console.log('Display Results', json);
    // console.log(json.response.docs);
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    // first child of section is first element- section is the results, remove if it exists 
    // this is clearing out previous results- because it isnt automatically refreshign etc, it is clearing out any results thta might previously be there IF there are any, and is setting it fresh
    let articles = json.response.docs;
    // console.log(articles);
    // declaring articles and stepping through our jsonified results to the documents
    if (articles.length === 0) {
        // iuf number of articles is ) -ie length of json.response.docs=0- return no results
        console.log('No results');
    } else {
        for (let i = 0; i < articles.length; i++) {
            // go through the articles if there are any... from index 0 to the last one (index length)
            // console.log(i);
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
            // creating variables for html for each part of article we want to display
            let current = articles[i];
            // find the index of the current i and set that as current, log
            console.log('Current:', current);
            link.href = current.web_url;
            // taking link from jsonified results at this index (web_url) and putting it as the href in the a element made above
            link.textContent = current.headline.main;
            // taking the docs.i.headline.main and adding it the 
            para.textContent = 'Keywords: ';
            // putting "keywords:" into the p tag we made under the headline
            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
            // stepping through the array at each index froom 0 to the length of the keywords array, adding the keyword values to the paragraph after the word "keyword: " adding more children onto the paragraph
            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }
            // 
            clearfix.setAttribute('class', 'clearfix');
            // add class of clearfix to the div we made on line 80
            heading.appendChild(link);
            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
            //  A                   B 
            // adding B onto A- refer back to the thigns set above- ie the first one is add a <a> onto <h2>, second is add <h2> on <article>, then add img=document.createElement('img'); onto <article>
        }
    }
    if (articles.length === 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}
function nextPage(e) {
    // console.log('Next button clicked');
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
}
function previousPage(e) {
    // console.log('Previous button clicked');
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    // this accounts for if we are on page 0
    fetchResults(e);
    console.log('Page:', pageNumber);
}