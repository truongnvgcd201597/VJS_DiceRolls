const getButtonDice = document.getElementById('roll');
const getDiceOne = document.getElementById('die-1');
const getDiceTwo = document.getElementById('die-2');
const randomDice = {
    1: 'dice-01.svg',
    2: 'dice-02.svg',
    3: 'dice-03.svg',
    4: 'dice-04.svg',   
    5: 'dice-05.svg',
    6: 'dice-06.svg',
}
getButtonDice.addEventListener('click', ()=>{
    setTimeout(()=>{
        RandomRiceDice();
    }, 1200)
})

function RandomRiceDice(){
   const randNumerOne = Math.floor(Math.random() * Object.keys(randomDice).length) + 1;
   const randNumerTwo = [Math.floor(Math.random() * Object.keys(randomDice).length) + 1];
   
   getDiceOne.src = `./img/${randomDice[randNumerOne]}`;
   getDiceTwo.src = `./img/${randomDice[randNumerTwo]}`;
}