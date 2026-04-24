import { useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import { AuthModal } from "./AuthModal"

const AuthConfigSection = () => {
  const endpoint = useAppSelector(state => state.endpointDetail.data)

  if (!endpoint) return <div><h3 className="text-center">Endpoint no encontrado</h3></div>

  const auth = endpoint.auth_config

  const [open, setOpen] = useState(false)


  if (endpoint.auth_type === "none") {
    return (
      <div className="my-3">
        <h4 className="text-center">
          Este endpoint no requiere autenticación
        </h4>

      </div>
    )
  }

  const hasAuth = auth && auth.type

  return (
    <div className="card p-3">
      {!hasAuth ? (
        <>
          <p className="text-muted">
            No hay autenticación configurada
          </p>

          <button className="btn btn-sm btn-outline-primary" onClick={() => setOpen(true)}>
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

      {open && (
        <AuthModal
          endpointId={endpoint.id}
          onClose={() => setOpen(false)}
          defaultValues={endpoint.auth_config}
        />
      )}
    </div>
  )
}

export default AuthConfigSection