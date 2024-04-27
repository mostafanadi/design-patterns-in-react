import { useEffect, useState } from "react"
import observable from "./observable"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    observable.subscribe((isLoggedIn: boolean) => {
      setIsLoggedIn(isLoggedIn)
    })
  }, [])
  return (
    <div>
      {!isLoggedIn ? <button onClick={() => {
        observable.notify(true)
      }}>LOGIN</button> :
        <button onClick={() => {
          observable.notify(false)
        }}>LOGOUT</button>
      }
    </div>
  )
}


const Body = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    observable.subscribe((isLoggedIn: boolean) => {
      setIsLoggedIn(isLoggedIn)
    })
  }, [])
  return (
    <div>
      {!isLoggedIn ? "YOU ARE NOT LOGGED IN !" : "SUCCESSFULLY LOGGED IN !"}
    </div>
  )
}

export const Observer = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Body />
    </div>
  )
}