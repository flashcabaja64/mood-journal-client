import config from '../config';
import TokenService from '../services/token-service';


//Need to finish other endpoints
const EntryApiService = {
  getEntries() {
    return fetch(`${config.API_ENDPOINT}/entries`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },

  getEntry(entryId) {
    return fetch(`${config.API_ENDPOINT}/entries/${entryId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },

  getEntryComments(entryId) {
    return fetch(`${config.API_ENDPOINT}/entries/${entryId}/reviews`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },

  postComment(entryId, text, rating) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        entry_id: entryId,
        rating,
        text,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },
}

export default EntryApiService;