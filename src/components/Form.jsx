import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export const Form = () => {
    // returns an object
    const form = useForm()
    const { register, control } = form

    return (
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    {...register("username")}
                    >
                </input>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register("emain")}
                    >
                </input>

                <label htmlFor="channel">Channel</label>
                <input
                    type="text"
                    id="channel"
                    {...register("channel")}
                    >
                </input>

                <button>Submit</button>
            </form>
            <DevTool control={control} />
            {/* touched indicates if the field has been interacted
            dirty indicates if the field has been changed */}
        </div>
    )
}
