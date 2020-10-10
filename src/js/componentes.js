import '../css/normalize.css';
import '../css/skeleton.css';

// References
const form = document.querySelector( '#formulario' );

let tweets = [];


// Functions
// Agrega un nuevo tweet al array de tweets
const addTweet = ( event ) => {
    event.preventDefault();

    const tweet = form.querySelector( '#tweet' ).value;

    if( tweet === '' ) {
        console.log( 'Un mensaje no puede ir vacío' );
        return;
    }

    const tweetObj = { id: Date.now(), tweet }

    tweets = [ ...tweets, tweetObj ];

    // crearHTML();

    form.reset();
}




// Events
export const startEventListeners = () => {
    form.addEventListener( 'submit', addTweet );
}