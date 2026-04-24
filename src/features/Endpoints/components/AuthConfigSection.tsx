// import { Baseline, BookText, Shield } from "lucide-react"

import { useAppSelector } from "../../../app/hooks"

// const AuthConfigSection = () => {
//     return (
//         <div className="p-3 m-3 bg-white border rounded">
//             <div className='d-flex justify-content-between align-items-center'>
//                 <h4>Configuración de Autenticación</h4>
//                 <div>
//                     <button className="mx-2 btn btn-sm btn-outline-primary">Editar configuración</button>
//                 </div>
//             </div>
//             <hr />

//             <div className="mb-3">
//                 <h5 className="form-label">Tipo de Autenticación</h5>
//                 <p className="my-3"><Shield className="text-primary" /> Bearer</p>
//             </div>
//             <div className="mb-3">
//                 <h5 className="form-label">Header</h5>
//                 <p className="my-3"><BookText className="text-primary" /> Authorization</p>
//             </div>
//             <div className="mb-3">
//                 <h5 className="form-label">Prefijo de token</h5>
//                 <p className="my-3"><Baseline className="text-primary" /> Bearer</p>
//             </div>
//         </div>
//     )
// }

// export default AuthConfigSection


const AuthConfigSection = () => {
  const endpoint = useAppSelector(state => state.endpointDetail.data)

  if (!endpoint) return <div><h3 className="text-center">Endpoint no encontrado</h3></div>

  const auth = endpoint.auth_config

  return (
    <div className="card p-3">

      {!auth ? (
        <>
          <p className="text-muted">
            No hay autenticación configurada
          </p>

          <button className="btn btn-primary">
            Agregar autenticación
          </button>
        </>
      ) : (
        <>
          <p><strong>Tipo:</strong> {auth.type}</p>
          <p><strong>Header:</strong> {auth.header_name}</p>

          {auth.type === "authorization" && (
            <p><strong>Prefijo:</strong> {auth.token_prefix}</p>
          )}

          <button className="btn btn-outline-primary">
            Editar configuración
          </button>
        </>
      )}

    </div>
  )
}

export default AuthConfigSection