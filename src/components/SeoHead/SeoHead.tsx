import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SeoHeadTypes } from '@/components/SeoHead/SeoHead.types';

export const SeoHead = ({
  title = 'Wyszukiwarka Restauracji',
  description,
}: SeoHeadTypes): ReactElement => {
  const router = useRouter();

  console.log(router);

  return (
    <Head>
      <title>{title} | EveRest</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={`${title} | EveRest`} />
      <meta
        property='og:url'
        content={`${process.env.BASE_URL}${router.pathname}`}
      />
    </Head>
  );
};
