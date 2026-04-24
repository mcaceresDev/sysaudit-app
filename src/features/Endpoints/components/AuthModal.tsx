// AuthModal.tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authSchema } from "../schemas/auth.schema"
import { useAppDispatch } from "../../../app/hooks"
import { upsertAuth } from "../authSlice"
import { showToast } from "../../../shared/alerts/alert.service"

type Props = {
  endpointId: number
  onClose: () => void
  defaultValues?: any
}

export const AuthModal = ({ endpointId, onClose, defaultValues }: Props) => {

  const dispatch = useAppDispatch()
//   const { toast } = useAlert()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: defaultValues || {
      type: "authorization"
    }
  })

  const type = watch("type")

  const onSubmit = async (data: any) => {
    try {
      await dispatch(
        upsertAuth({ endpointId, data })
      ).unwrap()

      showToast("Autenticación guardada")
      onClose()

    } catch (err: any) {
      showToast(err.message || "Error", "error")
    }
  }

  return (
    <div className="modal show fade d-block" style={{ background: "#00000066" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5>Configurar Autenticación</h5>
          </div>

          <div className="modal-body">

            {/* TYPE */}
            <label>Tipo</label>
            <select className="form-select mb-2" {...register("type")}>
              <option value="authorization">Authorization</option>
              <option value="api_key">API Key</option>
              <option value="basic">Basic</option>
            </select>

            {/* HEADER */}
            {(type === "authorization" || type === "api_key") && (
              <>
                <label>Header</label>
                <input
                  className="form-control mb-2"
                  {...register("header_name")}
                />
                {errors.header_name && (
                  <small className="text-danger">
                    {errors.header_name.message as string}
                  </small>
                )}
              </>
            )}

            {/* PREFIX */}
            {type === "authorization" && (
              <>
                <label>Prefijo</label>
                <input
                  className="form-control mb-2"
                  {...register("token_prefix")}
                />
                {errors.token_prefix && (
                  <small className="text-danger">
                    {errors.token_prefix.message as string}
                  </small>
                )}
              </>
            )}

          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>

            <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
              Guardar
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}