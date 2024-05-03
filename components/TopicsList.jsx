import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';

export default async function TopicsList() {
  const getTopics = async () => {
    try {
      const res = await fetch(`${process.env.domain}//api/topics`, {
        cache: 'no-store',
      });
      if (!res.ok) {
        throw new Error('Failed to fetch topics');
      }

      return res.json();
    } catch (err) {
      console.log('Error loading topics: ', err);
    }
  };

  const res = await getTopics();
  if (!res) return <h1>there is no topic!</h1>;

  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className=" p-4 border border-slate-300 my-3 flex  justify-between gap-5 items-start"
        >
          <div>
            <h2 className=" font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
