import React, { useContext } from 'react'
import {MdDelete} from 'react-icons/md'
import { Createcom } from '../Store/Create-context'
function ItemData({names,dates}) {
  const {handlebuttons}=useContext(Createcom);
  return (
    <div className='container'>
    <div className='row '>
      <div className='col-6'>{names}</div>
      <div className='col-4'>{dates}</div>
      <div className='col-2'><button type="button" className="btn btn-danger" onClick={()=>handlebuttons(names)}><MdDelete /></button></div>
      </div>
      </div>
  )
}

export default ItemData

