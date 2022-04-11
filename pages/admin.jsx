import { axios } from 'axios';
import AdminLayout from '../components/adminLayout';

export async function getServerSideProps(context) {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return {
    props: { data }, // will be passed to the page component as props
  };
}

function Admin({ data }) {
  console.log(data);
  return <AdminLayout></AdminLayout>;
}

export default Admin;
