import BlogsList from '@/components/BlogsList';
import Article from '@/components/article';

export default async function Home() {
  return (
    <>
      <div class="ui  grid">
        <div
          class="row"
          style={{
            overflowY: 'auto',
          }}
        >
          <div class="three wide column">
            <BlogsList />
          </div>
          <div class="thirteen wide column">
            <Article />
          </div>
        </div>
      </div>
    </>
  );
}
