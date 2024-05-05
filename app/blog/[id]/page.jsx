export default function Blog({ params }) {
  const { id } = params;
  return <h1>{`这里是具体的blog页面` + id}</h1>;
}
