import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ setTreatment, treatment, date, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formttedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: formttedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment booked successfully on ${formttedDate} at ${slot}`);
                }
                else {
                    toast.error(`You already have an appointment on ${formttedDate} at ${slot}`)
                }
                refetch();
                setTreatment(null);
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-lg"> {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-8'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-sm w-full max-w-xs" />
                        <select name="slot" className="select select-bordered select-sm w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ""} className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ""} className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary  w-full max-w-xs" />
                    </form>
                    <div className="modal-action">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
