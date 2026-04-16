import { Box, Rocket, UserKey } from 'lucide-react'
import React from 'react'

const EndpointHeader = () => {
    return (
        <div className="p-3 m-3 bg-white border rounded">
            <div className='d-flex justify-content-between align-items-center'>
                <h2>Detalle Endpoint</h2>
                <div>
                    <button className="mx-2 btn btn-sm btn-outline-primary">Editar endpoint</button>
                    <button className="btn btn-sm btn-outline-primary"><Rocket /></button>
                </div>
            </div>
            <hr />

            <div className='my-3'>
                <Box size={18} className='text-primary' />
                <span className="mx-2 badge bg-success">
                    REST
                </span>
                <UserKey size={18} className='text-primary' />
                <span className="mx-2 badge bg-secondary mx-2">
                    none
                </span>
            </div>
            <div className="px-3 py-2 border rounded my-3">
                <span className='mx-2 text-success fw-bold'>GET </span>
                <span>/all</span>
            </div>
            <p className="">Descripcion de lo que hace el endpoint</p>

        </div>
    )
}

export default EndpointHeader