import React from 'react'

function Greetings({isLoggedIn}) {
  
    if(isLoggedIn) {
        return <h1>Bienvenido!</h1>
    } else {
        return <h1>Por favor, inicie su sesion!</h1>
    }
}

export default Greetings