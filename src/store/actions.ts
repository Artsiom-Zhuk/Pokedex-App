export const actionTypes = {
    ADD_POKEMON: 'ADD_POKEMON',
    REMOVE_POKEMON: 'REMOVE_POKEMON'
};

export const addPokemon = (url: string) => ({ type: actionTypes.ADD_POKEMON, url });
export const removePokemon = (url: string) => ({ type: actionTypes.REMOVE_POKEMON, url });