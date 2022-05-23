import React from 'react';
import { toast } from 'react-toastify';

const DocotrRow = ({ doctor, index, refetch, setDdocotor }) => {

    const { name, speciality, img, email } = doctor;


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
            <td>
                <label onClick={() => setDdocotor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error text-white">Delete</label>
            </td>
        </tr>
    );
};

export default DocotrRow;