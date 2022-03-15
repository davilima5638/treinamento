import React, { useState } from 'react';

export default function useValidated(DefaultText, validator) {
  const [text, setText] = useState(DefaultText);
  const [error, setError] = useState(validator(DefaultText));

  const onChange = e => {
    const newText = e.target.value;
    const error = validator(newText);
    setError(error);
    setText(newText);
  };

  return [{ value: text, onChange }, error];
}

export function ErrorComponent({ DefaultText }) {
  const validator = text => (text.length > 12 ? 'Por favor coloque só seu primeiro nome' : null);
  const [inputProps, error] = useValidated(DefaultText, validator);

  return (
    <div>
      <input placeholder="primeiro nome" 
      {...inputProps} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}



