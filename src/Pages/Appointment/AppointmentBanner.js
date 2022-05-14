
import chair from '../../assets/images/chair.png';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';




const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div class="hero my-20 px-20 mx-auto">
            <div class="hero-content flex-col lg:flex-row-reverse p-10">
                <img style={{ width: "50%" }} src={chair} />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;