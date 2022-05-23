import React from 'react';
import { Button } from 'react-day-picker';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ dDoctor, refetch, setDdocotor }) => {
    const { name, email } = dDoctor;
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
                    setDdocotor(null);
                    refetch();
                }
                else {
                    toast.error(`Failled  tp delete`);
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}</h3>
                    <p class="py-4">Once deleted then doctor can not be restored</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(email)} class="btn btn-xs btn-error text-white">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs  text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;