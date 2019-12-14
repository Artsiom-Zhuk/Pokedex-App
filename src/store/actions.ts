export const actionTypes = {
    ADD_POKEMON: 'ADD_POKEMON',
    REMOVE_POKEMON: 'REMOVE_POKEMON',
    FETCH_ALL_POKEMONS: 'FETCH_ALL_POKEMONS'
};

export const addPokemon = (url: string) => ({ type: actionTypes.ADD_POKEMON, url });
export const removePokemon = (url: string) => ({ type: actionTypes.REMOVE_POKEMON, url });
export const fetchAllPokemons = () => async (dispatch: any) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=1000');
    const data = await response.json();
    dispatch({type: actionTypes.FETCH_ALL_POKEMONS, arrPokemons: data.results})
};