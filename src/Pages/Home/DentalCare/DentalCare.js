import React from 'react';
import treatment from '../../../assets/images/treatment.png'


const description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page"

const DentalCare = () => {
    return (
        <div className="hero mt-8">
            <div className="hero-content flex-col lg:flex-row gap-16">
                    <img src={treatment} className=" rounded-lg shadow-2xl md:w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">{description}</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;