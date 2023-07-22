import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

export const Form = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log('Form Submitted', data);
  };

  renderCount++;

  return (
    <div>
      <h1>Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register('username')}
        ></input>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register('email')}
        ></input>

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register('channel')}
        ></input>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
      {/* touched indicates if the field has been interacted
          dirty indicates if the field has been changed */}
    </div>
  );
};
