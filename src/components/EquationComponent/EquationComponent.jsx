import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import { CompareStatsPageContext } from '../../pages/CompareStatsPage';

export default function EquationComponent({ leftStats, rightStats }) {
  const { equationArray } = useContext(CompareStatsPageContext);
  if (!leftStats || !rightStats) {
    return null;
  }
  return (
    <div className="compare-stats-equation">
      {equationArray.map((el, id) => (
        <div className="equation-element" key={id}>
          {el === 'left' ? <ChevronLeftIcon className="equation-icon" /> : null}
          {el === 'right' ? (
            <ChevronRightIcon className="equation-icon" />
          ) : null}
          {el === '=' ? el : null}
        </div>
      ))}
    </div>
  );
}
