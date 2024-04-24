import * as Select from '@radix-ui/react-select';
import '../../styles/select.css';

export default function SelectComponent({ items, value, onValueChange }) {
  if (items.length === 0) return null;
  return (
    <Select.Root value={value} onValueChange={(e) => onValueChange(e)}>
      <Select.Trigger className="SelectTrigger">
        <Select.Value>{value}</Select.Value>
        <Select.Icon className="SelectIcon">
          {/* <ChevronDownIcon /> */}x
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.Viewport className="SelectViewport">
            {items.map((item, index) => (
              <Select.Item key={index} value={item}>
                <Select.ItemText>item</Select.ItemText>
              </Select.Item>
            ))}
            <Select.Separator />
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
