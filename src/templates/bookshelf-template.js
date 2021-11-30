// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList } from '../hooks';

const bookList = [
    {
        title: "The Brief History of Time",
        link: "https://images-na.ssl-images-amazon.com/images/I/51SWYYvk+KL._SY344_BO1,204,203,200_.jpg"
    },
    {
        title: "The Kite Runner",
        link: "https://images-eu.ssl-images-amazon.com/images/I/51bt7LtryoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        link: "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg"
    },
    {
        title: 'The Subtle Art of Not Giving a F*ck',
        link: 'https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg'
    },
    {
        title: 'Man\'s Search For Meaning',
        link: 'https://images-na.ssl-images-amazon.com/images/I/415+jozXUNL._SX306_BO1,204,203,200_.jpg'
    }
]
const BookshelfTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout title={`Bookshelf - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="">
            { bookList.map((book, index) => (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '20px 0 20px 0'
                }}
                >
                    <div style={{fontSize: 30, fontWeight: 'bold', padding: '10px 0 10px 0', color: '#fca311'}}>{book.title}</div>
                    <img src={book.link} width={300} height={400}/>
                </div>

            )) }
      </Page>
    </Layout>
  );
};

export default BookshelfTemplate;
