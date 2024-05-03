import EditTopicForm from '@/components/EditTopicForm';
import { useRouter } from 'next/navigation';

const getTopicById = async (id) => {
  try {
    const router = useRouter();
    console.log(router.pathname);
    const res = await fetch(
      `https://my-blog-eta-lake.vercel.app/api/topics/${id}`,
      {
        cache: 'no-store',
      }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch topic!');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function editTopic({ params }) {
  const { id } = params;
  console.log('id: ', id);

  const { topic } = await getTopicById(id);
  if (!topic) return;
  console.log('topic: ', topic);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
