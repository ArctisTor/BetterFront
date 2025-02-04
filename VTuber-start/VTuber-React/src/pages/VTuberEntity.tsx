import { VTuber } from '../models/VTuber'

const VTuberEntity = ({vtuber} : {vtuber: VTuber}) => {
  return (
    <>
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{vtuber.name}</div>
        </div>
        <div className="border border-gray-100 mb-5"></div>
      </div>
    </div>
  </>
  )
}

export default VTuberEntity