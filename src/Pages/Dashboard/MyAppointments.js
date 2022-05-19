import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking1?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])
    return (
        <div className='px-10'>
            <h2 className='text-center text-xl  pb-5'>My Appointments</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointments.map(a => <tr>
                                <th>{appointments.indexOf(a) + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatmentName}</td>
                            </tr>)
                        }

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyAppointments;