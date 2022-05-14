import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointmet Today</h2>
                <p className='text-white py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quam ex ea quisquam quae nobis vero delectus id. Perferendis unde tempora ipsa aliquam officiis. Velit rerum doloremque fugit qui id, animi, blanditiis tempore voluptatum ut optio beatae eius vitae consequuntur.</p>
                <button class="btn btn-primary text-white uppercase font-blod bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;