

let searchField = document.querySelector('.search_req');
let searchButton = document.querySelector('#search-button');

function getDrugInfoBySearch(searchValue) {
    window.location.replace(`/medication/${searchValue}`)
}


searchButton.addEventListener('click', function (event){
    event.preventDefault();
    let searchValue = searchField.value.trim(); 

    getDrugInfoBySearch(searchValue);
})