import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { LaptopMinimalCheck } from "lucide-react"
import type { Project, ProjectDetail } from "../project.types"
import { ProjectModalForm } from "./ProjectModalForm"
import { openModal } from "../projectSlice"

export const ProjectHeader = ({ project }: { project: ProjectDetail }) => {

  const dispatch = useAppDispatch()

  const handleEdit = (project: Project) => {
    // console.log(project);
    dispatch(openModal(project))
  }

  return (
    <div className="p-3 m-3 bg-white border rounded">
      <div className='d-flex justify-content-between align-items-center'>
        <h2>{project.name}</h2>
        <button className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(project)}>Editar proyecto</button>
      </div>
      <hr />

      <p className="">{project.description}</p>

      <div>
        {project.tecnologies && <LaptopMinimalCheck className="me-2 text-primary" />}
        {project.tecnologies?.split(",").map((tech, i) => (
          <span key={i} className="badge bg-primary me-1">
            {tech}
          </span>
        ))}
      </div>

      <ProjectModalForm />
    </div>
  )
}