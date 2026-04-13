import { User } from "lucide-react"

export const ProjectTeam = ({ team }: any) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5>{team.name}</h5>

        <div className='d-flex gap-4 align-items-center'>
          <div className='d-flex gap-2 my-3'>
            <div className='border rounded-circle p-3 bg-primary-subtle'>
              <User size={40} />
            </div>
            <div>
              <span className='d-block fw-bold'>{team.leader
                ? `${team.leader.name} ${team.leader.lastname}`
                : "N/A"}</span>
              <span>Lider de proyecto</span> <br />
              <span>{team.leader.email}</span>
            </div>
          </div>

          <div className="h-100 border-start px-3">
            <h5>Colaboradores</h5>
            <ul className='list-unstyled'>
              {team.members.map((m: any) => (
                <li key={m.id}>
                  <span className="text-primary"><User /></span> {m.name} {m.lastname}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}