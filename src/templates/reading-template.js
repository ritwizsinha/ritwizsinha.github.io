// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { useSiteMetadata, useTagsList } from '../hooks';

const linkList = [
    {
        link: "https://martinfowler.com/"
    },
    {
        link: "http://highscalability.com/"
    }
]
const BookshelfTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout title={`Reading - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Some Readings">
            { linkList.map((book, index) => (
                <div style={{padding: '20px', textAlign: 'center', alignItems: 'center'}}>
                    <LinkPreview url={book.link} width={400} height={400}  openInNewTab={true} textAlign="center"/>
                </div>)) 
            }
      </Page>
    </Layout>
  );
};

export default BookshelfTemplate;
