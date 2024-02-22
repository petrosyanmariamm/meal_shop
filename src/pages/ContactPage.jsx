import React, { useState } from 'react';

export  function ContactPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
});
const [errors, setErrors] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
}

const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
        // Form is valid, you can submit it
        alert("Form submitted successfully:");
        reset();
    } else {
        // Form has errors, display them
        setErrors(validationErrors);
    }
}
const reset = ()=>setFormData(prev=> prev={ username: '',
                                            email: '',
                                            message: '',});
const validateForm = (formData) => {
    let errors = {};
    // Example validation rules
    if (!formData.username.trim()) {
        errors.username = "Username is required";
    }
    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
        errors.message = "Message is required";
    }
    console.log(errors);

    return errors;
}

return (
    <div className='mx-auto p-10 pt-[9rem] flex justify-center  flex-col md:w-[45rem] sm:w-[35rem]'>
        <h2 className=' font-medium text-orange-600 text-4xl  text-center'>Message</h2>  
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-4 md:w-[40rem]  '>


            <input
                className=' border-2 p-3'
                type="text"
                name="username"
                placeholder='Name'
                value={formData.username}
                onChange={handleChange}
            />
            <p className=' text-orange-900 font-semibold'> {errors.username && <span>{errors.username}</span>}</p>


            <input
                className=' border-2 p-3'
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
            />
            <p className=' text-orange-900 font-semibold'>    {errors.email && <span>{errors.email}</span>}</p>



            <textarea
                className=' border-2 p-3 h-[12rem] '
                type="message"
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
            ></textarea>
            <p className=' text-orange-900 font-semibold'> {errors.message && <span>{errors.message}</span>}</p>

            <button className= ' bg-orange-400 px-4 py-2 hover:bg-orange-100 rounded mt-4 text-white hover:text-orange-600 duration-1000 md:w-[13rem] sm:w-[8rem] h-[3rem] md:ml-[13rem] sm:ml-[10rem]' type='submit'>Send</button>

        </form>
        <br />
        <br />
        <br />
    </div>
);
}
