import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import DocotrRow from './DocotrRow';

const ManageDoctors = () => {

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className='px-10'>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
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
                                refetch={refetch}></DocotrRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;