import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ setTreatment, treatment, date }) => {
    const { _id, name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-lg"> {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-8'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-sm w-full max-w-xs" />
                        <select name="slot" className="select select-bordered select-sm w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs" />
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
