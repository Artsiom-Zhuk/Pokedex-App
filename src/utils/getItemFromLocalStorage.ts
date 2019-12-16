export default function getItemFromLocalStorage(key: string): string|null {
    const item =  window.localStorage.getItem('favoritePokemons');
    return item;
}