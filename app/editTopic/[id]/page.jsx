import EditTopicForm from '@/components/EditTopicForm';

const getTopicById = async (id) => {
  try {
    const res = await fetch(`${process.env.domain}/api/topics/${id}`, {
      cache: 'no-store',
    });
    console.log('----', res);
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
