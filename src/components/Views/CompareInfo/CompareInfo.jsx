import { StarFilledIcon } from '@radix-ui/react-icons';

export default function CompareInfo({ hidden = false }) {
  return hidden ? null : (
    <section className="compare-info">
      <p>
        Badge
        <div className="badge">
          <StarFilledIcon />
        </div>
        indicates higher <strong>base</strong> stat compared to the other
      </p>
    </section>
  );
}
