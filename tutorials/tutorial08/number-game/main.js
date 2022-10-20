// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let counter = 0;


function check() {
    // your code here.
    counter++;
    let userGuess = document.querySelector('#guess').value;
    console.log (userGuess);
    
    userGuess = Number(userGuess);

    if(userGuess === secret) {
        console.log('You Win!');
        document.querySelector('#message').innerHTML = 'You Win!';
        document.querySelector('#celebrate').className = ' ';
    } else if (userGuess < secret) {
        console.log ('Too Low!');
        document.querySelector('#message').innerHTML = 'Too Low!';
    } else {
        console.log ('Too High');
        document.querySelector('#message').innerHTML = 'Too High!';
    }

    document.querySelector('#num-guesses').innerHTML = 'You have guessed ' + counter + ' time(s).';
}