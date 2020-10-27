export async function fetchClient(url) {
	try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

