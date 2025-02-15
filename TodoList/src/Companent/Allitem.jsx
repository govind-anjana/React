import React, { useContext } from 'react'
import ItemData from './ItemData'
import { Createcom } from '../Store/Create-context'
function Allitem() {
  const {names}=useContext(Createcom);
    return (
  <>
      {names.map((item,i )=> <ItemData key={i} names={item.name} dates={item.date }></ItemData>
      )}
      </>
  )
}
export default Allitem
