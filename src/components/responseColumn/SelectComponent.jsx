import * as Select from '@radix-ui/react-select';
import * as Label from '@radix-ui/react-label';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function SelectComponent({
  items,
  value,
  onValueChange,
  label,
  id,
}) {
  if (items.length === 0) return null;
  return (
    <div className="select-container">
      {label && id ? (
        <Label.Root className="label" htmlFor={id}>
          {label}
        </Label.Root>
      ) : null}
      <Select.Root value={value} onValueChange={(e) => onValueChange(e)}>
        <Select.Trigger id={id} className="select-trigger">
          <Select.Value>{value}</Select.Value>
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className="select-content"
            sideOffset={3}
            position="popper"
          >
            <Select.Viewport className="SelectViewport">
              {items.map((item, index) => (
                <Select.Item className="select-item" key={index} value={item}>
                  <Select.ItemText>{item}</Select.ItemText>
                </Select.Item>
              ))}
              <Select.Separator />
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
