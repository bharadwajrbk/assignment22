const getMovies = (req, res) => {
    res.status(200)
        .json({'status': 'success'})
}

const createMovie = (req, res) => {
    res.status(200)
        .json({'status': 'success'})
}

const getSingleMovie = (req, res) => {
    res.status(200)
        .json({'status': 'success'})
}

const updateMovie = (req, res) => {
    res.status(200)
        .json({'status': 'success'})
}

const deleteMovie = (req, res) => {
    res.status(200)
        .json({'status': 'success'})
}

module.exports = {
    getMovies,
    createMovie,
    getSingleMovie,
    updateMovie,
    deleteMovie
}