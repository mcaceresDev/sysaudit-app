// projectSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProjectsRequest,
  createProjectRequest,
  updateProjectRequest,
  deleteProjectRequest } from "./projectApi"
import type { Project, CreateProject } from "./project.types"

interface ProjectState {
  items: Project[]
  loading: boolean
  error: string | null
  isModalOpen: boolean
  selectedProject: Project | null
}

const initialState: ProjectState = {
  items: [],
  loading: false,
  error: null,
  isModalOpen: false,
  selectedProject: null
}

// GET
export const fetchProjects = createAsyncThunk(
  "projects/fetch",
  async () => {
    return await fetchProjectsRequest()
  }
)

// CREATE
export const createProject = createAsyncThunk(
  "projects/create",
  async (data: CreateProject, { dispatch }) => {
    await createProjectRequest(data)

    // REFRESH AUTOMÁTICO
    dispatch(fetchProjects())
  }
)

// UPDATE
export const updateProject = createAsyncThunk(
  "projects/update",
  async ({ id, data }: { id: number; data: CreateProject }, { dispatch }) => {
    await updateProjectRequest(id, data)
    dispatch(fetchProjects())
  }
)

// DELETE
export const deleteProject = createAsyncThunk(
  "projects/delete",
  async (id: number, { dispatch }) => {
    await deleteProjectRequest(id)
    dispatch(fetchProjects())
  }
)

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    openModal: (state, action) => {
    state.selectedProject = action.payload || null
    state.isModalOpen = true
  },
  closeModal: (state) => {
    state.isModalOpen = false
    state.selectedProject = null
  }
  },
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error al cargar proyectos"
      })

      // CREATE
      .addCase(createProject.pending, (state) => {
        state.loading = true
      })
      .addCase(createProject.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error al crear proyecto"
      })

      // UPDATE
      .addCase(updateProject.pending, (state) => {
        state.loading = true
      })
      .addCase(updateProject.fulfilled, (state) => {
        state.loading = false
      })

      // DELETE
      .addCase(deleteProject.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteProject.fulfilled, (state) => {
        state.loading = false
      })
  }
})

export const { openModal, closeModal } = projectSlice.actions
export default projectSlice.reducer