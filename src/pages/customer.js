import { useParams } from 'react-router-dom';

export default function Customer() {
  const params = useParams();
  return (
    <div>
      <div>{'Customer page'}</div>
      <div>{`Customer ID: ${params.customerId}`}</div>
    </div>
  );
}
