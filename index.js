const API_Characters = "https://rickandmortyapi.com/api/character";
const API_Names = "https://rickandmortyapi.com/api/character/?name=";
const inputSearch = document.querySelector('#inputSearch');
let inputSubmit = document.querySelector('#inputSubmit');
const container = document.querySelector('#container');

const getInformation = async () => {
    try{
        const answer = await fetch(API_Characters);
        const data = await answer.json();
        getAllCharacters(data, container);
        
    }catch(error){
        console.log(error);
    };
};

const filtrar = async (event) => {    
    try{
        if(event.keyCode === 13){
            container.innerHTML = '';
            event.preventDefault();
            const text = inputSearch.value.toLowerCase();
            const answer = await getCharacterByName(API_Names, text);
            const data = await answer.json();
    
            printCharacter(data, container);
        };
    }catch(error){
        characterNotFound(container);
    };
};

function getAllCharacters(data, container){
    for(let i = 0; i<data.results.length; i++){
        container.innerHTML += 
            `<div class="container__information">
                <img class="information__images" src="${data.results[i].image}">
                <div class="information__datas">
                    <p class="datas__name">Name: ${data.results[i].name}</p>
                    <p class="datas">Status: ${data.results[i].status}</p>
                    <p class="datas">Species: ${data.results[i].species}</p>
                    <p class="datas">Gender: ${data.results[i].gender}</p>
                    <p class="datas__episode">Episode: ${data.results[i].episode.length}</p>
                    <p class="datas__episode">Origin: ${data.results[i].origin.name}</p>
                    <p class="datas__episode">Location: ${data.results[i].location.name}</p>
                    <div class="datas__divLink">
                        <a id="divLink__showMeMore" href="characters.html?character=${data.results[i].id}">Show me more</a>
                    </div>
                </div>
            </div>`;
    };
};

async function getCharacterByName(urlBase, nameToFind){
    return await fetch(`${urlBase}${nameToFind}`);
};

function printCharacter(data, container){
    for(let i = 0; i<data.results.length; i++){
        container.innerHTML += 
            `<div class="container__information">
                <img class="information__images" src="${data.results[i].image}">
                <div class="information__datas">
                    <p class="datas__name">Name: ${data.results[i].name}</p>
                    <p class="datas">Status: ${data.results[i].status}</p>
                    <p class="datas">Species: ${data.results[i].species}</p>
                    <p class="datas">Gender: ${data.results[i].gender}</p>
                    <p class="datas__episode">Episode: ${data.results[i].episode.length}</p>
                    <p class="datas__episode">Origin: ${data.results[i].origin.name}</p>
                    <p class="datas__episode">Location: ${data.results[i].location.name}</p>
                    <div class="datas__divLink">
                        <a id="divLink__showMeMore" href="characters.html?character=${data.results[i].id}">Show me more</a>
                    </div>
                </div>
            </div>`;
    };
};

function characterNotFound(container){
    container.innerHTML += `<p class="datas__name">Personaje no encontrado...</p>`;
};

function redirec(id){
    window.location.href = `characters.html?character=${id}`;
}


getInformation();
inputSearch.addEventListener("keyup", filtrar);