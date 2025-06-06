import { useContext, createContext } from 'react';
import { AppContext } from '../App';
import SearchColumn from '../components/Views/SearchColumn/SearchColumn';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import PokemonForm from '../components/PokemonDetails/PokemonForm';
import AlertComponent from '../components/AlertComponent/AlertComponent';
import { getEquationArray } from '../utils/functions';
import CompareInfo from '../components/Views/CompareInfo/CompareInfo';

export const CompareStatsPageContext = createContext();

export default function CompareStatsPage() {
  const {
    setCompareIdColumnOne,
    compareColumnOneData,
    isLoadingCompareColumnOne,
    setCompareIdColumnTwo,
    compareColumnTwoData,
    isLoadingCompareColumnTwo,
  } = useContext(AppContext);

  const equationArray = getEquationArray(
    compareColumnOneData,
    compareColumnTwoData
  );
  return (
    <CompareStatsPageContext.Provider
      value={{
        simplified: true,
        equationArray,
      }}
    >
      <section className="compare-stats-search-container">
        <div>
          <SearchColumn
            loading={isLoadingCompareColumnOne}
            setId={setCompareIdColumnOne}
          />
        </div>
        <div>
          <SearchColumn
            loading={isLoadingCompareColumnTwo}
            setId={setCompareIdColumnTwo}
          />
        </div>
      </section>

      <section className="compare-stats-stat-container">
        <div className="compare-stats-card">
          {compareColumnOneData ? (
            <PokemonDetails response={compareColumnOneData} position="left" />
          ) : (
            <div className="compare-data-column-placeholder">
              <p>No data available.</p>
              <p>Type name above to see results.</p>
            </div>
          )}
        </div>
        <div className="compare-stats-card">
          {compareColumnTwoData ? (
            <PokemonDetails response={compareColumnTwoData} position="right" />
          ) : (
            <div className="compare-data-column-placeholder">
              <p>No data available.</p>
              <p>Type name above to see results.</p>
            </div>
          )}
        </div>
      </section>
      <CompareInfo hidden={equationArray.length === 0} />
      <section className="compare-page-form">
        <p className="form-header">Change level & nature</p>
        <PokemonForm />
        <AlertComponent />
      </section>
    </CompareStatsPageContext.Provider>
  );
}
