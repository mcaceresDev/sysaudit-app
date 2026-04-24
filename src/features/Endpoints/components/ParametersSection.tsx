// import React from 'react'

// const ParametersSection = () => {
//   return (
//     <div className="p-3 m-3 bg-white border rounded">
//         <div className="d-flex justify-content-between align-items-center">
//             <h4>Parametros</h4>
//             <button className="btn btn-sm btn-outline-primary">Agregar nuevo</button>
//         </div>
//         <hr />
//         <p>Debajo se listan los parametros requeridos para consultar este endpoint</p>
//         <div className="table-responsive">
//             <table className='table table-stripped table-bordered'>
//                 <thead>
//                     <tr>
//                         <th>Nombre</th>
//                         <th>Ubicación</th>
//                         <th>Tipo de dato</th>
//                         <th>Obligatorio</th>
//                         <th>Descripción</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>id</td>
//                         <td>path</td>
//                         <td>number</td>
//                         <td>true</td>
//                         <td>Id del item que se esta consultando</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
        
//     </div>
//   )
// }

// export default ParametersSection

import { useAppSelector } from "../../../app/hooks"

const ParametersSection = () => {
  const endpoint = useAppSelector(s => s.endpointDetail.data)
  const creating = useAppSelector(s => s.parameter.creating)

  if (!endpoint) return null

  return (
    <div>

      <div className="d-flex justify-content-between mb-3">
        <h5>Parámetros</h5>

        <button className="btn btn-sm btn-outline-primary" disabled={creating}>
          {creating ? "Guardando..." : "Agregar"}
        </button>
      </div>

      {endpoint.parameters.length === 0 ? (
        <p className="text-muted">No hay parámetros configurados</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ubicación</th>
              <th>Tipo</th>
              <th>Req</th>
            </tr>
          </thead>

          <tbody>
            {endpoint.parameters.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.in}</td>
                <td>{p.type}</td>
                <td>{p.required ? "✔" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  )
}

export default ParametersSection