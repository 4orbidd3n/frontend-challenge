const defaultFetchData = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer'
}

export function fetchData(url, data = {}) {
  const fetchOptions = {...defaultFetchData, ...data};
  return fetch(url, fetchOptions)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
      return myJson;
  });
}

export function isValidKeydown(e, key, onlyKeyboard = false) {
  return (e.type === "keydown" && e.key === key) || (onlyKeyboard ? false : e.type !== "keydown");
}
