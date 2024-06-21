import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
function Fetch() {
    let[loading,data,error] =useFetch('https://dummyjson.com/products')
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-3">
                    <div className="card">
                        {!error && loading && <h1>loading...</h1>}
                        {error && !loading && <h1>{error.message}</h1>}
                        {
                            !loading && data.length > 0 && data.map((item) => {
                                return (
                                    <div className="card-body">
                                        <h1>tiltle :{item.title}</h1>
                                        <p>id:{item.id}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fetch