export const autologinRequest = () => {
  return fetch("http://localhost:3000/autologin", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    }
  })
  .then(response => response.json())
}

export const loginRequest = (body) => {
  return fetch('http://localhost:3000/login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(response => response.json())
}

export const signupRequest = (body) => {
  return fetch('http://localhost:3000/users', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(response => response.json())
}

export const addMessageRequest = (channel, message) => {
  return fetch(`http://localhost:3000/channels/${channel}/messages`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(message),
  })
  .then(response => response.json())
}

export const messagesRequest = (channel_id) => {
  return fetch(`http://localhost:3000/channels/${channel_id}`)
  .then(res => res.json())
}

export const likeRequest = (message_id) => {
  return fetch(`http://localhost:3000/messages/${message_id}/likes`, {
    method: "POST"
  })
  .then(res => res.json())
}

export const channelsRequest = () => {
  return fetch("http://localhost:3000/channels")
  .then(res=>res.json())
}
