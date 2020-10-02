import express from 'express';
import { IPokemon, Pokemon } from './pokemon/pokemon';
import url from 'url';

const app = express();
app.use(express.json());
const port = 8001; // default port to listen

// define a route handler for the default home page
app.get('/', async (request: any, response: any) => {
  response.send({});
});

// Test the pokemon endpoint
app.get('/pokemon', async (request, response) => {
  const p = new Pokemon();
  // Sends in the requested name
  try {
    const result = await p.getPokemonByName(String(request.query.name));
    // const names: string[] = request.query.name.toLocaleString().split(",");
    // names.forEach((name) => console.log(`Name: ${name}`));
    // const result = await p.getPokemonsByNameList(names);
    // var error: boolean = false;
    // const toDisplay: IPokemon[] = [];

    // result.forEach((res) => {
    //   if (res !== null) {
    //     toDisplay.push(res);
    //   } else {
    //     error = true;
    //   }
    // });

    // Sends back the id of the pokemon
    response.send({
      data: result,
    });
  } catch (e) {
    console.log(e);
    response.status(500);
    response.send({
      error: 'Could not find pokemon',
    });
  }
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
