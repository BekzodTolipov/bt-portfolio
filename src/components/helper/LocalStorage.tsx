function getStorageValue(key, defaultValue?) {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = saved ? JSON.parse(saved) : null;
    return initial || defaultValue;
  }

function setToStorage(key, value) {
    localStorage.setItem(key, value);
}

export { getStorageValue, setToStorage };

