export const getShows = async () => {
    const response = await fetch("https://api.tvmaze.com/shows")
    const data = await response.json()
    const groupedShows = groupShowsByGenre(data)
    return groupedShows
}

export const getShowsbasedOnSearch = async (value) => {
    const response = await fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
    const data = await response.json()
    const result = data.map(({ show }) => show)
    return result
}

export const groupShowsByGenre = (shows) => {
    let genres = {};
    shows.forEach((show) => {
        show.genres.forEach((genre) => {
            if (!genres[genre]) {
                genres[genre] = [];
            }
            genres[genre].push(show);
        });
    });
    return genres;
}
