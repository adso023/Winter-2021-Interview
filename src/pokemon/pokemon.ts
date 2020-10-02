import fetch from "node-fetch";

export interface IPokemon {
  id: number;
  weight: number;
  height: number;
  moves: string[];
}

export interface IResponse {
  id: number;
  weight: number;
  height: number;
  moves: {
    move: {
      name: string;
    };
  };
}

export class Pokemon {
  url = "https://pokeapi.co/api/v2/pokemon";

  /**
   * Gets the list of Pokemon info objects
   * @param names list of names
   * @returns a Promise of type IPokemon array
   */
  public async getPokemonsByNameList(names: string[]): Promise<IPokemon[]> {
    // TO BE IMPLEMENTED
    // var toGet: string[] = names;
    // var promises = [];
    // var error: boolean = false;
    // const json: IPokemon[] = [];

    // names.forEach(async (name) => {
    //   if (this.checkNameValid(name)) {
    //     promises.push(
    //       await fetch(`${this.url}/${name}`, {
    //         method: "GET",
    //         headers: { "Content-Type": "application/json" },
    //       })
    //         .then(async (response) => {
    //           console.log(await response.json());
    //           console.log("----------------------------------");
    //           const res: IPokemon = await response.json();
    //           console.log(res);
    //           console.log("------------------------------");
    //           json.push(res);
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //           console.log("------------------------");
    //           json.push(null);
    //         })
    //     );
    //   }
    // });

    // return json;
    return null;
  }

  /**
   * Gets a Pokemon info object
   * @param name
   */
  public async getPokemonByName(name: string): Promise<IResponse> {
    if (this.checkNameValid(name)) {
      const res = await fetch(`${this.url}/${name}`);
      console.log(res);
      const json: IResponse = await res.json();
      return json;
    } else {
      throw new Error("Name Invalid");
    }
  }

  /**
   * Checks the name parameter is valid
   * @param name string
   */
  checkNameValid(name: string) {
    return name.length > 0;
  }
}
