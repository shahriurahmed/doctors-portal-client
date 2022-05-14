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
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-center text-lg"> {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-8'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-sm w-full max-w-xs" />
                        <select name="slot" class="select select-bordered select-sm w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" placeholder="Your Name" class="input input-bordered input-sm w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" class="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered input-sm w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary  w-full max-w-xs" />
                    </form>
                    <div class="modal-action">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
