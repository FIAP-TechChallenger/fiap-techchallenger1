"use client";

import { ChangeEvent } from "react";
import InputLabel from "./InputLabel";

export interface InputSelectOptions {
  /** Identificador */
  name: string;
  /** Texto do label */
  label: string;
  /** Valor da opção selecionada */
  value?: string | number;
  /** Erro */
  error?: string;
  /** Opções disponíveis */
  options?: InputSelectOption[];
  /** Estilo */
  style?: "ligth" | "dark";
  /** Evento de alteração do valor. */
  onValueChanged?: { (value: any): void };
}

export interface InputSelectOption {
  /** Valor da opção, utilizado para identificar o valor selecionado. */
  value: any;
  /** Texto exibido para o usuário */
  label: string;
}

export default function InputSelect(options: InputSelectOptions) {
  const style = options.style ?? "ligth";

  function onValueChanged(event: ChangeEvent<HTMLSelectElement>) {
    if (options.onValueChanged) options.onValueChanged(event.target.value);
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <InputLabel htmlFor={options.name} text={options.label} />
      {/* className="border border-gray-300 rounded p-2" */}
      <select
        className={`input w-full border-[1px] ${
          style === "ligth" ? "border-fiap-light-blue" : "border-fiap-navy-blue"
        }`}
        name={options.name}
        value={options.value}
        onChange={onValueChanged}
      >
        {options.options?.length &&
          options.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {options.error && <span className="text-red-500">{options.error}</span>}
    </div>
  );
}
