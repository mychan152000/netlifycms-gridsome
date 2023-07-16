// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection, store }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const posts = addCollection({ typeName: 'Post' })
    posts.addNode({
      title: 'The post',
      author1: store.createReference('Author', '1')
    })

    const authors = addCollection({ typeName: 'Author' })
    authors.addNode({
      id: '1',
      title: 'The author'
    })
  })
}
