import { TriangleLeftIcon, TriangleRightIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import { CompareStatsPageContext } from '../../pages/CompareStatsPage';

export default function EquationComponent({ leftStats, rightStats }) {
  const { equationArray } = useContext(CompareStatsPageContext);
  return (
    <div
      className={`compare-stats-equation ${
        leftStats && rightStats ? '' : 'inactive'
      }`}
    >
      {equationArray.map((el, id) => (
        <div className="equation-element" key={id}>
          {el === 'left' ? (
            <TriangleLeftIcon className="equation-icon" />
          ) : null}
          {el === 'right' ? (
            <TriangleRightIcon className="equation-icon" />
          ) : null}
          {el === '=' ? el : null}
        </div>
      ))}
    </div>
  );
}
