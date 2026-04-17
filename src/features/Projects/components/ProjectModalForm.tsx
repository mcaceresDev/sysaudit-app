// components/ProjectModalForm.tsx
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { projectSchema } from "../project.schema"
import type { ProjectFormData } from "../project.schema"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {
  closeModal,
  createProject,
  updateProject
} from "../projectSlice"
import "../styles/projectStyles.css"
import { showToast } from "../../../shared/alerts/alert.service"

export const ProjectModalForm = () => {
  const dispatch = useAppDispatch()

  const { isModalOpen, selectedProject } = useAppSelector(
    (state) => state.projects
  )

  const isEdit = !!selectedProject

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema)
  })

  //llenar formulario en edit
  useEffect(() => {
    if (selectedProject) {
      reset({
        name: selectedProject.name,
        description: selectedProject.description || "",
        tecnologies: selectedProject.tecnologies || ""
      })
    } else {
      reset({
        name: "",
        description: "",
        tecnologies: ""
      })
    }
  }, [selectedProject, reset])

  const onSubmit = (data: ProjectFormData) => {
    if (isEdit) {
      dispatch(updateProject({
        id: selectedProject!.id,
        data
      })).unwrap()
        .then(() => {
          showToast("Proyecto creado correctamente")
        })
        .catch(() => {
          showToast("Error al crear proyecto", "error")
        })
    } else {
      dispatch(createProject(data)).unwrap()
        .then(() => {
          showToast("Actualizado correctamente")
        })
        .catch(() => {
          showToast("Error al crear proyecto", "error")
        })
    }

    dispatch(closeModal())
  }

  if (!isModalOpen) return null

  return (

    <>
      {/* BACKDROP */}
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            {/* HEADER */}
            <div className="modal-header">
              <h5 className="modal-title">
                {isEdit ? "Editar Proyecto" : "Crear Proyecto"}
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(closeModal())}
              />
            </div>

            {/* BODY */}
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                  <label htmlFor="" className="form-label">Nombre</label>
                  <input
                    className="form-control mb-2"
                    {...register("name")}
                  // placeholder="Nombre"
                  />
                  {errors.name && <small>{errors.name.message}</small>}
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="form-label">Descripción</label>
                  <textarea
                    className="form-control mb-2"
                    {...register("description")}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="form-label">Tecnologías</label>
                  <input
                    className="form-control mb-2"
                    {...register("tecnologies")}
                  />
                </div>

                <div className="d-flex w-100">
                  <button className="btn btn-sm btn-outline-success mx-auto">
                    {isEdit ? "Actualizar" : "Guardar"}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}