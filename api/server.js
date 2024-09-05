import express from 'express';
import 'dotenv/config';
const app = express();

// here we are configuring dist to serve app files
app.use(express.static( 'dist' ));

app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' );
} );

const jokes = [
    {
        "id": 1,
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
        "author": "Unknown"
    },
    {
        "id": 2,
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "author": "Unknown"
    },
    {
        "id": 3,
        "joke": "Why don’t skeletons fight each other? They don’t have the guts.",
        "author": "Unknown"
    },
    {
        "id": 4,
        "joke": "What do you call fake spaghetti? An impasta!",
        "author": "Unknown"
    },
    {
        "id": 5,
        "joke": "Why was the math book sad? Because it had too many problems.",
        "author": "Unknown"
    },
    {
        "id": 6,
        "joke": "Why did the bicycle fall over? Because it was two-tired.",
        "author": "Unknown"
    },
    {
        "id": 7,
        "joke": "Why don’t programmers like nature? It has too many bugs.",
        "author": "Unknown"
    },
    {
        "id": 8,
        "joke": "Why did the coffee file a police report? It got mugged.",
        "author": "Unknown"
    },
    {
        "id": 9,
        "joke": "Why don’t some couples go to the gym? Because some relationships don’t work out.",
        "author": "Unknown"
    },
    {
        "id": 10,
        "joke": "How does a penguin build its house? Igloos it together.",
        "author": "Unknown"
    },
    {
        "id": 11,
        "joke": "What do you call cheese that isn't yours? Nacho cheese.",
        "author": "Unknown"
    },
    {
        "id": 12,
        "joke": "Why don't some people eat clocks? It's too time consuming.",
        "author": "Unknown"
    },
    {
        "id": 13,
        "joke": "What do you call a belt made of watches? A waist of time.",
        "author": "Unknown"
    },
    {
        "id": 14,
        "joke": "Why did the tomato turn red? Because it saw the salad dressing.",
        "author": "Unknown"
    },
    {
        "id": 15,
        "joke": "Why don't you ever see elephants hiding in trees? Because they're so good at it.",
        "author": "Unknown"
    },
    {
        "id": 16,
        "joke": "What did one wall say to the other wall? I'll meet you at the corner.",
        "author": "Unknown"
    },
    {
        "id": 17,
        "joke": "Why was the big cat disqualified from the race? Because it was a cheetah.",
        "author": "Unknown"
    },
    {
        "id": 18,
        "joke": "What did the fish say when it hit the wall? Dam.",
        "author": "Unknown"
    },
    {
        "id": 19,
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "author": "Unknown"
    },
    {
        "id": 20,
        "joke": "Why don't oysters donate to charity? Because they are shellfish.",
        "author": "Unknown"
    }
]
;
app.get( '/api/v1/jokes', ( req, res ) => {

    res.send( jokes );
} );

app.get( '/api/v1/jokes/:id', ( req, res ) => {

    const { id } = req.params;
    const joke = jokes.find( j => j.id == id );
    res.send( joke );
})
const port = process.env.PORT || 5000;

app.listen( port, () => {
    console.log( `Server listening on http://localhost:${port}` );
} )
