import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import MoviesHeader from './movies-header'
import MovieList from './movie-list'
import MovieDetail from './movie-detail'
import useAPI from '../../hooks/useApi'
import useFilter from '../../hooks/useFilter'

const Movies = () => {
	const languages = ['en', 'ja', 'it', 'hi', 'es', 'ko', 'all']
	const [movies, error, loading, fetchUrl] = useAPI({
		url: 'movie/top_rated',
		immediately: false,
	})
	const [filteredMovies, filterMovies] = useFilter()
	const [movie, setMovie] = useState(null)
	const [languageFilter, setLanguageFilter] = useState('')
	const [searchKeyWord, setSearchKeyWord] = useState('')

	useEffect(() => {
		if (movies || languageFilter || searchKeyWord) {
			filterMovies(movies, languageFilter, searchKeyWord)
		}
	}, [movies, languageFilter, searchKeyWord])

	const loadMovies = () => {
		fetchUrl()
	}

	return (
		<>
			<Button type='primary' onClick={loadMovies}>
				Load movies
			</Button>
			<MoviesHeader
				languages={languages}
				setLanguageFilter={setLanguageFilter}
				setSearchKeyWord={setSearchKeyWord}
			/>
			{movies && (
				<div class='movies-wrapper'>
					<MovieList
						movies={filteredMovies}
						setMovie={setMovie}
						movieSelected={movie}
					/>
					{movie && <MovieDetail movie={movie} />}
				</div>
			)}
		</>
	)
}

export default Movies
