const countUrl = 'https://rdfx20lv3a.execute-api.eu-west-2.amazonaws.com/Prod'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res;
    });
}