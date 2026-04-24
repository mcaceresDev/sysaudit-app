import { Box, Rocket, UserKey } from 'lucide-react'
import React from 'react'
import type { EndpointDetail } from '../endpoint.types'

const EndpointHeader = ({ endpoint }: { endpoint: Partial<EndpointDetail>}) => {
    return (
        <div className="p-3 m-3 bg-white border rounded">
            <div className='d-flex justify-content-between align-items-center'>
                <h2>{endpoint.name}</h2>
                <div>
                    <button className="mx-2 btn btn-sm btn-outline-primary">Editar endpoint</button>
                    <button className="btn btn-sm btn-outline-primary"><Rocket /></button>
                </div>
            </div>
            <hr />

            <div className='my-3'>
                <Box size={18} className='text-primary' />
                <span className="mx-2 badge bg-success">
                    {endpoint.protocol_type}
                </span>
                <UserKey size={18} className='text-primary' />
                <span className="mx-2 badge bg-secondary mx-2">
                    {endpoint.auth_type}
                </span>
            </div>
            <div className="px-3 py-2 border rounded my-3">
                <span className='mx-2 text-success fw-bold text-uppercase'>{endpoint.method} </span>
                <span>{endpoint.path}</span>
            </div>
            <p className="">{endpoint.description}</p>

        </div>
    )
}

export default EndpointHeader