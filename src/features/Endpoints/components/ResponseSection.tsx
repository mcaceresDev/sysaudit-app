import React from 'react'

const ResponseSection = () => {
  return (
    <div className="p-3 m-3 bg-white border rounded">
        <div className="d-flex justify-content-between align-items-center">
            <h4>Respuestas</h4>
            <button className="btn btn-sm btn-outline-primary">Agregar nueva</button>
        </div>
        <hr />

        <div>
            <div className='p-2'>200 OK</div>
            <p>Ejemplo de respuesta exitosa</p>

            <div>
                <code>
                    <span>name: John</span>
                    <span>lastname: Doe</span>
                    <span>City: Managua</span>
                    <span>Job: Analist</span>
                </code>
            </div>
        </div>

    </div>
  )
}

export default ResponseSection