import { type AlertProps } from './alert';

const Alert = ({ message }: AlertProps) => {
  return (
    <section className='alert'>
      <p>{message}</p>
    </section>
  );
};

export default Alert;
