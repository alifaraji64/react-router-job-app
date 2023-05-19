import React from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';

const Contact = () => {
    const data = useActionData();
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <Form method='POST' action='/help/contact'>
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
            </Form>
            {data && data.error && <p>{ data.error }</p>}

        </div>
    );
}

export default Contact;

export const ContactAction = async ({ request })=>{
    const reqData = await request.formData();

    const submission = {
        email: reqData.get('email'),
        message: reqData.get('message')
    }

    console.log(submission);
    if(submission.message.length < 10){
        return {error: 'message must be over 10 chars long'}
    }
    return redirect('/');
}
