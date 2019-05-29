import { URL_LOGIN, SET_USER } from './types'


function loginUser(username, password){
  return (dispatch) => {
    fetch(URL_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
          username: username,
          password: password
      })
    }).then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      }).then((auth) => {
        localStorage.setItem('token', auth.token)
        dispatch({type: SET_USER, payload: auth.user})
      })
      .catch(r => r.json().then(e => {
        console.log("Incorrect Username or password")
      }))
  }
}

export { loginUser }
