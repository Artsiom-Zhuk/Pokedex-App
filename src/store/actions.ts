export const actionTypes = {
    ADD_POKEMON: 'ADD_POKEMON',
    REMOVE_POKEMON: 'REMOVE_POKEMON',
    FETCH_ALL_POKEMONS: 'FETCH_ALL_POKEMONS',
    REMOVE_ALL_FAVORITE_POKEMONS: 'REMOVE_ALL_FAVORITE_POKEMONS'
};

export const addPokemon = (url: string, name: string) => ({ type: actionTypes.ADD_POKEMON, url, name });
export const removePokemon = (url: string) => ({ type: actionTypes.REMOVE_POKEMON, url });
export const removeAllFavoritePokemons = () => ({ type: actionTypes.REMOVE_ALL_FAVORITE_POKEMONS });
export const fetchAllPokemons = () => async (dispatch: any) => {
    const responseAllPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000');
    const dataAllPokemons = await responseAllPokemons.json();
    dispatch({type: actionTypes.FETCH_ALL_POKEMONS, arrPokemons: dataAllPokemons.results})
};