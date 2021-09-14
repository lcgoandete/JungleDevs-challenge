
exports.seed = async (knex) => {
  await knex('article').del();
  
  await knex('article').insert([
    { 
      category: 'Category1',
      title: 'Article title1',
      summary: 'This is a summary of the article1',
      firstParagraph: '<p>This is the first paragraph of this article</p>',
      body: '<div><p>Second paragraph</p><p>Third paragraph</p></div>',
      authorId: 1,
    },
    { 
      category: 'Category2',
      title: 'Article title2',
      summary: 'This is a summary of the article2',
      firstParagraph: '<p>This is the first paragraph of this article</p>',
      body: '<div><p>Second paragraph</p><p>Third paragraph</p></div>',
      authorId: 2,
    },
    { 
      category: 'Category3',
      title: 'Article title3',
      summary: 'This is a summary of the article3',
      firstParagraph: '<p>This is the first paragraph of this article</p>',
      body: '<div><p>Second paragraph</p><p>Third paragraph</p></div>',
      authorId: 3,
    },
  ]);
};
