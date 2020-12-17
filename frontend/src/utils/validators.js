export function notOnlySpaceCheck(validationMessage, length, setError) {
  if (!Boolean(validationMessage) && (length < 2)) {
    setError('Недопустимое значение поля!');
  }
}
