import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Faq = () => {
    useTitle("FAQ")
    return (
        <div>
            <h1 className='text-center text-5xl capitalize py-5'>frequently asked question</h1>
        </div>
    );
};

export default Faq;