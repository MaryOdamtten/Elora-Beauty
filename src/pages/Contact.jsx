import React from 'react'

const Contact = () => {
    return (
        <div className="md:px-10 px-4 mt-3 flex flex-col justify-center items-center">
            <div className='w-full max-w-xl'>
            <h1 className='text-center font-bold text-xl md:text-2xl mt-3'>CONTACT US FORM</h1>
            <p className='mt-5'>Name *</p>
            <input type="text" placeholder='Enter full name' className='border border-gray-300 px-3 py-2 w-full rounded-xl font-semibold text-gray-400 mt-2' /><br />
            <p className='mt-5'>Phone number *</p>
            <input type="text" placeholder='Enter number' className='border border-gray-300 px-3 py-2 w-full rounded-xl font-semibold text-gray-400 mt-2' /><br />
            <p className='mt-5'>Email *</p>
            <input type="text" placeholder='Enter email address' className='border border-gray-300 px-3 py-2 w-full rounded-xl font-semibold text-gray-400 mt-2' /><br />
            <p className='mt-5'>Message *</p>
            <textarea type="text" placeholder='Tell us what you need' rows="4" className='border border-gray-300 px-3 py-2 w-full rounded-xl font-semibold text-gray-400 mt-2 resize-none' />
</div>
            <div className='mt-5 mb-3 w-full max-w-xl flex justify-start'>
                <button className='bg-[#C4A484] text-white font-medium px-6 py-3 rounded-xl'>Send Message</button>
            </div>
        </div>
    )
}

export default Contact
