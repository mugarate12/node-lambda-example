const tables = ['movies', 'books']
const data = {
  movies: [
    {
      id: 1,
      title: 'V de vingança'
    },
    {
      id: 2,
      title: 'X-men'
    },
    {
      id: 3,
      title: 'Spider-man'
    },
  ],
  books: [
    {
      id: 1,
      title: 'Hamlet'
    },
    {
      id: 2,
      title: 'Guia Politicamente incorreto da filosofia'
    },
    {
      id: 3,
      title: 'Além do bem e do mal'
    }
  ]
}

function getMovies() {
  return data[tables[0]]
}

function getBooks() {
  return data[tables[1]]
}

function setMovie(title) {
  const lastId = data[tables[0]].length
  data[tables[0]].push({
    id: lastId + 1,
    title
  })

  return true
}

function setBook(title) {
  const lastId = data[tables[1]].length
  data[tables[1]].push({
    id: lastId + 1,
    title
  })

  return true
}

module.exports = {
  getMovies,
  getMovies,
  setMovie,
  setBook
}