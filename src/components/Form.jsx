import React from 'react';
import { useForm } from 'react-hook-form';

export const Form = () => {
    // returns an object
    const form = useForm()
    const { register } = form
    const { name, ref, onChange, onBlur } register("username")

    return (
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                    >
                </input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"></input>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel"></input>

                <button>Submit</button>
            </form>
        </div>
    )
}
