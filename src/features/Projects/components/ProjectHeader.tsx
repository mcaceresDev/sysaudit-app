import type { ProjectDetail } from "../project.types"

export const ProjectHeader = ({ project }: { project: ProjectDetail }) => {
  return (
    <div className="p-3 m-3 bg-white border rounded">
      <div className='d-flex justify-content-between align-items-center'>
        <h2>{project.name}</h2>
        <button className="btn btn-sm btn-outline-primary">Editar proyecto</button>
      </div>
      <hr />

      <p className="">{project.description}</p>

      <div>
        {project.tecnologies?.split(",").map((tech, i) => (
          <span key={i} className="badge bg-primary me-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}