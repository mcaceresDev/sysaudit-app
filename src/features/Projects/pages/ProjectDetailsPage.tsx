// ProjectDetailPage.tsx
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchProjectDetail } from "../projectDetailSlice"

import { selectProjectDetail, selectProjectDetailLoading } from "../projectDetail.selectors"

import { ProjectHeader } from "../components/ProjectHeader"
import { ProjectStats } from "../components/ProjectStats"
import { ProjectTeam } from "../components/ProjectTeam"
import { ProjectServicesList } from "../components/ProjectServiceList"
import { Box, Link, UserPlus } from "lucide-react"

export const ProjectDetailPage = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const project = useAppSelector(selectProjectDetail)
  const loading = useAppSelector(selectProjectDetailLoading)

  useEffect(() => {
    if (id) dispatch(fetchProjectDetail(Number(id)))
  }, [id, dispatch])

  if (loading) return <p>Cargando...</p>
  if (!project) return <p>No encontrado</p>

  return (
    <div className="rounded bg-light border">

      <ProjectHeader project={project} />

      <ProjectStats stats={project.stats} />

      {/* <div className="row">
        <div className="col-md-4">
          <ProjectTeam team={project.team} />
        </div>

        <div className="col-md-8">
          <ProjectServicesList services={project.services} />
        </div>
      </div> */}

      <div className='m-3 p-3 border rounded bg-white'>
        <div className='d-flex justify-content-between'>
          <h4 className="text-primary">Equipo</h4>
          <div>
            <button className="btn btn-sm btn-outline-primary mx-2">Administrar</button>
            <button className="btn btn-sm btn-outline-primary"><UserPlus size={16} /> Invitar Miembro</button>
          </div>
        </div>
        <hr />

        <ProjectTeam team={project.team} />
      </div>

      <div className='m-3 p-3 border rounded bg-white'>
        <div className='d-flex justify-content-between'>
          <h5>Servicios</h5>
          <button className="btn btn-sm btn-outline-primary mx-2">Agregar nuevo</button>
        </div>
        <hr />

        <ProjectServicesList services={project.services} />
      </div>

    </div>
  )
}