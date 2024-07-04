import express from 'express';
import 'dotenv/config';
const app = express();

app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' );
} );

const jokes = [
    {
        id: 1,
        joke: 'A man who testifies ontestCase: "I am a woman, and I have an IQ of 100" is a very smart woman.'
    },
    {
        id: 2,
        joke: 'A man who tests ontestCase: "I am a woman, and I have an IQ of 20" is a very smart woman.'
    },
    {
        id: 3,
        joke: 'A man who tests ontestCase: "I am a woman, and I have an IQ of 50" is a very smart woman.'
    },
    {
        id: 4,
        joke: 'A man who tests ontestCase: "I am a woman, and I have an IQ of 80" is a very smart woman.'
    },
    {
        id: 5,
        joke: 'A man who tests ontestCase: "I am a woman, and I have an IQ of 90" is a very smart woman.'
    }
];
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
