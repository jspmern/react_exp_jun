
function Todos({data:filter}) {
  return (
        <div className="row d-flex justify-content-center">
              {filter.length>0 && filter?.map((item)=>{
                return <div className='col-md-3'>
                    <div className="card">
                        <div className="card-body">
                            <h4>id:{item?.userId}</h4>
                            <hr/>
                            <p>title:{item?.title.slice(10)}</p>
                        </div>
                    </div>
                </div>
              })}
        </div>
      
  )
}

export default Todos