import React from 'react';
import qs from 'qs';
import axios from 'axios';
import Card from './Card';

export const Page = ({year, photos, setYear}) => {
	let topString = '';
	let topPhoto = [];
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
	if (year === 2016) {
		start = new Date('01.01.2016').getTime() / 1000;
		end = new Date('01.01.2017').getTime() / 1000;
	} else if (year === 2017) {
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
		//console.log(photos);
		var filteredPhoto = photos.filter(item => item.date > start && item.date < end);
		//console.log(filteredPhoto);
		var currentPhoto = filteredPhoto.map(item => {
			return {
				id: item.id,
				likes: item.likes.count,
				thumb: item.sizes[3].url,
			};
		});
		//console.log(currentPhoto);
		sortBy(currentPhoto, 'likes', 'desc');
		topPhoto = currentPhoto.slice(0,9);
		topString = qs.stringify(topPhoto); // ещё можно JSON.stringify
	}
	 
	return (
		<div className='ib page'>
			<div>
				<button className='btn' onClick={yearClickHandler}>2019</button>
				<button className='btn' onClick={yearClickHandler}>2018</button>
				<button className='btn' onClick={yearClickHandler}>2017</button>
				<button className='btn' onClick={yearClickHandler}>2016</button>
			</div>

			{(Array.isArray(filteredPhoto) && filteredPhoto.length)
				? (<p>У тебя {filteredPhoto.length} фото за {year} год</p>)
				: (<p>Чтобы здесь были картинки необходимо авторизоваться и получить данные о фото!</p>)
			}

			<div>
				<button className='btn' onClick={sendClickHandler} disabled>отправить на сервер</button>
				<p className='cursive light'>Была у меня идея сделать подготовку одной картинки на сервере,
					но я понял, что совершенно не умею работать с графикой на сервере!..</p>
				<p className='cursive'>Обновление: мне справедливо указали на то, что вертикальным фотографиям "обрезает головы"!</p>
				<p className='cursive'>Поэтому теперь по каждой фотографии можно кликнуть. Клик по фото - переключение состояния из
					"растянуть и обрезать" (выбрал пропорцию 1,33, а верно ли?) на "вписать не обрезая" и обратно -
					можно настроить каждое фото как больше нравится - не только "вертикальные"!)</p>
			</div>

			{(Array.isArray(topPhoto) && topPhoto.length)
				? topPhoto.map(item => (
					<Card item={item} key={item.id} />
				))
				: null
			}			

		</div>
	)
}