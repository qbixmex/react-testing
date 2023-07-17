type Props = { name: string };

const Greeting = ({ name }: Props) => {
  return (
    <>
      <p>Hello { name }</p>
    </>
  );
};

export default Greeting;
