import React, { useEffect, useState } from 'react'

function Product({data:filter}) {
  return (
        <div className="row d-flex justify-content-center">
              {filter.length>0 && filter?.map((item)=>{
                return <div className='col-md-3'>
                    <div className="card">
                        <div className="card-body">
                            <h4>name:{item?.username}</h4>
                            <hr/>
                            <p>email:{item?.email}</p>
                        </div>
                    </div>
                </div>
              })}
        </div>
  )
}

export default Product