import Loader from '../Loader/Loader';
export default function EvolutionChainModal({ data, loading }) {
  return (
    <>
      <Loader loading={loading} />
      {data ? <>EvolutionChainModal placeholder</> : null}
    </>
  );
}
