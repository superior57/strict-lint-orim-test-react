import { useParams } from 'react-router-dom';

export default function Customer() {
  const params = useParams();
  return (
    <div>
      <div>{'Blog page'}</div>
      <div>{`Blog ID: ${params.blogId}`}</div>
    </div>
  );
}
