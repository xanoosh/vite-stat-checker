import { Oval } from 'react-loader-spinner';
export default function Loader({ loading }) {
  return loading ? (
    <Oval
      visible={true}
      height="30"
      width="30"
      color="#646cff"
      strokeWidth="5"
      secondaryColor="#646cffff"
      radius="9"
      ariaLabel="oval-loading"
      wrapperClass="loader"
    />
  ) : null;
}
