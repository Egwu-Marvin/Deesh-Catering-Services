import React from 'react'
import { services } from '../page'

export default function page({params}) {
  const serviceSlu = services.find(service => service.name.split(' ').join('-') == params.serviceSlug)
  return (
    <div>
      <div>
        {serviceSlu.name}
        {serviceSlu.visual}
        {serviceSlu.description}
      </div>
    </div>
  )
}
