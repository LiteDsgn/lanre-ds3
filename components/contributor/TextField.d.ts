import * as React from 'react';

/**
 * Labelled text input / textarea in the parchment style: 52px tall, inset well, blue focus, coral error with a warning glyph, optional counter.
 * @startingPoint section="Contributor" subtitle="Input + textarea with helper, error, counter" viewport="700x260"
 */
export interface TextFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'onChange'> {
  label?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  helper?: React.ReactNode;
  /** Error message; sets aria-invalid. */
  error?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  /** Appends "· optional" to the label. */
  optional?: boolean;
  id?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

export function TextField(props: TextFieldProps): JSX.Element;
