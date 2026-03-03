import React from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/solid';

export type optionType = {
  label: string;
  value: string | number;
};

interface SelectProps {
  options: Array<optionType>;
  isExistAll?: Boolean;
  onChange: Function;
  value: number;
  testId: string;
  disabled?: boolean;
}

/**
 * Filter Select - Headless UI Listbox 기반
 * - dropdown이 Select input 하단에 항상 출력되도록 구현
 * - overflow 부모와 무관하게 올바른 위치에 렌더링
 */
const Select = ({ options, onChange, value, testId, disabled = false }: SelectProps): JSX.Element => {
  const displayOptions = options ?? [];
  const selectedOption = displayOptions.find((o) => Number(o.value) === Number(value)) ?? displayOptions[0];

  return (
    <div className="relative w-full" data-testid={testId}>
      <Listbox value={value ?? 0} onChange={(v) => onChange(v)} disabled={disabled}>
        <Listbox.Button className="select select-bordered w-full focus:input-primary rounded-xl text-left flex items-center justify-between min-h-[2.75rem] bg-base-100 text-base-content">
          <span>{selectedOption?.label ?? '전체'}</span>
        </Listbox.Button>
        <Listbox.Options className="absolute z-50 top-full left-0 right-0 mt-1 w-full max-h-60 overflow-auto rounded-xl bg-base-100 py-1 shadow-xl ring-1 ring-base-content/10 focus:outline-none">
          {displayOptions.map((item) => (
            <Listbox.Option
              key={item.value}
              value={item.value}
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 pl-10 pr-4 text-body2 ${
                  active ? 'bg-primary/10 text-primary' : 'text-base-content'
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>{item.label}</span>
                  {selected && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default Select;
