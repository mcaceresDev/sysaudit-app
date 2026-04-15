import React from 'react'

const ParametersSection = () => {
  return (
    <div className="p-3 m-3 bg-white border rounded">
        <div className="d-flex justify-content-between align-items-center">
            <h4>Parametros</h4>
            <button className="btn btn-sm btn-outline-primary">Agregar nuevo</button>
        </div>
        <hr />
        <p>Debajo se listan los parametros requeridos para consultar este endpoint</p>
        <div className="table-responsive">
            <table className='table table-stripped table-bordered'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ubicación</th>
                        <th>Tipo de dato</th>
                        <th>Obligatorio</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>path</td>
                        <td>number</td>
                        <td>true</td>
                        <td>Id del item que se esta consultando</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default ParametersSection