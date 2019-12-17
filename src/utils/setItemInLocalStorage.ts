export default function setItemInLocalStorage(key: string, value: string): void {
  window.localStorage.setItem(key, value);
}
