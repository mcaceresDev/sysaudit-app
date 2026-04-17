import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { fetchProjects, createProject, updateProject, deleteProject, openModal } from '../projectSlice'
import { Table } from "../../../components/Table"
import { projectColumns } from '../helpers/projectColumns'
import type { Project } from '../project.types'
import { ProjectModalForm } from '../components/ProjectModalForm'
import { showConfirm, showConfirmDelete } from '../../../shared/alerts/alert.service'

const ProjectPage = () => {

    const dispatch = useAppDispatch()
  const { items } = useAppSelector(
    state => state.projects
  )

  const handleEdit = (project: Project) => {
    // console.log(project);
    dispatch(openModal(project))
    
    // setSelectedProject(project)
    // setShowModal(true)
  }


const handleDelete = async (project: Project) => {
  const confirmed = await showConfirmDelete("Deseas eliminar el proyecto", project.name)

  if (confirmed) {
    dispatch(deleteProject(project.id))
  }
}

  const columns = useMemo(
    () =>
      projectColumns({
        onEdit: handleEdit,
        onDelete: handleDelete
      }),
    []
  )

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])
  

  return (
    <div>
      <h2>Proyectos</h2>
      <hr />
      <div className='py-3'>
        <button className='btn btn-sm btn-outline-success' onClick={() => dispatch(openModal(null))}>
            Crear nuevo
        </button>
      </div>

        <Table data={items} columns={columns} />
        <ProjectModalForm />
    </div>
  )
}

export default ProjectPage