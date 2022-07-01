
type Button = {
  url?: string;
  children?: string;
  onClick?: any;
};

const Button = ({ onClick, url, children }: Button) => {
  return (
    <>
      {!url ? <></> : <img src={url} alt="" />}
      <button onClick={onClick} class="rounded bg-gradient-to-r from-endlessRiverA to-endlessRiverB py-2 w-full">
        {children}
      </button>
    </>
  );
};

export default Button;
