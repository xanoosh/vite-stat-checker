import { getTypeColor } from '../../utils/functions';

export default function TypeBadge({ typeName }) {
  const typeBackground = getTypeColor(typeName);
  if (!typeName) return null;
  return (
    <div
      className="type-badge"
      style={
        typeBackground
          ? { backgroundColor: typeBackground }
          : { backgroundColor: 'black' }
      }
    >
      {typeName}
    </div>
  );
}
