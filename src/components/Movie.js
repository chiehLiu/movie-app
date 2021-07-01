
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ poster_path, title, overview, vote_average }) => {

    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return 'green'
        } else if (vote >= 6) {
            return 'orange'
        } else {
            return "red"
        }
    }

    return (
        <div className="movie">
            <img src={poster_path ? (IMGPATH + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib-rb-1.2.1&ixid=eyjhcHBfawQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80'} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;