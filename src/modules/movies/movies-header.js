import React from 'react'

const MoviesHeader = ({ languages, setLanguageFilter, setSearchKeyWord }) => {
	const handleChangeInput = (e) => {
		setSearchKeyWord(e.target.value)
	}

	return (
		<div className='movies-header'>
			<ul>
				{languages &&
					languages.map((lang) => (
						<li key={lang} onClick={() => setLanguageFilter(lang)}>
							{lang}
						</li>
					))}
			</ul>
			<input onChange={handleChangeInput} placeholder='Search for movie' />
		</div>
	)
}

export default MoviesHeader
