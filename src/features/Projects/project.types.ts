export interface Project {
  id: number
  name: string
  description?: string
  tecnologies?: string
}

// para formularios
export type CreateProject = Omit<Project, "id">