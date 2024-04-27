import React, { useEffect, useState } from 'react'
import { AdminState, Dashboard, UserState } from './implemenation'

type Props = {}


const AdminPanel = <div>ADMIN PANEL CONTENT</div>


export default function State({ }: Props) {
  const adminState = new AdminState(AdminPanel)
  const userState = new UserState(AdminPanel)
  const dashboard = new Dashboard(adminState)
  const [state, setState] = useState(dashboard.handleRequest())

  useEffect(() => {

  }, [])
  return (
    <div className='flex flex-col gap-5'>
      <button onClick={() => {
        dashboard.setSatte(userState)
        setState(dashboard.handleRequest())
      }}>USER State</button>
      <button onClick={() => {
        dashboard.setSatte(adminState)
        setState(dashboard.handleRequest())
      }}>ADMIN State</button>
      {state}
    </div>
  )
}