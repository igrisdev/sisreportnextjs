import { getAllReports, getAllTechniques } from '../../server/utils/actions'

import CardTechniques from '../../client/components/CardTechniques'
import TableDashboard from '../../client/components/TableDashboard'

export default async function page() {
  const techniques = await getAllTechniques()
  const newTechniques = techniques
    .filter((technique) => technique.rol === 'technique')
    .map((technique) => ({
      id: technique._id.toString(),
      name: technique.nombre,
      rol: technique.rol,
    }))

  const reports = await getAllReports()
  const newReports = reports.map((report) => ({
    _id: report._id.toString(),
    numeroComputador: report.numeroComputador,
    sede: report.sede,
    salon: report.salon,
    description: report.description,
    estado: report.estado,
  }))

  return (
    <>
      <div className='bg-secondary rounded-md p-4'>
        <h2 className='text-xl font-medium mb-4'>
          Técnicos ({newTechniques.length})
        </h2>
        <div className='gridCardTechniques'>
          {newTechniques.map((techniques) => (
            <CardTechniques
              key={techniques.id}
              {...techniques}
            />
          ))}
        </div>
      </div>

      <div className='bg-secondary rounded-md p-4'>
        <h2 className='text-xl font-medium mb-4'>Reportes Nuevos</h2>
        <TableDashboard
          reports={newReports}
          stateReport={'Reportado'}
        />
      </div>
    </>
  )
}
