import { TriangleLeftIcon, TriangleRightIcon } from '@radix-ui/react-icons';
import { getEquationArray } from '../../utils/functions';

export default function EquationComponent({ leftStats, rightStats }) {
  const equationArray = getEquationArray(leftStats, rightStats);
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
        </div>
      ))}
    </div>
  );
}
