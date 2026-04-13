import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ProjectPage from '../features/Projects/pages/ProjectPage'
import { ProjectDetailPage } from '../features/Projects/pages/ProjectDetailsPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}

        <Route
          element={
            //  <ProtectedRoute>
              <MainLayout />
            //  </ProtectedRoute>
          }
        >
            {/* aca van las demas rutas */}
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/project/:id' element={<ProjectDetailPage />} />

        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
