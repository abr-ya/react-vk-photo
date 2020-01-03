import React from 'react';
import qs from 'qs';
import axios from 'axios';

export const Page = ({year, photos, setYear}) => {
	let topString = '';
	const yearClickHandler = e => {
		const year = +e.currentTarget.innerText
		setYear(year)
	}

	const sendClickHandler = () => {
		console.log('кнопку нажали!');
		console.log(topString);
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			data: topString,
			url: 'http://work/vk-photo-serv/'
		};
		axios(options)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
	}

	// сортировка
	const sortBy = (arr, code, order='asc') => {
		// eslint-disable-next-line
		arr.sort((a, b) => {
			// простая по-возростанию
			if (order === 'asc') {
				return (a[code] > b[code]) - (b[code] > a[code]);
			// простая по-убыванию    
			} else if (order === 'desc') {    
				return (a[code] < b[code]) - (b[code] < a[code]);
			// без учета регистра по возрастанию
			} else if (order === 'str_asc') {
				return (a[code].toLowerCase() > b[code].toLowerCase()) - (b[code].toLowerCase() > a[code].toLowerCase());
			// без учета регистра по убыванию
			} else if (order === 'str_desc') {
				return (a[code].toLowerCase() < b[code].toLowerCase()) - (b[code].toLowerCase() < a[code].toLowerCase());
			}
		});
	}

	let start = 0;
	let end = 0;
	if (year === 2017) {
		start = new Date('01.01.2017').getTime() / 1000;
		end = new Date('01.01.2018').getTime() / 1000;		
	} else if (year === 2018) {
		start = new Date('01.01.2018').getTime() / 1000;
		end = new Date('01.01.2019').getTime() / 1000;
	} else if (year === 2019) {
		start = new Date('01.01.2019').getTime() / 1000;
		end = new Date('01.01.2020').getTime() / 1000;
	}
	if (Array.isArray(photos) && photos.length) {
		console.log(photos);
		var filteredPhoto = photos.filter(item => item.date > start && item.date < end);
		console.log(filteredPhoto);
		var currentPhoto = filteredPhoto.map(item => {
			return {
				id: item.id,
				likes: item.likes.count,
				thumb: item.sizes[3].url,
			};
		});
		console.log(currentPhoto);
		sortBy(currentPhoto, 'likes', 'desc');
		topString = qs.stringify(currentPhoto.slice(0,9)); // ещё можно JSON.stringify

	}
	 
	return (
		<div className='ib page'>
			<div>
				<button className='btn' onClick={yearClickHandler}>2019</button>
				<button className='btn' onClick={yearClickHandler}>2018</button>
				<button className='btn' onClick={yearClickHandler}>2017</button>
			</div>

			{(Array.isArray(filteredPhoto) && filteredPhoto.length)
				? (<p>У тебя {filteredPhoto.length} фото за {year} год</p>)
				: (<p>Необходимо авторизоваться и получить данные о фото!</p>)
			}

			<div>
				<button className='btn' onClick={sendClickHandler}>отправить на сервер</button>
			</div>			

		</div>
	)
}