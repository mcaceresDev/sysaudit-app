export interface Project {
  id: number
  name: string
  description?: string
  tecnologies?: string
}

// para formularios
export type CreateProject = Omit<Project, "id">


// projectDetail
export interface ProjectDetail {
  id: number
  name: string
  description: string
  tecnologies: string

  stats: {
    services: number
    endpoints: number
    members: number
  }

  team: {
    name: string
    leader: {
      id: number
      name: string
      lastname: string,
      email: string
    } | null
    members: {
      id: number
      name: string
      lastname: string
    }[]
  }

  services: {
    id: number
    name: string
    protocol_type: string
    endpoints: number
  }[]
}