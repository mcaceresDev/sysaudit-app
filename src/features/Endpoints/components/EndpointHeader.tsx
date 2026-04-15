import React from 'react'

const EndpointHeader = () => {
    return (
        <div className="p-3 m-3 bg-white border rounded">
            <div className='d-flex justify-content-between align-items-center'>
                <h2>Detalle Endpoint</h2>
                <button className="btn btn-sm btn-outline-primary">Editar endpoint</button>
            </div>
            <hr />

            <p className="">Descripcion de lo que hace el endpoint</p>

            {/* <div>
                {project.tecnologies?.split(",").map((tech, i) => (
                    <span key={i} className="badge bg-primary me-1">
                        {tech}
                    </span>
                ))}
            </div> */}
        </div>
    )
}

export default EndpointHeader