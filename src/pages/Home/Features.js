import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Features = () => {
    return (
        <div>
            <div class="card card-side pb-40">
            <figure><img src={treatment} alt="treatment"/></figure>
            <div class="card-body">
                <h2 class="card-title text-4xl">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div class="card-actions">
                <button class="btn btn-primary">Get started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Features;