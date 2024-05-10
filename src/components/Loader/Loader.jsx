import { ThreeDots } from 'react-loader-spinner';
export default function Loader({ loading }) {
  return loading ? (
    <ThreeDots
      visible={true}
      height="40"
      width="40"
      color="#646cff"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperClass="loader"
    />
  ) : null;
}
