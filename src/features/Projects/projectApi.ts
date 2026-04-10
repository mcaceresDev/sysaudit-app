import { request } from "../../services/api/axiosClient"
import type { Project, CreateProject } from "./project.types"

// GET ALL
export const fetchProjectsRequest = async () => {
  return await request<Project[]>({
    url: "/projects"
  })
}

// CREATE
export const createProjectRequest = async (data: CreateProject) => {
  return await request<Project>({
    method: "post",
    url: "/projects",
    data
  })
}

// UPDATE
export const updateProjectRequest = async (id: number, data: CreateProject) => {
  return await request<Project>({
    method: "put",
    url: `/projects/${id}`,
    data
  })
}

// DELETE
export const deleteProjectRequest = async (id: number) => {
  return await request({
    method: "delete",
    url: `/projects/${id}`
  })
}