import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from './Shared/PrimaryButton';

const HomeContact = () => {
    return (
        <section className='my-40 p-5' style={{ background: `url(${appointment})` }}>
            <h3 className='text-center text-xl text-secondary'>Contact Us</h3>
            <h2 className='text-3xl text-white text-center'>Stay connected with us</h2>
            <div className='mt-8 flex flex-col justify-center items-center gap-5'>
                <input type="text" placeholder="Type here" class="input input-sm w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-sm w-full max-w-xs" />
                <textarea class="textarea w-full max-w-xs" placeholder="Bio"></textarea>
                <button class="text-white font-bold bg-gradient-to-r from-primary to-secondary px-8 py-1 rounded">Submit</button>

            </div>

        </section>
    );
};

export default HomeContact;