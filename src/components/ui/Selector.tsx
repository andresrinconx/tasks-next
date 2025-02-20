import { Option } from '@/lib/types';

type SelectorProps<T> = {
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void | Promise<void>;
  textTransform?: 'uppercase' | 'capitalize';
}

const Selector = <T extends string,>({ value, options, onChange, textTransform }: SelectorProps<T>) => {
  return (
    <select
      className={`text-white font-semibold text-xs text-center rounded-lg py-0.5 px-1 focus:outline-none shadow-sm appearance-none cursor-pointer ${textTransform}`}
      style={{ background: options.find((option) => option.value === value)?.color }}
      value={value}
      onChange={async (e) => await onChange(e.target.value as T)}
    >
      {options.map(option => (
        <option className={textTransform} key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default Selector;