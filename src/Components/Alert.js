import React from 'react'

export const Alert = (props) => {
  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-600 p-2" role="alert">
  <p className="font-bold">Success!</p>
  <p>{props.message}</p>
</div>
  )
}
