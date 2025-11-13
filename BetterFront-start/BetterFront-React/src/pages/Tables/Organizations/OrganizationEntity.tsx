import { Organization } from '../../../models/Organization';

const OrganizationEntity = ({ org }: { org: Organization }) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{org.name}</div>
          </div>
          <div className="border border-gray-100 mb-5"></div>
        </div>
      </div>
    </>
  );
};

export default OrganizationEntity;
