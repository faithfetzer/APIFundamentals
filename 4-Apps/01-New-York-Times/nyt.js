const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'stmzGCVYzng5M0U8PLCxP2NrnW263vIm';
let url;

// search form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('.submit');

// results navigation
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

// results section
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
console.log(baseURL);

function fetchResults(e) {
    e.preventDefault();
    console.log(searchTerm.value);
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log(url);
    if(startDate.value !== ''){
        console.log(startDate.value)
        url+= '&begin_date=' + startDate.value;
    };
    if(endDate.value !== '') {
        console.log(endDate.value)
        url+= '&end_date=' + endDate.value;
    };
    console.log();
    fetch(url)
        .then(function(result){
            console.log(result)
            return result.json();
        }) .then(function(json){
            console.log(json);
        })
    fetch(url)
        .then(function(result){
            return result.json();
        }) .then(function(json){
            displayResults(json);
        })
};

function displayResults(json){
    console.log('DisplayResults', json);
}
function nextPage(){
    console.log('Next Button Clicked');
};
function previousPage(){
    console.log('Previous button clicked');
};