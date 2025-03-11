function ErrorMessage({items}) {
  return <>{items.length === 0 && <h4>I am Hungry</h4>}</>;
}

export default ErrorMessage;