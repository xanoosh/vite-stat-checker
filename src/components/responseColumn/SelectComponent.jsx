import * as Select from '@radix-ui/react-select';
import '../../styles/select.css';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function SelectComponent({ items, value, onValueChange }) {
  if (items.length === 0) return null;
  return (
    <Select.Root value={value} onValueChange={(e) => onValueChange(e)}>
      <Select.Trigger className="SelectTrigger">
        <Select.Value>{value}</Select.Value>
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="SelectContent"
          sideOffset={3}
          position="popper"
        >
          <Select.Viewport className="SelectViewport">
            {items.map((item, index) => (
              <Select.Item className="SelectItem" key={index} value={item}>
                <Select.ItemText>{item}</Select.ItemText>
              </Select.Item>
            ))}
            <Select.Separator />
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
