const btnShow = document.getElementById('btn-show');
const displayName = document.getElementById('display-name');
displayName.innerText = 'Your Name:';
function inputName(){
    const name = document.getElementById('input-name').value;
    displayName.innerText = `Your Name: ${name}`;
}

btnShow.addEventListener('click', () => {
    inputName();
});