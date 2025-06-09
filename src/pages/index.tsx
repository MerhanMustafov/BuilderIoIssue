import { builder, BuilderComponent, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import '@/builder-registry';

builder.init('9a41098f7b034bc69ea3e94d13345db8');

export async function getStaticProps(props: { params?: { page?: string[] } }) {
  /*
    Fetch the first page from Builder that matches the current URL.
    The `userAttributes` field is used for targeting content,
    learn more here: https://www.builder.io/c/docs/targeting-with-builder
  */
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (props.params?.page?.join('/') || ''),
      },
    })
    .toPromise();
  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomePage({ page }: any) {
  const isPreviewing = useIsPreviewing();

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }
  return (
    <>
      <h2>Builder io demo</h2>
      <BuilderComponent model="page" content={page} />
    </>
  );
}
