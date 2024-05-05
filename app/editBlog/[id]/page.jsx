export default function EditBlog({ params }) {
  const { id } = params;
  return <h1>{`这里是blog编辑页面${id}`}</h1>;
}
