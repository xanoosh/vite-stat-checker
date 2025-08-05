// export default function Error() {
//   return (
//     <div className="error">
//       <p>An unexpected error has occured</p>
//     </div>
//   );
// }

import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { resetPokemonData } from '../../redux/pokemonDataSlice';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <AlertDialog.Root defaultOpen={true}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="alert-overlay" />
        <AlertDialog.Content className="alert-content error">
          <AlertDialog.Title className="alert-heading">
            An unexpected error has occured
          </AlertDialog.Title>
          <AlertDialog.Description>
            Click a button below to reset data & settings and fix this issue.
          </AlertDialog.Description>
          <div className="alert-buttons">
            <AlertDialog.Action asChild>
              <Button
                variant="danger"
                text="Reset"
                onClick={() => {
                  dispatch(resetPokemonData());
                  navigate(0);
                }}
              />
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
