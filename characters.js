const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const API_Characters = "https://rickandmortyapi.com/api/character";
var characterId = urlParams.get('character');
const container = document.querySelector('#containerCharacters');
let btnNext = document.querySelector('#divNext__btnNext');
let doSomething;

const getInformation = async () => {
    try{
        const answer = await fetch(`${API_Characters}/${characterId}`);
        const data = await answer.json();

        getCharacterById(data, container);

    }catch(error){
        window.location.href = "index.html";
    };
};

btnNext.addEventListener('click', async () => {
    const id = parseInt(characterId);
    doSomething = id + 1;
    characterId = doSomething;
    try{
        const answer = await fetch(`${API_Characters}/${doSomething}`);
        const data = await answer.json();
        container.innerHTML = '';
        eventPrintNext(data, container);
        
    }catch(error){
        window.location.href = "index.html";
    };
});

function getCharacterById(data, container){
    container.innerHTML += 
        `<div class="container">
            <img class="container__images" src="${data.image}">
        </div>
        <div class="containerCharacters__datas">
            <div class="datas">
                <p class="datas">ID: ${data.id}</p>
                <p class="datas">Name: ${data.name}</p>
                <p class="datas">Status: ${data.status}</p>
                <p class="datas">Species: ${data.species}</p>
            </div>
            <div class="datas">
                <p class="datas">Gender: ${data.gender}</p>
                <p class="datas">Episode: ${data.episode.length}</p>
                <p class="datas">Origin: ${data.origin.name}</p>
                <p class="datas">Location: ${data.location.name}</p>
            </div>
        </div>`;
};

function eventPrintNext(data, container){
    container.innerHTML += 
        `<div class="container">
            <img class="container__images" src="${data.image}">
        </div>
        <div class="containerCharacters__datas">
            <div class="datas">
                <p class="datas">ID: ${data.id}</p>
                <p class="datas">Name: ${data.name}</p>
                <p class="datas">Status: ${data.status}</p>
                <p class="datas">Species: ${data.species}</p>
            </div>
            <div class="datas">
                <p class="datas">Gender: ${data.gender}</p>
                <p class="datas">Episode: ${data.episode.length}</p>
                <p class="datas">Origin: ${data.origin.name}</p>
                <p class="datas">Location: ${data.location.name}</p>
            </div>
        </div>`;
};

getInformation();



