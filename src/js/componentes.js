import '../css/normalize.css';
import '../css/skeleton.css';

// References
const form          = document.querySelector( '#formulario' ),
      listTweets    = document.querySelector( '#lista-tweets' );

let tweets = [];



// Functions
// Limpia el HTML de la lista de tweets
const cleanHTML = () => {
    while( listTweets.firstChild ) { listTweets.removeChild( listTweets.firstChild ); }
}

// Muestra un mensaje de error en pantalla 
const showError = ( message ) => {
    const messageP = document.createElement( 'p' );
    messageP.textContent = message;
    messageP.classList.add( 'error' );

    const content = document.querySelector( '#contenido' );

    if( content.childElementCount === 1 ) {
        content.appendChild( messageP );
        
        setTimeout( () => {
            messageP.remove();
        }, 3000 );
    }

}

// Elimina un tweet por su id
const deleteTweet = id => {
    tweets = tweets.filter( tweet => tweet.id !== id );
    createHTML();
}

// Crea el HTML de la lista de tweets
const createHTML = () => {
    cleanHTML();

    if( tweets.length > 0 ) {
        tweets.forEach( ( { tweet, id } ) => {
            const btnDelete = document.createElement( 'a' );
            btnDelete.classList.add( 'borrar-tweet' );
            btnDelete.textContent = 'X';
            btnDelete.onclick = () => { deleteTweet( id ); }

            const li = document.createElement( 'li' );
            li.textContent = tweet;
            li.appendChild( btnDelete );

            listTweets.appendChild( li );
        });
    }

}

// Agrega un nuevo tweet al array de tweets
const addTweet = ( event ) => {
    event.preventDefault();

    const tweet = form.querySelector( '#tweet' ).value;

    if( tweet === '' ) {
        showError( 'Un mensaje no puede ir vacío' );
        return;
    }

    const tweetObj = { id: Date.now(), tweet }

    tweets = [ ...tweets, tweetObj ];

    createHTML();

    form.reset();
}



// Events
export const startEventListeners = () => {
    form.addEventListener( 'submit', addTweet );
}