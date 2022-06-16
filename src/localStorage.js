const saveToLocalStorage = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
}

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }
}