import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DocotrRow from './DocotrRow';

const ManageDoctors = () => {

    const [dDoctor, setDdocotor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-10'>
            <h2 className="text-2xl">Manage Doctors</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DocotrRow key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDdocotor={setDdocotor}></DocotrRow>)
                        }

                    </tbody>
                </table>
            </div>
            {dDoctor && <DeleteConfirmModal
                dDoctor={dDoctor}
                refetch={refetch}
                setDdocotor={setDdocotor}></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;