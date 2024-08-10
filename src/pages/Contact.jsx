import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";

const Contact = () => {
const formRef = useRef();
const [form, setForm] = useState({ name: "", email: "", message: "" });
const [loading, setLoading] = useState(false);

const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
};

const handleFocus = () => {};
const handleBlur = () => {};

const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
        from_name: form.name,
        to_name: "Deep Raj",
        from_email: form.email,
        to_email: "deepraj@gmail.com",
        message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
        () => {
        setLoading(false);
        },
        (error) => {
        setLoading(false);
        console.error(error);
        });
};

return (
    <section className='relative flex lg:flex-row flex-col max-container'>

    <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
        <label className='text-black-500 font-semibold'>
            Name
            <input
            type='text'
            name='name'
            className='input'
            placeholder='Testname'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </label>
        <label className='text-black-500 font-semibold'>
            Email
            <input
            type='email'
            name='email'
            className='input'
            placeholder='test@gmail.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </label>
        <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
            name='message'
            rows={4}
            className='textarea'
            placeholder='Write your thoughts here...'
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </label>

        <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {loading ? "Sending..." : "Submit"}
        </button>
        </form>
    </div>
    </section>
);
};

export default Contact;