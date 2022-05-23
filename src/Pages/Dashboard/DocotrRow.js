import React from 'react';
import { toast } from 'react-toastify';

const DocotrRow = ({ doctor, index, refetch }) => {

    const { name, speciality, img, email } = doctor;
    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Barer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is deleted successfully`);
                    refetch();
                }
                else {
                    toast.error(`Failled  tp delete`);
                }
            })
    }

    return (
        <tr>

            <td>{index + 1}</td>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button onClick={() => handleDelete(email)} className='btn btn-xs btn-error text-white'>Delete</button></td>
        </tr>
    );
};

export default DocotrRow;