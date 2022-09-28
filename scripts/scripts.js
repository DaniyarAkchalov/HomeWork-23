const container = document.querySelector('.container');
let id_num = 1;

const reguest = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) 
    .then(res => res.json()) 
    .then(json => render(json))

}
const render = ({ id, title, body }) => {
    container.innerText= '';
    const card = document.createElement ('div');
    const idElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const bodyElem = document.createElement('p');

    idElem.innerText = `Id:  ${id}`;
    titleElem.innerText = `Title:  ${title}`;
    bodyElem.innerText = `Body:  ${body}`;

    card.classList.add('card');

    card.append(idElem, titleElem, bodyElem);
    container.append(card);
}   

reguest(1)

const [left_btn, right_btn] = document.querySelectorAll('.triggers button');
left_btn.addEventListener('click', () => {
if(id_num ===1) {
    id_num = 101
}
reguest(--id_num)
});

right_btn.addEventListener('click', () => {
if(id_num ===100){
    id_num = 0
}

reguest(++id_num)
});





