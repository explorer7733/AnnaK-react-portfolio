import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validaeEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};
        if (!name) {
            formErrors.name = 'Name is required';
        }

        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!validaeEmail(email)) {
            formErrors.email = 'Email is invalid';
        }

        if (!message) {
            formErrors.message = 'Message is required';
        }

        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            console.log({ name, email, message });
            alert('Form submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
        }
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;