import React, { useContext } from 'react'
import { Createcom } from '../Store/Create-context'
function Error() {
  const {names}=useContext(Createcom);
  
  // console.log(names.length);
  
  return (
  <>
  {names.length==0 && <p>Enjoy Your Day</p>}
  </>
  )
}

export default Error
