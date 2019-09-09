console.log('[NextGoRun] >> Бот запускается, пожалуйста подождите!');
const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
let user = new VK();
user.setOptions({
	token: '0ba147c086488a65f462149e2f7e1060621141a0ef64ad4ba5acd761268197f68105d0c4f9d0b3b223d07'
});

const https = require('https');
const requests = require('request');
const fs = require("fs");
const rq = require("prequest");
let giving = false;
const promo = require('./base/promo.json');
const clans = require('./base/clans.json');
const botinfo = require('./base/botinfo.json');

const promos = '' 
const fortyn = '';
const win = ''; 
const lose = '';
const errors = '';

	var timeban = 604800;

setInterval(() => {
		timeban -= 1
	}, 604800);
let chatslist = require('./chatslist.json');

let settings = require('./settings.json'),
	base = require("./base.json"),
	chats = require('./chats.json');

const cars = [
	{
		name: 'Самокат',
		cost: 500,
		id: 1
	},
	{
		name: 'Велосипед',
		cost: 2500,
		id: 2
	},
	{
		name: 'Гироскутер',
		cost: 5000,
		id: 3
	},
	{
		name: 'Скутер',
		cost: 7500,
		id: 4
	},
	{
		name: 'Мопед',
		cost: 25000,
		id: 5
	},
	{
		name: 'Мотоцикл',
		cost: 50000,
		id: 6
	},
	{
		name: 'ВАЗ 2109',
		cost: 75000,
		id: 7
	},
	{
		name: 'ВАЗ 2110',
		cost: 80000,
		id: 8
	},
	{
		name: 'ВАЗ 2115',
		cost: 135000,
		id: 9
	},
	{
		name: 'ВАЗ 2199',
		cost: 200000,
		id: 10
	},
	{
		name: 'Лада Xray',
		cost: 350000,
		id: 11
	},
	{
		name: 'Audi TT',
		cost: 750000,
		id: 12
	},
	{
		name: 'BMW X6',
		cost: 1000000,
		id: 13
	},
	{
		name: 'Toyota FT-HS',
		cost: 1750000,
		id: 14
	},
	{
		name: 'BMW Z4 M',
		cost: 2500000,
		id: 15
	},
	{
		name: 'Subaru WRX STI',
		cost: 2750000,
		id: 16
	},
	{
		name: 'Lamborghini Veneno',
		cost: 3000000,
		id: 17
	},
	{
		name: 'Tesla Roadster',
		cost: 4500000,
		id: 18
	},
	{
		name: 'Ford Fiesta GT',
		cost: 5000000,
		id: 19
	},
	{
		name: 'Ford Transit',
		cost: 6500000,
		id: 20
	},
	{
		name: 'Ford Mustang Boss 33',
		cost: 35000000,
		id: 21
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 39000000,
		id: 22
	},
	{
		name: 'Koenigsegg Regear',
		cost: 50000000,
		id: 23
	},
	{
		name: 'Pintiac Vibe',
		cost: 75000000,
		id: 24
	},
	{
		name: 'Nissan SkyLine',
		cost: 125000000,
		id: 25
	},
	{
		name: 'Lexus LC500',
		cost: 200000000,
		id: 26
	}
];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
	{
		name: 'Коробка из-под холодильника',
		cost: 250,
		id: 1
	},
	{
		name: 'Подвал',
		cost: 3000,
		id: 2
	},
	{
		name: 'Сарай',
		cost: 3500,
		id: 3
	},
	{
		name: 'Домик на дереве',
		cost: 5000,
		id: 4
	},
	{
		name: 'Полуразрушенный дом',
		cost: 10000,
		id: 5
	},
	{
		name: 'Родительский дом',
		cost: 25000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 37500,
		id: 7
	},
	{
		name: 'Дача',
		cost: 125000,
		id: 8
	},
	{
		name: 'Кирпичный дом с подвальным гаражом',
		cost: 80000,
		id: 9
	},
	{
		name: 'Коттедж в горах',
		cost: 450000,
		id: 10
	},
	{
		name: 'Особняк в лесу',
		cost: 1250000,
		id: 11
	},
	{
		name: 'Дом на берегу реки',
		cost: 5000000,
		id: 12
	},
	{
		name: 'Дом на холме',
		cost: 7000000,
		id: 13
	},
	{
		name: 'Дом с бассеином',
		cost: 12500000,
		id: 14
	},
	{
		name: 'Личный город',
		cost: 20000000,
		id: 15
	}
];

const apartments = [
	{
		name: 'Чердак в подъезде',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная родительская квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре города',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Квартира на 9-ом этаже',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Собственная Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 3310',
		cost: 3490,
		id: 1
	},
    {
		name: 'LG b1300',
		cost: 2990,
		id: 2
	},
    {
		name: 'Nokia Lumia 520',
		cost: 4500,
		id: 3
	},
    {
		name: 'Samsung Galaxy A10',
		cost:7713,
		id: 4
	},
    {
		name: 'Sony Xperia L1',
		cost: 5990,
		id: 5
	},
    {
		name: 'LG Q7',
		cost: 12780,
		id: 6
	},
    {
		name: 'Xiaomi Pocophone F1',
		cost: 22500,
		id: 7
	},
    {
		name: 'HUAWEI Nova 5 Pro',
		cost: 30000,
		id: 8
	},
    {
		name: 'Honor 20 Pro',
		cost: 35000,
		id: 9
	},
    {
		name: 'APPLE Iphone XS',
		cost: 78990,
		id: 10
	}
];

const businesses = [
	{
		name: 'Шаурмичная',
		cost: 50000,
		earn: 400,
		id: 1,
		icon: '🥖'
	},
	{
		name: 'Ларёк',
		cost: 10000,
		earn: 700,
		id: 2,
		icon: '🏪'
	},
	{
		name: 'Ресторан',
		cost: 300000,
		earn: 2500,
		id: 3,
		icon: '🍷'
	},
	{
		name: 'Магазин',
		cost: 500000,
		earn: 3800,
		id: 4,
		icon: '🏫'
	},
	{
		name: 'Завод',
		cost: 1500000,
		earn: 8000,
		id: 5,
		icon: '🏭'
	},
	{
		name: 'Шахта',
		cost: 25000000,
		earn: 70000,
		id: 6,
		icon: '⛏'
	},
	{
		name: 'Офис',
		cost: 80000000,
		earn: 220000,
		id: 7,
		icon: '🏢'
	},
	{
		name: 'Разработка игр',
		cost: 150000000,
		earn: 300000,
		id: 8,
		icon: '🕹'
	},
	{
		name: 'Нефтевышка',
		cost: 500000000,
		earn: 700000,
		id: 9,
		icon: '🏜'
	},
	{
		name: 'Атомная электростанция',
		cost: 800000000,
		earn: 1000000,
		id: 10,
		icon: '💡'
	},
	{
		name: 'Компания программирования для новичков',
		cost: 50000000000,
		earn: 50000000,
		id: 11,
		icon: '🗺'
	}
];

const works = [
	{
		name: 'Дворник',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Сторож',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Продавец',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Няня',
		requiredLevel: 8,
		min: 6000,
		max: 8000,
		id: 4
	},
	{
		name: 'Курьер',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Слесарь',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Охранник',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Библиотекарь',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'Воспитатель',
		requiredLevel: 25,
		min: 14500,
		max: 16500,
		id: 9
	},
	{
		name: 'Педагог',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 10
	},
	{
		name: 'Повар',
		requiredLevel: 65,
		min: 17500,
		max: 18500,
		id: 11
	},
	{
		name: 'Грузчик',
		requiredLevel: 95,
		min: 19500,
		max: 20500,
		id: 12
	},
	{
		name: 'Парикмахер',
		requiredLevel: 105,
		min: 23500,
		max: 24500,
		id: 13
	},
	{
		name: 'Врач',
		requiredLevel: 125,
		min: 24500,
		max: 25500,
		id: 14
	},
	{
		name: 'Торговый представитель',
		requiredLevel: 145,
		min: 26500,
		max: 27500,
		id: 15
	},
	{
		name: 'Специалист по валютным операциям',
		requiredLevel: 200,
		min: 55500,
		max: 70500,
		id: 16
	},
	{
		name: 'Юрист по налоговому праву',
		requiredLevel: 250,
		min: 70500,
		max: 110500,
		id: 17
	},
	{
		name: 'Программист PHP',
		requiredLevel: 300,
		min: 90500,
		max: 120500,
		id: 18
	}
];

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Дохера!');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	Q: 'q',
	W: 'ʍ',
	E: 'ǝ',
	R: 'ɹ',
	T: 'ʇ',
	Y: 'ʎ',
	U: 'u',
	I: 'ᴉ',
	O: 'o',
	P: 'p',
	A: 'ɐ',
	S: 's',
	D: 'd',
	F: 'ɟ',
	G: 'ƃ',
	H: 'ɥ',
	J: 'ɾ',
	K: 'ʞ',
	L: 'l',
	Z: 'z',
	X: 'x',
	C: 'ɔ',
	V: 'ʌ',
	B: 'b',
	N: 'n',
	M: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı',

	Й: 'ņ',
	Ц: 'ǹ',
	У: 'ʎ',
	К: 'ʞ',
	Е: 'ǝ',
	Н: 'н',
	Г: 'ɹ',
	Ш: 'm',
	Щ: 'm',
	З: 'ε',
	Х: 'х',
	Ъ: 'q',
	Ф: 'ф',
	Ы: 'ıq',
	В: 'ʚ',
	А: 'ɐ',
	П: 'u',
	Р: 'd',
	О: 'о',
	Л: 'v',
	Д: 'ɓ',
	Ж: 'ж',
	Э: 'є',
	Я: 'ʁ',
	Ч: 'һ',
	С: 'ɔ',
	М: 'w',
	И: 'и',
	Т: 'ɯ',
	Ь: 'q',
	Б: 'ƍ',
	Ю: 'oı'
}

let btc = 6000;

let users = require('./base/users.json');
let buttons = [];

	vk.updates.on(['chat_invite_user_by_link'], async (message, next) => {
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
let chatid = message.chatId;	
			if(chats[message.chatId].users[message.senderId].isBanned && chats[message.chatId].users[message.senderId].permanently){

		    vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.senderId});
		    return message.send('@id' + message.senderId + ' - находится в бане.');}

		message.send(`🎉 || Приветствую тебя, игрок - ${user[0].first_name}! Вы попали в беседу, где Вы можете играть в меня или можете общаться с другими пользователями.\n\n👾 >> Чтобы в меня начать играть, нажмите нужную кнопку, ну или написать команду - Помощь`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Профиль"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Казино 1к"
		},
			"color": "positive"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});

		await next();
	});
	vk.updates.on(['chat_invite_user'], async (message, next) => {
		if(message.payload.action.member_id == message.senderId) return;

		let user = await vk.api.users.get({user_id: message.payload.action.member_id})
let chatid = message.chatId;	
			if(chats[message.chatId].users[message.payload.action.member_id].isBanned && chats[message.chatId].users[message.payload.action.member_id].permanently){

		    vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.payload.action.member_id});
		    return message.send('@id' + message.payload.action.member_id + ' - находится в бане.');}

		message.send(`🎉 || Приветствую тебя, игрок - ${user[0].first_name}! Вы попали в беседу, где Вы можете играть в меня или можете общаться с другими пользователями.\n\n👾 >> Чтобы в меня начать играть, нажмите нужную кнопку, ну или написать команду - Помощь`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Профиль"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Казино 1к"
		},
			"color": "positive"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});

		await next();
	});
	vk.updates.on(['chat_kick_user'], async (message, next) => {
		if(message.payload.action.member_id == message.senderId) return;

		let user = await vk.api.users.get({user_id: message.payload.action.member_id})

		message.send(`📢 || Пользователь под названием (${user[0].first_name}), к сожалению, вышел из этой беседы. Вы можете его кикнуть с помощью команды - Кик id${message.payload.action.member_id}\n\n💬 >> Или Вы можете продолжить играть в бота :3`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": `!permban id${message.payload.action.member_id}`
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});

		await next();
	});



setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
}, 30000);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		if(x.misc.farm === 1)
		{
			x.farm_btc += 20;
		}

		if(x.misc.farm === 2)
		{
			x.farm_btc += 100;
		}

		if(x.misc.farm === 3)
		{
			x.farm_btc += 1000;
		}
	});
}, 3600000);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.translation = false;
		user.timers.hasWorked = false;
		user.timers.commands = false;
		user.timers.clanwar = false;
		user.timers.bonus = false;
		user.timers.obva = false;
		user.timers.krik = false;
		user.timers.mine = false;
	});
}

clearTemp();

async function saveUsers()
{
	require('fs').writeFileSync('./base/users.json', JSON.stringify(users, null, '\t'));
	return true;
}

vk.setOptions({ token: 'b6f810dd1e8426a9f29e3ca8189bc572b0fc912ce948b3218994275e647b65a7a753ccc34e1f3fb5f6960', pollingGroupId: 185203195 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[185203195\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[185203195\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			realname: user_info.first_name,
			realfam: user_info.last_name,
			id: message.senderId,
			uid: users.length,
			balance: 5000,
			diamonds: 0,
			emeralds: 0,
			coal: 0,
			iron: 0,
			gold: 0,
			bank: 0,
			btc: 0,
			farm_btc: 0,
			biz: 0,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			timers: {
				translation: false,
				hasWorked: false,
				commands: false,
				clanwar: false,
				delacc: false,
				bonus: false,
				obva: false,
				krik: false,
				mine: false,
			},
			tag: user_info.first_name,
			clanid: false,
			keyboard: true,
			numberss: false,
			work: 0,
			business: 0,
			pp: 0,
			notifications: true,
			ccard: false,
			card: 0,
			seccard: 0,
			cardss: 0,
			exp: 1,
			level: 1,
			right: 1,
			foolder: 0,
			floder: 0,
			operator: 0,
			number: 0,
			call: 0,
			language: 1,
			healths: 100,
			hunger: 100,
			reals: 0,
			jalobs: 0,
			referal: null,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0
			},
			marriage: {
				partner: 0,
				requests: []
			}
		});
	}

		message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.realname})` : `${message.user.tag}`}, ${text}`, params);
	}

	if (message.text) {
		message.user.floder += 1;
	}

	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	console.log(`USER: ${message.text}`)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:рандом баланс)$/i, async (message, bot) => {
	const bal = utils.random(50000);
	        
	        if(message.user.right <= 1) {
	if(message.user.timers.clearss) return bot(`через 1 час, Вы сможете ещё раз стереть баланс`);

	setTimeout(() => {
		message.user.timers.clearss = false;
	}, 1200000);

	message.user.timers.clearss = 0;
}
    message.user.balance = bal;
	return bot(`вы стерли изменили баланс на -`);
});

cmd.hear(/^(?:удалить аккаунт)$/i, async (message, bot) => {
			message.user.balance = 5000;
			message.user.dollars = 0;
			message.user.euro = 0;
			message.user.manat = 0;
			message.user.diamonds = 0;
			message.user.emeralds = 0;
			message.user.coal = 0;
			message.user.iron = 0;
			message.user.gold = 0;
			message.user.bank = 0;
			message.user.btc = 0;
			message.user.farm_btc = 0;
			message.user.biz = 0;
			message.user.rating = 0;
			message.user.regDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
			message.user.mention = true;
			message.user.ban = false;
			message.user.tag = user_info.first_name;
			message.user.clanid = false;
			message.user.keyboard = true;
			message.user.numberss = false;
			message.user.work = 0;
			message.user.business = 0;
			message.user.pp = 0;
			message.user.notifications = true;
			message.user.ccard = false;
			message.user.card = 0;
			message.user.seccard = 0;
			message.user.cardss = 0;
			message.user.exp = 1;
			message.user.level = 1;
			message.user.right = 1;
			message.user.foolder = 0;
			message.user.floder = 0;
			message.user.operator = 0;
			message.user.number = 0;
			message.user.language = 1;
			message.user.referal = null;
			message.user.transport.car = 0;
			message.user.transport.yacht = 0;
			message.user.transport.airplane = 0;
			message.user.transport.helicopter = 0;
			message.user.realty.home = 0;
			message.user.realty.apartment = 0;
			message.user.misc.phone = 0;
			message.user.misc.farm = 0;
			message.user.marriage.partner = 0;
			message.user.timers.delacc = 0;
	        if(message.user.timers.delacc) return bot(`вы больше не можете удалять аккаунт!`);
	return bot(`вы решили удалить аккаунт ДО ИЗНАЧАЛЬНОГО СОСТОЯНИЯ, успешно!`);
});

cmd.hear(/^(?:создать)\s?([0-9]+)?\s?([^\s	].*)?\s?([^\s	].*)?/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		if(!message.args[1]) return message.reply(`[✨] >> Пример - Cоздать (количество активаций) (сумма)`);
		if(!message.args[2]) return message.reply(`[✨] >> Пример - Cоздать (количество активаций) (сумма)`);
		 
		let balance = parserInt(message.args[2]); 
		let activ = Number(message.args[1]);

		var result       = '';
		        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
		        var max_position = words.length - 1;
		            for( i = 0; i < 8; ++i ) {
		                position = Math.floor ( Math.random() * max_position );
		                result = result + words.substring(position, position + 1);
		            }
		if(!promo[result]){
		            	promo[result] = {
		            		balance: Number(balance),
		            		activ: activ,
		            		users: {}
		            	}
		}else{
			return message.reply(`[Error] Пересоздайте код еще раз.`);
		}
		 

		return message.reply(`
			[📝] >> Промокод - ${result}
			[🗝] >> Активаций в этом промокоде - ${activ}
			[💰] >> Валюты в этом промокоде - ${spaces(balance)} Coins  
			`);

});
	
cmd.hear(/^(?:Мсоздать)\s?([0-9]+)?\s?([^\s	].*)?/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		if(!message.args[1]) return message.reply(`[✨] >> Пример - МCоздать (название) (сумма)`);
		if(!message.args[2]) return message.reply(`[✨] >> Пример - МCоздать (название) (сумма)`);
		 
		let balance = parserInt(message.args[1]); 

		if(!promo[message.args[2]]){
		            	promo[message.args[2]] = {
		            		balance: Number(balance),
		            		activ: 1000,
		            		users: {}
		            	}
		}else{
			return message.reply(`[Error] Пересоздайте код еще раз.`);
		}
		 

		return message.reply(`
			[📝] >> Промокод - ${message.args[2]}
			[🗝] >> Активаций в этом промокоде - 1000
			[💰] >> Валюты в этом промокоде - ${spaces(balance)} Coins  
			`);

});

cmd.hear(/^(?:промокод)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return message.reply(`[🤔] >> Я всё понимаю, что ты уже что-то не то пишешь мне, но не надо забывать сам промокод.`, {attachment: promos});
	let promos = message.args[1];
	if(!promo[message.args[1]]) return message.reply(`[😩] >> Woooops... Наверное, промокод много раз использовали и он теперь недоступен!`, {attachment: promos});
	
	if(!promo[message.args[1]].users[message.senderId]){

		if(promo[promos].balance){ 
			let activ = promo[promos].activ - 1;
			if(!promo[promos].users[message.senderId]){
				promo[promos].users[message.senderId] = {
					activ: true
				}
			}
			message.user.balance += Number(promo[promos].balance);
			let coi = Number(promo[promos].balance);
			promo[promos].activ -= 1;
			if(promo[promos].activ == 0){
				delete promo[promos];
			}
			return message.reply(`[🤑] >> Ты активировал(а) промокод.\n[✨] >> В промокоде, Вы нашли: ${spaces(coi)} Coins\n\n[😏] | Подсказка: Нельзя активировать более двух раз промокод.`, {attachment: promos});
		}
	}else{
		return message.reply(`[😪] >> Простите, но нельзя промокод во второй раз активировать!`, {attachment: promos});
	}
});


cmd.hear(/^(?:eval)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right < 4) return bot(`доступно с привилегии - Разработчик.`);

	try {
		const result = eval(message.args[1]);

		if(typeof(result) === 'string')
		{
			return bot(` - я выполнил: ${result}`);
		} else if(typeof(result) === 'number')
		{
			return bot(` - я выполнил: ${result}`);
		} else {
			return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
		}
	} catch (e) {
		console.error(e);
		return bot(`ошибка:
		${e.toString()}`);
	}
});

cmd.hear(/^(?:привет|прив|хай|кот|хеллоу|хеллов|хелоу|хелов|hello|hi|начать|start|приве|привт|котик)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.isChat) return;
					if(message.user.keyboard == true) {
	await message.send(`
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-
&#4448;&#4448;&#4448;Привет, [id${message.user.id}|${message.user.tag}]!
&#4448;&#4448;&#4448;Вот список команд:
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-

&#4448;[🤑] | Основное:
📒 » Мой профиль - Ваш профиль в боте
💲  » Мой баланс - Ваш баланс
👑 » Рейтинг - Ваш рейтинг
✒ » Ник [ник/вкл/выкл]  |-| Ваш специальный ник
🤝 » Передать [uid] [сумма] |-| Передать другому игроку деньги
💭 » Найти [uid] |-| Полный список профиля у другого игрока
🏆 » Топ |-| Топ баланс, опыт и т.д.

&#4448;[💻] | Банк:
💰 » Банк [сумма/снять сумма] - Положить деньги в банк
💰 » Банк снять [сумма] - Снять деньги с банка
📊 » Курс - Курс валют
💎 » Получить бонус - Ежедневный бонус

&#4448;[🔆] | Ферма:
🔋 » Ферма  - Биткоин Ферма

&#4448;[🔨] | Шахта:
⛏ » Шахта - Поработать на шахте

&#4448;[🔥] | Клан:
👾 Клан создать [фраза] - Создание вашего клана
📖 Клан - Информация о клане
😟 Покинуть - Покинуть клан
🔑 Вступить [id клана] - Войти в клан

&#4448;[🎪] | Магазин:
💼 » Кейсы - Игровые кейсы (Бета Версия) 
🎁 » Купить (модера||админа||разраба) - Купить привилегию 
🔥 » Привилегия модер  -- Стоимость и команды модератора
🔥 » Привилегия админ  -- Стоимость и команды администратора
🔥 » Привилегия разраб -- Стоимость и команды разработчика
➖ » Продать предмет   - Продать что-то

&#4448;[👔] | Работа:
🔨 Работать
❌ Уволиться

&#4448;[💼] | Бизнес:
📈 Бизнес - Статистика
💵 Бизнес снять - Снять деньги со счёта

&#4448;[💒] | Браки:
👪 » Брак [uid]  - Сделать предложение игроку
[💍]⠀» Мои предложения - Список игроков, которые хотят стать вашими партнёрами
[💔] » Развод  - Развестить с игроком

&#4448;[💡] | Прочие: 
[👫] » Реферал - Деньги за друзей
[🤖] » Бот - Информация о боте
[💣] » Рандом баланс - Рандомно поменяет ваш баланс
[💉] » Удалить аккаунт - Попрощаться с ботом

[🎮] » Игры - Покажет игровые команды
[🔔] » Чат - Покажет чат команды
[🛡] » Команды чм - Покажет команды чат-менеджера

[✅] » [id425433519|Создатель] - Можно с ним связаться.

[🆘] » Репорт [текст] - Ошибки/пожелания/предожения`);
}
if(message.user.keyboard == true) {
	await message.send(`
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-
&#4448;&#4448;&#4448;Привет, [id${message.user.id}|${message.user.tag}]!
&#4448;&#4448;&#4448;Вот список команд:
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-

&#4448;[🤑] | Основное:
📒 » Мой профиль - Ваш профиль в боте
💲  » Мой баланс - Ваш баланс
👑 » Рейтинг |-| Ваш рейтинг
✒ » Ник [ник/вкл/выкл]  |-| Ваш специальный ник
🤝 » Передать [uid] [сумма] |-| Передать другому игроку деньги
💭 » Найти [uid] |-| Полный список профиля у другого игрока
🏆 » Топ |-| Топ баланс, опыт и т.д.

&#4448;[💻] | Банк:
💰 » Банк [сумма/снять сумма] - Положить деньги в банк
💰 » Банк снять [сумма] - Снять деньги с банка
📊 » Курс - Курс валют
💎 » Получить бонус - Ежедневный бонус

&#4448;[🔆] | Ферма:
🔋 » Ферма  - Биткоин Ферма

&#4448;[🔨] | Шахта:
⛏ » Шахта - Поработать на шахте

&#4448;[🔥] | Клан:
👾 Клан создать [фраза] - Создание вашего клана
📖 Клан - Информация о клане
😟 Покинуть - Покинуть клан
🔑 Вступить [id клана] - Войти в клан

&#4448;[🎪] | Магазин:
💼 » Кейсы - Игровые кейсы (Бета Версия) 
🎁 » Купить (модера||админа||разраба) - Купить привилегию 
🔥 » Привилегия модер - показывает стоимость и команды модератора
🔥 » Привилегия админ - показывает стоимость и команды администратора
🔥 » Привилегия разраб - показывает стоимость и команды разработчика
🛒 » Магазин  - Купить что-то
➖ » Продать [предмет]  - Продать что-то

&#4448;[👔] | Работа:
🔨 Работать
❌ Уволиться

&#4448;[💼] | Бизнес:
📈 Бизнес - Статистика
💵 Бизнес снять - Снять деньги со счёта

&#4448;[💒] | Браки:
👪 » Брак [uid]  - Сделать предложение игроку
💍⠀» Мои предложения - Список игроков, которые хотят стать вашими партнёрами
💔 » Развод  - Развестить с игроком

&#4448;[💡] | Прочие: 
👫 » Реферал - Деньги за друзей
🤖 » Бот - Информация о боте
💣 » Рандом баланс - Рандомно поменяет ваш баланс
💉 » Удалить аккаунт - Попрощаться с ботом

[🎮] » Игры - Покажет игровые команды
[🔔] » Чат - Покажет чат команды
[🛡] » Команды чм - Покажет команды чат-менеджера

[✅] » [id425433519|Создатель] - Можно с ним связаться.

[🆘] » Репорт [текст] - Ошибки/пожелания/предожения
`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Чат"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Игры"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Команды чм"
		},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Другое"
			},
				"color": "positive"
			}]
		]
			})
		});
		}}
);	

cmd.hear(/^(?:помощь|команды|меню)$/i, async (message, bot) => {
	message.user.foolder += 1;

			if(message.user.keyboard == false) {
await message.reply(`
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-
&#4448;&#4448;&#4448;Привет, [id${message.user.id}|${message.user.tag}]!
&#4448;&#4448;&#4448;Вот список команд:
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-

&#4448;[🤑] | Основное:
📒 » Мой профиль - Ваш профиль в боте
💲  » Мой баланс - Ваш баланс
👑 » Рейтинг |-| Ваш рейтинг
✒ » Ник [ник/вкл/выкл]  |-| Ваш специальный ник
🤝 » Передать [uid] [сумма] |-| Передать другому игроку деньги
💭 » Найти [uid] |-| Полный список профиля у другого игрока
🏆 » Топ |-| Топ баланс, опыт и т.д.

&#4448;[💻] | Банк:
💰 » Банк [сумма/снять сумма] - Положить деньги в банк
💰 » Банк снять [сумма] - Снять деньги с банка
📊 » Курс - Курс валют
💎 » Получить бонус - Ежедневный бонус

&#4448;[🔆] | Ферма:
🔋 » Ферма  - Биткоин Ферма

&#4448;[🔨] | Шахта:
⛏ » Шахта - Поработать на шахте

&#4448;[🔥] | Клан:
👾 Клан создать [фраза] - Создание вашего клана
📖 Клан - Информация о клане
😟 Покинуть - Покинуть клан
🔑 Вступить [id клана] - Войти в клан

&#4448;[🎪] | Магазин:
💼 » Кейсы - Игровые кейсы (Бета Версия) 
🎁 » Купить (модера||админа||разраба) - Купить привилегию 
🔥 » Привилегия модер - показывает стоимость и команды модератора
🔥 » Привилегия админ - показывает стоимость и команды администратора
🔥 » Привилегия разраб - показывает стоимость и команды разработчика
🛒 » Магазин  - Купить что-то
➖ » Продать [предмет]  - Продать что-то

&#4448;[👔] | Работа:
🔨 Работать
❌ Уволиться

&#4448;[💼] | Бизнес:
📈 Бизнес - Статистика
💵 Бизнес снять - Снять деньги со счёта

&#4448;[💒] | Браки:
👪 » Брак [uid]  - Сделать предложение игроку
💍⠀» Мои предложения - Список игроков, которые хотят стать вашими партнёрами
💔 » Развод  - Развестить с игроком

&#4448;[💡] | Прочие: 
👫 » Реферал - Деньги за друзей
🤖 » Бот - Информация о боте
💣 » Рандом баланс - Рандомно поменяет ваш баланс
💉 » Удалить аккаунт - Попрощаться с ботом

[🎮] » Игры - Покажет игровые команды
[🔔] » Чат - Покажет чат команды
[🛡] » Команды чм - Покажет команды чат-менеджера

[✅] » [id425433519|Создатель] - Можно с ним связаться.

[🆘] || Репорт [текст] - Ошибки/пожелания/предожения
`);
}
if(message.user.keyboard == true) {
	await message.reply(`
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-
&#4448;&#4448;&#4448;Привет, [id${message.user.id}|${message.user.tag}]!
&#4448;&#4448;&#4448;Вот список команд:
&#4448;&#4448;&#4448;&#4448;&#4448;&#4448;-{💥}-

&#4448;[🤑] | Основное:
📒 » Мой профиль - Ваш профиль в боте
💲  » Мой баланс - Ваш баланс
👑 » Рейтинг |-| Ваш рейтинг
✒ » Ник [ник/вкл/выкл]  |-| Ваш специальный ник
🤝 » Передать [uid] [сумма] |-| Передать другому игроку деньги
💭 » Найти [uid] |-| Полный список профиля у другого игрока
🏆 » Топ |-| Топ баланс, опыт и т.д.

&#4448;[💻] | Банк:
💰 » Банк [сумма/снять сумма] - Положить деньги в банк
💰 » Банк снять [сумма] - Снять деньги с банка
📊 » Курс - Курс валют
💎 » Получить бонус - Ежедневный бонус

&#4448;[🔆] | Ферма:
🔋 » Ферма  - Биткоин Ферма

&#4448;[🔨] | Шахта:
⛏ » Шахта - Поработать на шахте

&#4448;[🔥] | Клан:
👾 Клан создать [фраза] - Создание вашего клана
📖 Клан - Информация о клане
😟 Покинуть - Покинуть клан
🔑 Вступить [id клана] - Войти в клан

&#4448;[🎪] | Магазин:
💼 » Кейсы - Игровые кейсы (Бета Версия) 
🎁 » Купить (модера||админа||разраба) - Купить привилегию 
🔥 » Привилегия модер - показывает стоимость и команды модератора
🔥 » Привилегия админ - показывает стоимость и команды администратора
🔥 » Привилегия разраб - показывает стоимость и команды разработчика
🛒 » Магазин  - Купить что-то
➖ » Продать [предмет]  - Продать что-то

&#4448;[👔] | Работа:
🔨 Работать
❌ Уволиться

&#4448;[💼] | Бизнес:
📈 Бизнес - Статистика
💵 Бизнес снять - Снять деньги со счёта

&#4448;[💒] | Браки:
👪 » Брак [uid]  - Сделать предложение игроку
💍⠀» Мои предложения - Список игроков, которые хотят стать вашими партнёрами
💔 » Развод  - Развестить с игроком

&#4448;[💡] | Прочие: 
👫 » Реферал - Деньги за друзей
🤖 » Бот - Информация о боте
💣 » Рандом баланс - Рандомно поменяет ваш баланс
💉 » Удалить аккаунт - Попрощаться с ботом

[🎮] » Игры - Покажет игровые команды
[🔔] » Чат - Покажет чат команды
[🛡] » Команды чм - Покажет команды чат-менеджера

[✅] » [id425433519|Создатель] - Можно с ним связаться.

[🆘] || Репорт [текст] - Ошибки/пожелания/предожения
`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "убрать клавиатуру"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Игры"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Команды чм"
		},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Другое"
			},
				"color": "positive"
			}]
		]
			})
		});
		}}
);	

cmd.hear(/^(?:чат)$/i, async (message, bot) => {
	message.user.foolder += 1;

			if(message.user.keyboard == false) {
	await message.reply(`[🎈] || Развлекательные:

🤔 » Кто [фраза]
📅 » Когда [фраза] 
📊 » Инфа [фраза] 
🔮 » Шар [фраза] 
⌚ » Дата [id]
⚖ » Выбери [фраза] или [фраза2]
📠 » Реши [пример]
↪ » Переверни [фраза]
🔑 » Вики [фраза]
🌆 » Погода [город]
🎀 » Оцени [картинка]
⏳ » Время
✨ » Бутылочка
🤡 » Анекдот
📹 » Гиф
`);
}
if(message.user.keyboard == true) {
	await message.reply(`[🎈] || Развлекательные:

🤔 » Кто [фраза]
📅 » Когда [фраза] 
📊 » Инфа [фраза] 
🔮 » Шар [фраза] 
⌚ » Дата [id]
⚖ » Выбери [фраза] или [фраза2]
📠 » Реши [пример]
↪ » Переверни [фраза]
🔑 » Вики [фраза]
🌆 » Погода [город]
🎀 » Оцени [картинка]
⏳ » Время
✨ » Бутылочка
🤡 » Анекдот
📹 » Гиф
`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Меню"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Гиф"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Анекдот"
		},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});
		}}
);	

cmd.hear(/^(?:игры)$/i, async (message, bot) => {
	message.user.foolder += 1;

			if(message.user.keyboard == false) {
					await message.reply(`[🕹] || Игры:

🎲 » Кубик [1-6]
🎰 » Казино [сумма]
📈 » Трейд [вверх/вниз] [сумма]
🥛 » Стаканчик [1-3] [сумма]
🔦 » Сейф [случайные 2 цифры] 
🌟 » Монетка [сумма] [орел/решка]
👤 » Тир [1-3] [сумма]
👛 » Ловушка [сумма]
🏆 » Фортуна
🔫 » РР
`);
}
if(message.user.keyboard == true) {
	await message.reply(`[🕹] || Игры:

🎲 » Кубик [1-6]
🎰 » Казино [сумма]
📈 » Трейд [вверх/вниз] [сумма]
🥛 » Стаканчик [1-3] [сумма]
🔦 » Сейф [случайные 2 цифры] 
🌟 » Монетка [сумма] [орел/решка]
👤 » Тир [1-3] [сумма]
👛 » Ловушка [сумма]
🏆 » Фортуна
🔫 » РР
`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Меню"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Казино 1к"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Казино 5к"
		},
			"color": "positive"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});
		}}
);	

cmd.hear(/^(?:команды чм)$/i, async (message, bot) => {
	message.user.foolder += 1;
	{
	if(message.send) return bot(`\n🚧 » Регистрация - Активация чата.
📝 » Изменить название [текст] - Изменить название беседы
🆘 » !Warn [ссылка] - Выдать варн пользователю
⚠ » !Kick [ссылка] - Кикнуть пользователя с беседы
🔥 » !Unban [ссылка] - Разбанить пользователя
🌍 » !Permban [ссылка] - Забанить навсегда пользователя
✨ » !Роль - Ваша роль в беседе
🍎 » !Модер [ссылка] - Выдать модера пользователю
🍏 » !Админ [ссылка] - Выдать админа пользователю
🍊 » !Хелпер  [ссылка] - Выдать хелпера пользователю

♻ | Автоматически:
Варн за рекламу
Приветствие`);
}
});

cmd.hear(/^(?:деятельность|Развлекательные)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(message.user.keyboard == true) {
					await message.reply(`По просьбе многих игроков, команда была перенесена.`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});}
					if(message.user.keyboard == false) {
					await message.reply(`По просьбе многих игроков, команда была перенесена.`);}
});	

cmd.hear(/^(?:кейсы|кеисы)$/i, async (message, bot) => {
	message.user.foolder += 1;

	message.send("💼 CASE-SHOP 💼\n\n♦Кейс каменный♦\n🔍| Может выпасть: от 100.000₽, до 1.000.000₽.\n💲Цена: 50.000₽\n📔ID: 1\n\n♦Кейс медный♦\n🔍| Может выпасть: от 1.000.000₽, до 10.000.000₽.\n💲Цена: 500.000₽\n📔ID: 2\n\n♦Кейс золотой♦\n🔍| Может выпасть: от 10.000.000₽, до 1.000.000.000₽.\n💲Цена: 5.000.000₽\n📔ID: 3\n\n♦Кейс алмазный♦\n🔍| Может выпасть: до 1.000.000.000₽, до 100.000.000.000₽.\n💲Цена: 500.000.000₽\n📔ID: 4\n\n🔘Кейс Донат🔘\n🔍| Может выпасть: валюта, привилегии(Модератор, Администратор).\n💲Цена: 50RUB.\n📔ID: 5\n———\n🔹Для покупки кейса пишите: Кейс [id кейса]");
    });

cmd.hear(/^(?:Купить модера)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.right == 2) return bot(`вы уже имеете данную привилегию...`);
	if(message.user.right == 3) return bot(`вы уже имеете более высокую привилегию...`);
	if(message.user.right == 4) return bot(`вы уже имеете более высокую привилегию...`);
	if(message.user.reals < 5) return bot(`пополните баланс!`);
{
message.user.reals -= 5,
message.user.right = 2;
return message.send(`👍🏻 || Вы успешно купили привилегию: Модератор!`);
}
});

cmd.hear(/^(?:купить админа)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.right == 3) return bot(`вы уже имеете данную привилегию...`);
	if(message.user.right == 4) return bot(`вы уже имеете более высокую привилегию...`);
	if(message.user.reals < 50) return bot(`пополните баланс!`);
{
message.user.reals -= 50,
message.user.right = 3;
return message.send(`👍🏻 || Вы успешно купили привилегию: Администратор!`);
}
});

cmd.hear(/^(?:купить разраба)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.right == 4) return bot(`вы уже имеете данную привилегию...`);
	if(message.user.reals < 500) return bot(`пополните баланс!`);
{
message.user.reals -= 500,
message.user.right = 4;
return message.send(`👍🏻 || Вы успешно купили привилегию: Разработчик!`);
}
});

cmd.hear(/^(?:купить)$/i, async (message, bot) => {
	message.user.foolder += 1;

return bot(`Что купить? Админа? А может Модера? Или же Разраба? Уточняйте лучше, чтобы я смог понять, что вы хотите купить!`);
});

cmd.hear(/^(?:вернуть клавиатуру)$/i, async (message, bot) => {
	message.user.foolder += 1;
message.user.keyboard = true;
	return bot(`ок!
	`);
});

cmd.hear(/^(?:убрать клавиатуру)$/i, async (message, bot) => {
	message.user.foolder += 1;
message.user.keyboard = false;
	return bot(`ок!
	`);
});

cmd.hear(/^(?:Привилегия модератор|Привилегия модер)$/i, async (message, bot) => {
	message.user.foolder += 1;
	{
	return message.send (`
❤ || Привилегия: Модератор
🤑 || Стоимость: 5 RUB
💬 || Команды:
1) Send [uid] [Сообщение] - отправить сообщение
2) Kick [Ссылка] - кикнуть пользователя с беседы
3) Крикнуть [Сообщение] - крикнуть в чате
4) Очитить чат - очистить чат`);
}
});

cmd.hear(/^(?:Привилегия администратор|Привилегия админ)$/i, async (message, bot) => {
	message.user.foolder += 1;
	{
    return message.send(`
❤ || Привилегия: Администратор
🤑 || Стоимость: 50 RUB
💬 || Команды
1) Команды Модератора
2) Вбаланс [uid] [сумма] - Выдать денеги игроку
3) Збаланс [uid] - Забрать деньги у игрока
4) Вбит [uid] [сумма] - Выдать БитКоины игроку
5) Збит [uid] - Забрать все БитКоины у игрока
6) Бан [uid] - Забанить пользователя
7) Разбан [uid] - Разбанить пользователя
8) Ответ [uid] [Сообщение] - Ответить в репорте`);
}
});

cmd.hear(/^(?:Привилегия разработчик|Привилегия разраб)$/i, async (message, bot) => {
	message.user.foolder += 1;
	{
    return message.send(`
❤ || Привилегия: Разработчик
🤑 || Стоимость: 500 RUB
💬 || Команды:
1) Команды Администратора + Модератора
2) Eval [js code] - Выполнить код
3) Рассылка [Сообщение] - рассылка в беседах
4) Создать [количество активаций] [сумма] - Создать промокод 
5) МСоздать [сумма] [название] - Создать промокод с своим названием (Активаций 1к)`);
}
});

cmd.hear(/^(?:найти профиль)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный UID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный UID`);
			let text = ``;	
	
	text += `🔎 UID: ${user.uid}\n`;
	text += `&#128279; Ссылка:  vk.com/id${user.id}\n`;
	text += `💰 Денег: ${utils.sp(user.balance)}₽\n`;
	if(user.bank) text += `💳 В банке: ${utils.sp(user.bank)}₽\n`;
	if(user.btc) text += `🌐 Биткоинов: ${utils.sp(user.btc)}฿\n`;
	text += `👑 Рейтинг: ${utils.sp(user.rating)}👑\n`;
	if(user.work) text += `👔 Работа: ${works[user.work - 1].name}\n`;
	if(user.marriage.partner) text += `👬 Партнер: ${users[user.marriage.partner].tag}`;
	text += `🌟 Уровень: ${user.level} [${user.exp}/24]\n`;

	if(user.transport.car || user.transport.yacht || user.transport.airplane || user.transport.helicopter ||
		user.realty.home || user.realty.apartment ||
		user.misc.phone || user.misc.farm || user.business)
	{
		text += `\n🔑 Имущество:\n`;

		if(user.transport.car) text += `⠀🚗 Машина: ${cars[user.transport.car - 1].name}\n`;
		if(user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[user.transport.yacht - 1].name}\n`;
		if(user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[user.transport.airplane - 1].name}\n`;
		if(user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[user.transport.helicopter - 1].name}\n`;
		
		if(user.realty.home) text += `⠀🏠 Дом: ${homes[user.realty.home - 1].name}\n`;
		if(user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[user.realty.apartment - 1].name}\n`;

		if(user.misc.phone) text += `⠀📱 Телефон: ${phones[user.misc.phone - 1].name}\n`;
		if(user.misc.farm) text += `⠀🔋 Ферма: ${farms[user.misc.farm - 1].name}\n`;
		if(user.business) text += `⠀${businesses[user.business - 1].icon} ${businesses[user.business - 1].name}\n`;
	}

	if(user.dollars || user.euro || user.manat || user.diamonds || user.emeralds || user.coal || user.iron || user.gold)
		{
		text += `\n&#128184; Доп.Валюта:\n`;
        text += `\n`;

		if(user.dollars) text += `&#128181; Долларов: ${user.dollars}\n`;
	if(user.euro) text += `&#128182; Евро: ${user.euro}\n`;
	if(user.manat) text += `&#128183; Манат: ${user.manat}\n`;
    if(user.diamonds) text += `&#128142; Алмазов: ${user.diamonds}\n`;
    if(user.emeralds) text += `&#128160; Изумрудов: ${user.emeralds}\n`;
    if(user.coal) text += `&#128488; Угля: ${user.coal}\n`;
    if(user.iron) text += `&#11036; Железа: ${user.iron}\n`;
    if(user.gold) text += `&#128155; Золото: ${user.gold}\n`;
	}
	text += `\n🔥 ${user.right.toString().replace(/1/gi, "Привилегия: Пользователь").replace(/2/gi, "Привилегия: Модератор").replace(/3/gi, "Привилегия: Администратор").replace(/4/gi, "Привилегия: Разработчик")}`;
	text += `\n📗 Дата регистрации в боте: ${user.regDate}`;
	return bot(`Профиль игрока:\n${text}`);
	});

cmd.hear(/^(?:Поиск)\s(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)$/i, async (message, bot) => { 
	message.user.foolder += 1;
	if (message.args[4]) {
				var domain = message.args[4].split(" ");}

let user = users.find(x=> x.id === Number(message.args[3]));

			let text = ``;	
	
	text +=  `${user.uid}\n`;
	return bot(`UID игрока\n${text}`);
});

cmd.hear(/^(?:cid)$/i, async (message, bot) => {
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`[🎉] » ID этого чата: ${message.chatId}`);
	});   

cmd.hear(/^(?:мой профиль)$/i, async (message, bot) => {
	message.user.foolder += 1;
			let text = ``;	

    text += `[❤] || Основное:\n`;
	text += `&#4448;🔎 ⇢ UID: ${message.user.uid}\n`;
	text += `&#4448;&#128279; ⇢ Ссылка:  vk.com/id${message.user.id}\n`;
	text += `&#4448;💰 ⇢ Денег: ${utils.sp(message.user.balance)}₽\n`;
	if(message.user.ccard) text += `&#4448;💳 ⇢ Баланс карты: ${message.user.card}\n`;
	if(message.user.bank) text += `&#4448;💳 ⇢ В банке: ${utils.sp(message.user.bank)}₽\n`;
	text += `&#4448;👑 ⇢ Рейтинг: ${utils.sp(message.user.rating)}\n`;
	if(message.user.work) text += `&#4448;👔 ⇢ Работа: ${works[message.user.work - 1].name}\n`;
	if(message.user.marriage.partner) text += `&#4448;👬 ⇢ в браке с: ${users[message.user.marriage.partner].tag}`;
	text += `&#4448;🌟 ⇢ Уровень: ${message.user.level} [${message.user.exp}/24]\n`;
	if(message.user.foolder) text += `&#4448;&#128228; ⇢ Использовано команд: ${message.user.foolder}\n`;
    if(message.user.floder) text += `&#4448;&#128229; ⇢ Всего сообщений: ${message.user.floder}\n`;

	if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.business ||
		message.user.number)
	{
		text += `\n[🔑] || Имущество:\n`;

		if(message.user.transport.car) text += `&#4448;⠀🚗 ⇢ Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `&#4448;⠀🛥 ⇢ Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `&#4448;⠀🛩 ⇢ Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `&#4448;⠀🚁 ⇢ Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;
		
		if(message.user.realty.home) text += `&#4448;⠀🏠 ⇢ Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += `&#4448;⠀🌇 ⇢ Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;

		if(message.user.misc.phone) text += `&#4448;⠀📱 ⇢ Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.phone)	text += `&#4448;⠀📱 ⇢ Оператор: ${message.user.operator.toString().replace(/1/gi, "отсутствует || Команда: Купить номер").replace(/2/gi, "Теле2").replace(/3/gi, "Мегафон").replace(/4/gi, "Билайн").replace(/5/gi, "Yota").replace(/5/gi, "Vk mobile").replace(/6/gi, "Мтс")}\n`;
		if(message.user.number) text += `&#4448;⠀📱 ⇢ Номер телефона: +79${message.user.number}\n`;
		if(message.user.business) text += `&#4448;⠀${businesses[message.user.business - 1].icon} ${businesses[message.user.business - 1].name}\n`;
	}

	if(message.user.diamonds || message.user.emeralds || message.user.coal || message.user.iron || message.user.gold)
		{
		text += `\n[&#128184;] || Руды:\n`;

    if(message.user.diamonds) text += `&#4448;&#128142; ⇢ Алмазов: ${message.user.diamonds}\n`;
    if(message.user.emeralds) text += `&#4448;&#128160; ⇢ Изумрудов: ${message.user.emeralds}\n`;
    if(message.user.coal) text += `&#4448;&#128488; ⇢ Угля: ${message.user.coal}\n`;
    if(message.user.iron) text += `&#4448;&#11036; ⇢ Железа: ${message.user.iron}\n`;
    if(message.user.gold) text += `&#4448;&#128155; ⇢ Золото: ${message.user.gold}\n`;
	}

		text += `\n[👬] || Персонаж:\n`;

    text += `&#4448;📖 ⇢ Информация: ${message.user.realname} ${message.user.realfam}\n`;
    text += `&#4448;💬 ⇢ Ваш социальный статус: ${message.user.right.toString().replace(/1/gi, "Пользователь").replace(/2/gi, "Участник").replace(/3/gi, "Игрок").replace(/4/gi, "Профессиональный Игрок").replace(/5/gi, "[id425433519|БОГ!!!!!]")}\n`;
    text += `&#4448;❤ ⇢ Здоровья: ${message.user.healths}\n`;
    text += `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n`;
    text += `&#4448;⚠ ⇢ Жалоб: ${message.user.jalobs}\n`;
    text += `&#4448;🔥 ⇢ Привилегия: ${message.user.right.toString().replace(/1/gi, "Пользователь").replace(/2/gi, "Модератор").replace(/3/gi, "Администратор").replace(/4/gi, "Разработчик").replace(/5/gi, "[id425433519|СОЗДАТЕЛЬ!!!!!]")}`;

	text += `\n\n📗 ⇢ Дата регистрации: ${message.user.regDate}`;

	return message.send(`📢 | Вот ваш профиль, [id${message.user.id}|${message.user.tag}].\n\n${text}`);
		}
);	

cmd.hear(/^(?:брак)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return message.send('[Подсказка]: Нужно использовать так -> Брак 4\n\nПосмотреть ваш специальный uid можно в профиле.');
});

cmd.hear(/^(?:мой баланс)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const coals = utils.random(50000000000000000);
	let text = `📢 | [id${message.user.id}|${message.user.tag}], на ваших руках: \n`;
    text += `\n💰 ⇢ Денег: ${utils.sp(message.user.balance)}₽`;
	if(message.user.bank) text += `\n💳 ⇢ В банке: ${utils.sp(message.user.bank)}₽`;
	if(message.user.btc) text += `\n🌐 ⇢ Биткоинов: ${utils.sp(message.user.btc)}฿`;

	return message.send(text);
});

cmd.hear(/^(?:банк)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`у вас на банковском счёте находится: ${utils.sp(message.user.bank)}₽`);
});

cmd.hear(/^(?:Клан создать)\s(.*)$/i, async (message, bot) => {
    if(!message.args[1]) return bot(`введите название для клана!`); 
    if(message.user.right <= 1) {
    let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(👨‍|🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|😀|😃|😄|😁|😆|😅|😂|🤣|☺|😊|😇|🙂|🙃|😉|😌|😍|😘|😗|😙|😚|😋|😜|😝|😛|🤑|🤗|🤓|😎|🤡|🤠|😏|😒|😞|😔|😟|😕|🙁|☹|😣|😖|😫|😩|😤|😠|😡|😶|😐|😑|😯|😦|😧|😮|😲|😵|😳|😱|😨|😰|😢|😥|🤤|😭|😓|😪|😴|🙄|🤔|🤥|😬|🤐|🤢|🤧|😷|🤒|🤕|😈|👿|👹|👺|💩|👻|💀|☠|👽|👾|🤖|🎃|😺|😸|😹|😻|😼|😽|🙀|😿|😾|👐|🙌|👏|🙏|🤝|👍|👎|👊|✊|🤛|🤜|🤞|✌|🤘|👌|👈|👉|👆|👇|☝|✋|🖐|🖖|👋|🤙|💪|🖕|✍|🤳|💅|🖖|💄|💋|👄|👅|👂|👃|👤|👣|👁|👀|🗣|👥|👶|👦|👧|👨|👩|👱‍♀️|👱|👴|👵|👲|👳‍♀️|👳|👮‍♀️|👮|👷‍♀️|👷|💂‍♀️|💂|🕵‍♀️|🕵|👩‍⚕️|👨‍⚕️|👩‍🌾️|👨‍🌾️|👩‍🍳️|👨‍🍳️|👩‍🎓️|👨‍🎓️|👩‍🎤️|👨‍🎤️|👩‍🏫️|👨‍🏫️|👩‍🏭️|👨‍🏭️|👩‍💻️|👨‍💻️|👩‍💼️|👨‍💼️|👩‍🔧️|👨‍🔧️|👩‍🔬️|👨‍🔬️|👩‍🎨️|👨‍🎨️|👩‍🚒️|👨‍🚒️|👩‍✈️|👨‍✈️|👩‍🚀️|👨‍🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|🎓|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
    return message.reply(`[🆘] » Ой...\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат "Модератор"`);
}
	let text = message.args[1].toLowerCase();
 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)
	if(filter0.test(text) == true || filter1.test(text) == true){
		var check = true;
		return message.reply(`[🆘] »  Отказ! |-| Подозрительная сслыка.`);
}
	}else{ 
 	let user = message.user;
 	let name = message.args[1];
 	let clanid = message.user.clanid;
 	if(message.user.btc < 20) return message.reply(`[⚠] »  Создание клана стоит 20 БитКоинов!!!`);
 	message.user.btc -= 20;

 	if(clans[clanid]) return message.reply(`[⚠] »  У вас уже создан клан или Вы уже состоите в другом клане.`);
 	if(!clans[clanid]){
 		let smile = [`🤘`,`💥`,`💣`,`😻`,`😏`,`🤒`,`🤔`,`💎`,`♻`,`🏆`,`🔥`,`🌚`,`👻`,`💀`,`🎄`,`🎃`,`🚀`,`🎱`,`🍼`,`🍺`,`🐔`,`🐉`,`🌝`].random();  
 	 	botinfo.number += 1;
 	 	clans[botinfo.number] = {
 		owner: message.user,
 		users: {},
 		number: botinfo.number,
 		name: name,
 		balance: 0,
 		smile: smile,
 		open: true,
 		price: 100,
        exs: 0,
        people: 0
 	}
 	user.clanid = botinfo.number;
 	clans[botinfo.number].users[message.user.uid] = {
 		                    names: message.user.tag,
        	        		level: 2
    }
 	 

 	return message.send(`
 		&#4448;${clans[user.clanid].smile} + ${name} + ${clans[user.clanid].smile}&#4448; 

 		[${clans[user.clanid].smile}] >> Я успешно создал клан под названием - ${name}
 		[${clans[user.clanid].smile}] >> Создатель клана - vk.com/id${message.user.id}
 		[${clans[user.clanid].smile}] >> Логотип клана: ${clans[user.clanid].smile}
 		[${clans[user.clanid].smile}] >> Тип клана: открытый.

 		[${clans[user.clanid].smile}] >> Команды клана: Кпомощь
 		`);
}}
});

cmd.hear(/^(?:покинуть)/i, async (message, bot) => {


  
 
	let user = message.user;
	let idclan = message.user.clanid;
	if(!clans[idclan]) return message.reply(`Вы не в клане.`); 
    
	if(message.user.clanid == false) return message.reply(`Вы не состоите в клане.`); 
	if(clans[idclan].users[message.user.uid].level == 2) return message.reply(`Создатель не может выйти из клана.`);
	user.clanid = false;
	delete clans[idclan].users[message.user.uid];
    return message.reply(`Вы добровольно покинули клан.`);
});


cmd.hear(/^(?:Клан открыть)/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`); 
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
    if(clans[clanid].open == true) return message.reply(`Клан уже открытый.`)
    clans[clanid].open = true;
	return message.reply(`Вы открыли клан. Цена за вход: ${clans[clanid].price}₽`);
});


cmd.hear(/^(?:Клан закрыть)/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
    if(clans[clanid].open == false) return message.reply(`Клан уже закрытый.`)
    clans[clanid].open = false;
	return message.reply(`Вы закрыли клан. Набор участников могут проводить только зам/создатель :3`);
});


cmd.hear(/^(?:Клан вход)\s([0-9]+)$/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
    if(!message.args[1]) return message.reply(`Укажите сумму для входа в клан.`);
    if(message.args[1] < 100) return message.reply(`Сумма для входа в клан не должна быть < 100 Coins`);
    if(message.args[1] > 50000) return message.reply(`Сумма для входа в клан не должна быть > 50000 Coins`);
    clans[clanid].price = Number(message.args[1]);
    return message.reply(`Вы установили цену за вход в размере ${Number(message.args[1])} Coins`);
});


cmd.hear(/^(?:Вступить)\s([0-9]+)$/i, async (message, bot) => {



    let user = message.user;
	let idclan = message.args[1]; 
	if(message.users.clanid != false) return message.reply(`Вы уже состоите в клане.`);
	if(!message.args[1]) return message.reply(`Вы не указали ID клана.`);
	 
	 
	if(!clans[idclan]) return message.reply(`Данного клана не существует.`);
	if(clans[idclan].open == false) return message.reply(`Данный клан закрыт. В него нельзя войти.`);
	if(clans[idclan].open == true){
		if(message.user.balance < clans[idclan].price) return message.reply(`Вход в данный клан стоит: ${spaces(clans[idclan].price)} Coins`);
		message.user.balance -= Number(clans[idclan].price);
		clans[idclan].price += clans[idclan].price;
		message.user.clanid = Number(message.args[1]);
		if(!clans[idclan].users[message.user]){
        	        	clans[idclan].users[message.user.uid] = {
        	        		level: 0
        	        	}
        }
        return message.reply(`Вы вошли в клан за ${spaces(clans[idclan].price)} Coins \n\n Команды клана - Клан помощь`, {attachment: 'photo512809754_456239056'});
	}
});


cmd.hear(/^(?:Клан название)\s([^]+)$/i, async (message, bot) => {


 	if(!message.args[1]) return message.send(`⚠ »  Укажите название для клана.`);
 	if(message.user.right <= 1) {
 	    let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
 return message.reply(`[🆘] » Ой...\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат "Модератор"`);
}
	let text = message.args[1].toLowerCase();
 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)
	if(filter0.test(text) == true || filter1.test(text) == true){
		var check = true;
		return message.send(`[🆘] »  Отказ! |-| Подозрительная сслыка.`);
}
	}else{
		 	let user = message.user;
			let clanid = user.clanid;
			if(!clans[clanid]) return message.reply(`У вас нет клана.`);
			if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель клана.`);
		    if(clans[clanid].balance < 1000) return message.reply(`На е клана нету 1.000 Coins `);
		   	clans[clanid].balance -= 1000;

			if(clans[clanid]){
				if(message.user != clans[clanid].owner) return message.reply(`Изменить название клана может только Создатель!`);
				if(message.user == clans[clanid].owner){
					clans[clanid].name = message.args[1];
					return message.reply(`Вы успешно изменили название клана за 1.000 Coins!`);
				}
			}
	}  

});


cmd.hear(/^(?:Клан лого)/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 1) return message.reply(`Вы не создатель/заместитель клана.`);
    if(clans[clanid].balance < 1000) return message.reply(`На балансе клана нету 1.000 Coins`);
    clans[clanid].balance -= 1000;

	if(clans[clanid]){
			let smile = [`📺`,`💥`,`💣`,`💎`,`♻`,`🏆`,`🔥`,`🌚`,`👻`,`💀`,`🎄`,`🎃`,`🚀`,`🎱`,`🍼`,`🍺`,`🐔`,`🐉`,`🌈`,`🌝`].random(); 
			clans[clanid].smile = smile;
			return message.reply(`Вы успешно изменили логотип клана за 1.000 Coins!`);
	}
});



cmd.hear(/^(?:Клан)/i, async (message, bot) => {

let user = message.user;
	let clanid = message.user.clanid;
if(!clans[clanid]) return message.reply(`У вас нет клана.`);

let text = ``;
let tipe = ``;
text += `[🏆] | Участники Клана: \n\n`;

text += `[${clans[clanid].smile}] >> [id${clans[clanid].owner.id}|${clans[clanid].owner.tag}] | Создатель.\n\n`;
 	for(let id in clans[clanid].users) {
             let people = clans[clanid].users[id];   
        	 if(clans[clanid].users[id].level == 1) text += `[${clans[clanid].smile}] >> [id${clans[clanid].users[id]}|${people.prefix}] | Заместитель.\n\n`;
        	 if(clans[clanid].users[id].level == 0) text += `[${clans[clanid].smile}] >> [id${clans[clanid].users[id]}|${people.prefix}] | Участник.\n`;
        }

 function indexOfByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                return i;
            }
        }
        return null;
    }
    
    var tops = []
    for (let i in clans) {
        tops.push({
            id: i,
            balance: clans[i].balance
        })
    }
    tops.sort(function(a, b) {
        if (b.balance > a.balance) return 1
        if (b.balance < a.balance) return -1
        return 0
    })
   
    var inTop = indexOfByKey(tops, 'id', message.user);
    inTop++; 


if(clans[clanid].open == true) tipe += `Открытый.`
if(clans[clanid].open == false) tipe += `Закрытый.`
if(clans[clanid]){
    let exs = 0;
    let convert = 0;


	return message.reply(`
		[${clans[clanid].smile}]: ~ ${clans[clanid].name} ~ :[${clans[clanid].smile}]

 		[${clans[clanid].smile}] »  Создатель: [id${clans[clanid].owner.id}|${clans[clanid].owner.tag}]
 		[${clans[clanid].smile}] »  Номер клана: ${clans[clanid].number}
 		[${clans[clanid].smile}] »  Логотип клана: ${clans[clanid].smile} 
 		[${clans[clanid].smile}] »  Тип клана: ${tipe}
 		[${clans[clanid].smile}] »  Цена за вход: ${clans[clanid].price} Coins
        [💰] »  На балансе клана: ${clans[clanid].balance} Coins

        [🔥] »  Баланс клана: ${clans[clanid].balance}
        [🌍] »  Место в топе: ${inTop}

 		${text}
		`);
	} 
});

cmd.hear(/^(?:Клан помощь)/i, async (message, bot) => {

	let user = message.user;
 	let clanid = message.user.clanid;
 	if(!clans[clanid]) return message.reply(`У вас нет клана.`);

if(clans[clanid].users[message.user.uid].level < 1){
	return message.reply(`
		${clans[clanid].smile} - Команды клана -  ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане.
		${clans[clanid].smile} Клан положить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} Клан банк - баланс клана.

		${clans[clanid].smile} Покинуть - Выйти из клана(от vip юзера)
		`);
}
if(clans[clanid].users[message.user.uid].level == 1){
	return message.reply(`
		${clans[clanid].smile} - Команды клана -  ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане. 
		${clans[clanid].smile} Клан кик UID(пользователя) - выгнать из клана.
		${clans[clanid].smile} Клан лого - Сменить логотип клана.
		${clans[clanid].smile} Клан положить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} Клан банк - баланс клана.

		${clans[clanid].smile} Покинуть - Выйти из клана (Только от vip пользователей)
		`);
}
if(clans[clanid].users[message.user.uid].level == 2){
	return message.reply(`
		${clans[clanid].smile} - Команды клана -   ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане. 
		${clans[clanid].smile} Клан кик (ID Пользователя) - выгнать из клана.
		${clans[clanid].smile} Клан модер (ID Пользователя) - назначить заместителем.
		${clans[clanid].smile} Клан удалить (ID Пользователя) - снять заместителя.
		${clans[clanid].smile} Клан название (новое название клана) - изменить название клана.
		${clans[clanid].smile} Клан лого - Сменить логотип клана.

		${clans[clanid].smile} Клан открыть - Открыть клан.
		${clans[clanid].smile} Клан цена - Установить цену за вход.
		${clans[clanid].smile} Клан закрыть - Закрыть клан.

		${clans[clanid].smile} Клан положить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} Клан снять <сумма> - снять Coins из банка клана.
		${clans[clanid].smile} Клан банк - баланс клана.

		${clans[clanid].smile} Атаковать клан [id клана] [сумма] - Атаковать клан!
		`);
}
});

cmd.hear(/^(?:Клан банк)/i, async (message, bot) => {

	let user = message.user;
 	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	return message.reply(`Баланс Вашего клана: ${spaces(clans[clanid].balance)} Coins`);

});



cmd.hear(/^(?:Клан положить)\s(.*)$/i, async (message, bot) => {

	if(!message.args[1]) return message.reply(`Укажите сумму вклада.`);
	let user = message.user;
 	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(message.args[1] > message.user.balance || message.args[1] <= 0) return message.reply(message.args[1] <= 0 ? `Вклад не может быть меньше 0 или равен 0 Coins.` : `Вклад не может превышать Ваш баланс.`);
	message.user.balance -= Number(message.args[1]);
	clans[clanid].balance += Number(message.args[1]);
	return message.reply(`Вы успешно положили ${spaces(message.args[1])} Coins в банк клана.`);
});


cmd.hear(/^(?:Клан снять)\s(.*)$/i, async (message, bot) => {

	if(!message.args[1]) return message.reply(`Укажите сумму снятия.`);
	let user = message.user;
 	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Снимать деньги может только создатель клана.`);
    
	if(message.args[1] > clans[clanid].balance) return message.reply(`Данной суммы нет в банке клана.`);
	if(message.args[1] <= 0) return message.reply(`Сумма не должна быть меньше или равно 0 Coins`);
	message.user.balance += Number(message.args[1]);
	clans[clanid].balance -= Number(message.args[1]);
	return message.reply(`[${clans[clanid].smile}] »  Вы успешно сняли ${spaces(message.args[1])} Coins с банка клана.`);
});

cmd.hear(/^(?:Атаковать клан)\s([0-9]+)\s([^\s	].*)$/i, async (message, bot) => {
		let clanid = message.user.clanid;
		if(!message.args[1]) return bot(`Укажите ID клана, который хотите атаковать.`);
		if(!message.args[2]) return bot(`Укажите ставку.`);
		let id = Number(message.args[1]); 
		let amount = parserInt(message.args[2]);
		if(!Number(amount)) return bot(`укажите корректно ставку.`);
		if(amount < 1000) return bot(`минимальная сумма для атаки 1.000💰`);
		if (clans[clanid].users[message.user.uid].level < 1) return bot(`вы не ~создатель/заместитель~  клана.`);
		if(id == clanid) return bot(`нельзя нападать на свой клан.`);
		if(amount > clans[clanid].balance) return bot(`на счету вашего клана не хватает 💰`);
		if(amount > clans[id].balance) return bot(`на счету клана не хватает 💰`); 
		if (clanid == false) return bot(`у вас нет клана.`);
		if (!clans[clanid]) return bot(`у вас нет клана.`);
		if (!clans[id]) return bot(`такого клана нет.`);

if(message.user.right <= 1) {
	if(message.user.timers.clanwar) return bot(`в ближайшие 10 минут, Вы сможете ещё раз атаковать клан!`);

	setTimeout(() => {
		message.user.timers.clanwar = false;
	}, 600000);

	message.user.timers.clanwar = true;
}

		let win = rand(1,2);
		if(win == 1){
			clans[id].balance += amount;
			clans[clanid].balance -= amount;
			return message.send(`🛡 Атака клана 🛡\n[⚔] >> Клан ${clans[clanid].name} напал на ${clans[id].name}\n[🏆] >> Победу одержал клан: ${clans[id].name}\n💰 >> Выигрыш: ${spaces(amount)} 💰`);
		}else{
			clans[id].balance -= amount;
			clans[clanid].balance += amount;
			return message.send(`🛡 Атака клана 🛡\n[⚔] >> Клан ${clans[clanid].name} напал на ${clans[id].name}\n[🏆] >> Победу одержал клан: ${clans[clanid].name}\n💰 >> Выигрыш: ${spaces(amount)} 💰`);
		}
	});	

cmd.hear(/^(?:Клан модер)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный UID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный UID`);

 	let clanid = user.clanid;
 	if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
 	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель/заместитель клана.`);
        	        
    if(message.args[4]) {
        var domain = message.args[4].split(" ");
        vk.api.call("utils.resolveScreenName", {
            screen_name: message.args[4]
        })
        .then((res) => {

        	        if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
              	    if(user.clanid != message.user.clanid) return message.reply(`Юзер уже состоит в другом клане.`);
        	       

        	        clans[clanid].users[user.uid].level = 1;
        	        return message.reply(`vk.com/id${user.id} был назначен заместителем в клане.`); 

        })
        return;
    }else{

        if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
        if(user.clanid != message.user.clanid) return message.reply(`Юзер уже состоит в другом клане.`);
          

        	clans[clanid].users[user.uid].level = 1;
        	return message.reply(`vk.com/id${user.id} был назначен заместителем в клане.`); 
    }
});


cmd.hear(/^(?:Клан удалить)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный UID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный UID`);


 	let clanid = message.user.clanid;
 	if(!clans[clanid]) return message.reply(`этот человек не состоит в вашем клане.`);
 	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель/заместитель клана!`);
        	        
    if(message.args[4]) {
        var domain = message.args[4].split(" ");
        vk.api.call("utils.resolveScreenName", {
            screen_name: message.args[4]
        })
        .then((res) => {

              	    if(user.clanid != acc.users[message.user.uid].clanid) return message.reply(`Пользователь уже состоит в другом клане.`);
         			if(!clans[clanid]) return message.reply(`этот человек не состоит в вашем клане.`);
        	        
        	        clans[clanid].users[user.uid].level = 0;
        	        return message.reply(`vk.com/id${user.id} был понижен до "участника" в клане.`);
        })
        return;
    }else{

        if(acc.users[user.uid].clanid != acc.users[message.user].clanid) return message.reply(`Пользователь уже состоит в другом клане.`);
         if(!clans[clanid]) return message.reply(`этот человек не состоит в вашем клане.`);

        	clans[clanid].users[user.uid].level = 0;
        	return message.reply(`vk.com/id${user.id} был понижен до "участника" в клане.`);      
    }
});

cmd.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы успешо сняли ${utils.sp(message.args[1])}₽
💳 Остаток на счёте: ${utils.sp(message.user.bank)}₽
💰 Ваш баланс: ${utils.sp(message.user.balance)}₽`);
	}
});

cmd.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;
	if(message.args[1] <= 49) return bot(`минимальная сумма вклада 50₽`);
	if(message.args[1] > 250000000000) return bot(`максимальная сумма вклада 250.000.000.000₽`);

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили на свой банковский счёт ${utils.sp(message.args[1])}₽`);
	}
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`🔕 || ${message.user.tag}, к сожалению, Вы отключили уведомления! :(`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return message.send(`🔔 || [id${message.user.id}|${message.user.tag}], Вы обрано включили уведомления! :3`);
	}
});

cmd.hear(/^(?:передать|передай|перидать|пиредать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
 
		let amount = parserInt(message.args[2]); 
		if(message.user.right <= 1) {
		if(message.args[2] >= 100000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много переводишь?`);
        
	if(message.user.timers.translation) return bot(`вы сможете передать игроку в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.translation = false;
	}, 600000);

	message.user.timers.translation = true;
}
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}₽`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный UID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный UID`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`вы передали игроку ${user.tag} ${utils.sp(message.args[2])}₽`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}₽!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:Купить карту)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.user.foolder += 1;
  if(message.user.ccard == true) return message.send(`У вас уже ЕСТЬ карта.`);
	{
var result = '';
   var words = '0123456789';
   var max_position = words.length - 1;
       for( i = 0; i < 16; ++i ) {
            position = Math.floor ( Math.random() * max_position );
            result = result + words.substring(position, position + 1);
            }
var results = '';
   var wordss = '0123456789';
       for( i = 0; i < 3; ++i ) {
            position = Math.floor ( Math.random() * max_position );
            results = results + wordss.substring(position, position + 1);
            }
message.user.cardss = result;
message.user.seccard = results;
message.user.balance -= 300;
  message.user.ccard = true;
  vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;+79000000001&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
Добрый день, ${message.user.tag}.
Вы успешно приобрели карту VISA! Вот информация о карте:
========================
Номер карты: ${result}
Ваш CVC: ${results}
========================
Также, было снято 300₽ с вашего баланса, за приобретение карты в боте.` }); 
}
});

cmd.hear(/^(?:положить на карту)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.args[1] >= 100000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много снимаешь?`);
	  if(message.user.ccard == false) return bot(`у вас нет карты.`);
	  const user = await users.find(x=> x.uid === Number(message.args[1])); 
if(!message.args[1])  return message.send(`[!] Введите сумму.`);
if(message.args[1] < 0) return bot(`сумма не должна быть ниже 0.`);
if(message.args[1] > message.user.balance) return bot(`на вашем счету не достаточно средств!`);
message.user.balance -=  Number(message.args[1]);
message.user.card +=  Number(message.args[1]);
vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;+79000000001&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
На вашу карту (${message.user.cardss}) было зачислено: ${Number(message.args[1])}₽.
Ваш баланс на карте составляет: ${message.user.card}₽` }); 
return message.send(`[💳] >> Вы успешно положили на карту: ${Number(message.args[1])}₽`);
});

cmd.hear(/^(?:снять с карты)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

		if(message.args[1] >= 100000000000) return message.reply(`[🤔] >> Скажи, а куда ты так много снимаешь?`);
	if(message.user.ccard == false) return bot(`у вас нет карты.`);
  if(!message.args[1])  return message.send(`[!] >> Введите сумму.`);
  if(message.args[1] > message.user.card) return bot(`на вашем счету не достаточно средств!`);
  let stavkaa = 10;
  let summa = Number(message.args[1]);
  proc = Number(summa) / 100 * Number(stavkaa);

    let vivod = Number(summa) - Number(proc);


  message.user.card -= summa;
  message.user.balance += Math.round(vivod);
  vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;+79000000001&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
С вашей карты (${message.user.cardss}) было снято: ${Math.round(vivod)}₽.
Ваш баланс на карте составляет: ${message.user.card}₽` }); 
  return message.send(`[🤑] >> Вы успешно сняли ${Math.round(vivod)}₽ (С комиссией)`);
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.hear(/^(?:ник|никнейм)\s(вкл|выкл)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:ник|зови меня|никнейм|зови)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(message.user.right <= 1) {
	if(message.args[1].length >= 21) return bot(`максимальная длина ника 20 символов\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат "Модератор"`);
}
	message.user.tag = message.args[1];
	return bot(`ваш новый ник.`);
});

cmd.hear(/^(?:магазин|магаз)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`разделы магазина:
🚙 Транспорт:
⠀⠀🚗 Автосалон 
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты

🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры

📌 Остальное:
⠀⠀📱 Телефоны
⠀⠀⭐ Фермы
⠀⠀👑 Рейтинг [кол-во] - 1 рейтинг = 250.000.000₽
⠀⠀💼 Бизнесы
⠀⠀🌐 Биткоин [кол-во]

🔎 Для покупки используйте "Купить [категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Купить телефон 7', 'Купить машину 1', 'Купить ферму 2', 'Купить бит 100', 'Купить рейтинг 10'])}"`);
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}₽`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою яхту за ${utils.sp(a)}₽`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали свой самолёт за ${utils.sp(a)}₽`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет самолёта`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`вы продали свой вертолёт за ${utils.sp(a)}₽`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали свой дом за ${utils.sp(a)}₽`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали свою квартиру за ${utils.sp(a)}₽`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}₽`);
	}

	if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return bot(`у вас нет фермы`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

		message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		message.user.misc.farm = 0;

		return bot(`вы продали свою ферму за ${utils.sp(a)}₽`);
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга`);
		let a = (150000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}₽`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return bot(`у вас нет бизнеса`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business = 0;

		return bot(`вы продали свой бизнес за ${utils.sp(a)}₽`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно биткоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}₽`);
	}

	if(/угль/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.coal) return bot(`недостаточно угля`);
		const coals = utils.random(500);

		message.user.balance += coals;
		message.user.coal -= options.count;

		return bot(`вы продали ${options.count} угль за ${utils.sp(coals)}₽`);
	}

	if(/железо/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.iron) return bot(`недостаточно железа`);
		const irons = utils.random(1000);

		message.user.balance += irons;
		message.user.iron -= options.count;

		return bot(`вы продали ${options.count} слиток зелеза за ${utils.sp(irons)}₽`);
	}

	if(/золото/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.gold) return bot(`недостаточно золота`);
		const golds = utils.random(3500);

		message.user.balance += golds;
		message.user.gold -= options.count;

		return bot(`вы продали ${options.count} слиток золота за ${utils.sp(golds)}₽`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.diamonds) return bot(`недостаточно алмаза`);
		const diamonds = utils.random(5000);

		message.user.balance += diamonds;
		message.user.diamonds -= options.count;

		return bot(`вы продали ${options.count} алмаз за ${utils.sp(diamonds)}₽`);
	}

	if(/изумруд/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.emeralds) return bot(`недостаточно эмеральда`);
		const emeralds = utils.random(10000);

		message.user.balance += emeralds;
		message.user.emeralds -= options.count;

		return bot(`вы продали ${options.count} эмеральд за ${utils.sp(emeralds)}₽`);
	}
});

cmd.hear(/^(?:купить машину|автосалон|автосалон машин)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`Все машины в автосалоне: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Самокат (500₽)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Велосипед (2.500₽)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. Гироскутер (5.000₽)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Скутер (17.500₽)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. Мопед (25.000₽)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Мотоцикл (50.000₽)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. ВАЗ 2109 (75.000₽)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. ВАЗ 2110 (80.000₽)
${message.user.transport.car === 9 ? '🔹' : '🔸'} 9. ВАЗ 2115 (135.000₽)
${message.user.transport.car === 10 ? '🔹' : '🔸'} 10. ВАЗ 2199 (200.000₽)
${message.user.transport.car === 11 ? '🔹' : '🔸'} 11. Лада Xray (350.000₽)
${message.user.transport.car === 12 ? '🔹' : '🔸'} 12. Audi TT (750.000₽)
${message.user.transport.car === 13 ? '🔹' : '🔸'} 13. BMW X6 (1.000.000₽)
${message.user.transport.car === 14 ? '🔹' : '🔸'} 14. Toyota FT-HS (1.750.000₽)
${message.user.transport.car === 15 ? '🔹' : '🔸'} 15. BMW Z4 M (2.500.000₽)
${message.user.transport.car === 16 ? '🔹' : '🔸'} 16. Subaru WRX STI (2.750.000₽)
${message.user.transport.car === 17 ? '🔹' : '🔸'} 17. Lamborghini Veneno (3.000.000₽)
${message.user.transport.car === 18 ? '🔹' : '🔸'} 18. Tesla Roadster (4.500.000₽)
${message.user.transport.car === 19 ? '🔹' : '🔸'} 19. Ford Fiesta GT (5.000.000₽)
${message.user.transport.car === 20 ? '🔹' : '🔸'} 20. Ford Transit (6.500.000₽)
${message.user.transport.car === 21 ? '🔹' : '🔸'} 21. Ford Mustang Boss 33 (35.000.000₽)
${message.user.transport.car === 22 ? '🔹' : '🔸'} 22. Ferrari LaFerrari (39.000.000₽)
${message.user.transport.car === 23 ? '🔹' : '🔸'} 23. Koenigsegg Regear (50.000.000₽)
${message.user.transport.car === 24 ? '🔹' : '🔸'} 24. Pintiac Vibe (75.000.000₽)
${message.user.transport.car === 25 ? '🔹' : '🔸'} 25. Nissan SkyLine (125.000.000₽)
${message.user.transport.car === 26 ? '🔹' : '🔸'} 26. Lexus LC500 (200.000.000₽)

Для покупки введите "Купить машину [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`Поздравляем с покупкой! Вы купили себе машину ${sell.name} за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:купить яхту|яхты)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`Все яхты: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000₽)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000₽)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000₽)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000₽)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000₽)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000₽)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000₽)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000₽)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000₽)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000₽)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000₽)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000₽)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000₽)

Для покупки введите "Купить яхту [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`Поздравляем с покупкой! Вы купили себе яхту ${sell.name} за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:купить самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`Все самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000₽)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000₽)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000₽)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000₽)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000₽)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000₽)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000₽)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000₽)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000₽)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000₽)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000₽)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000₽)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000₽)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000₽)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000₽)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000₽)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000₽)

Для покупки введите "Купить самолёт [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`Поздравляем с покупкой! Вы купили себе ${sell.name} за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:купить вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`Все вертолеты: 
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2₽)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000₽)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000₽)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000₽)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000₽)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000₽)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000₽)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000₽)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000₽)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000₽)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000₽)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000₽)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000₽)

Для покупки введите "Купить вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`Поздравляем с покупкой! Вы купили себе вертолёт ${sell.name} за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:купить дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коробка из-под холодильника (250₽)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Подвал (3.000₽)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Сарай (3.500₽)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Домик на дереве (5.000₽)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Полуразрушенный дом (10.000₽)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Родительский дом (25.000₽)
${message.user.realty.home === 7 ? '🔹' : '🔸'} 7. Деревянный дом (37.500₽)
${message.user.realty.home === 8 ? '🔹' : '🔸'} 8. Дача (125.000₽)
${message.user.realty.home === 9 ? '🔹' : '🔸'} 9. Кирпичный дом с подвальным гаражом (80.000₽)
${message.user.realty.home === 10 ? '🔹' : '🔸'} 10. Коттедж в горах (450.000₽)
${message.user.realty.home === 11 ? '🔹' : '🔸'} 11. Особняк в лесу (1.250.000₽)
${message.user.realty.home === 12 ? '🔹' : '🔸'} 12. Дом на берегу (5.000.000₽)
${message.user.realty.home === 13 ? '🔹' : '🔸'} 13. Дом на холме (7.000.000₽)
${message.user.realty.home === 14 ? '🔹' : '🔸'} 14. Дом с бассеином (12.500.000₽)
${message.user.realty.home === 15 ? '🔹' : '🔸'} 15. Личный город (20.000.000₽)

Для покупки введите "Купить дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`Поздравляем с покупкой! Вы купили себе ${sell.name} за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:купить квартиру|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак в подъезде (15.000₽)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000₽)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000₽)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная родительская квартира (260.000₽)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000₽)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре города (1.600.000₽)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Квартира на 9 этаже (4.000.000₽)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Собственная квартира с Евроремонтом (6.000.000₽)

Для покупки введите "Купить квартиру [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`Поздравляем с покупкой! Вы купили себе ${sell.name} за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:купить телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return bot(`Все марки телефонов: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 3310 (3.490₽)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. LG b1300 (2.990₽)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. Nokia Lumia 520 (4.500₽)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. Samsung Galaxy A10 (7.713₽)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia L1 (5.990₽)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. LG Q7 (12.780₽)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Pocophone F1 (22.500₽)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. HUAWEI Nova 5 Pro (30.000₽)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. Honor 20 Pro (35.000₽)
${message.user.misc.phone === 10 ? '🔹' : '🔸'} 10. APPLE Iphone XS (78.990₽)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`Поздравляем с покупкой! Вы купили себе телефон ${sell.name} за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:купить рейтинг)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`Поздравляем с покупкой! Вы повысили свой рейтинг на ${message.args[1]} за ${message.args[1] * 250000000}₽`);
	}
});



cmd.hear(/^(?:курс)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`курс валют на данный момент:
💸Биткоин: ${utils.sp(btc)}₽`);
});

cmd.hear(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс биткоина: ${btc}₽`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`Поздравляем с покупкой! Вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}₽`);
	}
});

cmd.hear(/^(?:топ)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`вот список топов:

		[$] >> Топ баланс
		[₿] >> Топ биткоинов
		[&#9993;] >> Топ сообщений
		[&#9993;] >> Топ кланы`);
});

	cmd.hear(/^(?:топ кланы)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let text = "";
		let tops = [];
		
		for(key in clans) {
			tops.push({
				id: key,
				balance: clans[key].balance,
				name: clans[key].name,
				owner: clans[key].owner,
				exp: 0
			});
		}
		tops.sort((a,b) => {
			if(a.balance < b.balance)
				return 1;
			else if (a.balance > b.balance)
				return -1;
			return 0;
		});
		
		let topClans = [];
		for(i = 0; i < (tops.length > 10 ? 9 : tops.length); i++) {
			topClans.push({
				id: tops[i].id,
				balance: tops[i].balance,
				name: tops[i].name,
				owner: tops[i].owner,
				exp: 0,
				number: i
			})
		};
		
		
		return message.send(
			"💰 » Топ самых сильных кланов: \n\n" +
			topClans.map(e => 
				(e.number+1) + `&#8419;. ` + e.name +
				`\n🐱 » Основатель: [id${e.owner.id}|${e.owner.tag}]\n` +
				`🔥 » Баланс клана: ` + e.balance +
				`\n🔥 » Id клана: ` + e.number +
				`\n🌍 » Количество участников: ` + e.people + `\n\n`)
		);
});

cmd.hear(/^(?:топ баланс)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ${utils.sp(user.rating)}👑 | ${utils.rn(user.balance)}₽`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.rating)}👑 | ${utils.rn(message.user.balance)}₽`);
});

cmd.hear(/^(?:топ биткоинов)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ btc: x.btc, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.btc - a.btc;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ${utils.sp(user.btc)}₿`;
	}

	return message.send(`Топ игроков по БитКоинам:
		${text}
—————————————————

${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.btc)}₿`);
});

cmd.hear(/^(?:топ сообщений)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ foolder: x.foolder, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.foolder - a.foolder;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ${utils.sp(user.foolder)}&#9993;`;
	}

	return message.send(`Топ игроков по сообщениям:
		${text}
—————————————————

${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.foolder)}&#9993;`);
});

cmd.hear(/^(?:получить бонус)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	if(message.user.right <= 1) {
	if(message.user.timers.bonus) return bot(`Вы сможете получить бонус в течении 24 часов.`);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;
}
	if(prize === 1)
	{
		message.user.balance += 5000;
		return bot(`Поздравляем! Вы выиграли 5.000₽.`);
	}

	if(prize === 2)
	{
		message.user.btc += 10;
		return bot(`Поздравляем! Вы выиграли 10₿.`);
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		return bot(`Поздравляем! Вы выиграли 5 рейтинга.\n👑 Ваш рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`Поздравляем! Вы выиграли 1 рейтинг.\n👑 Ваш рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		return bot(`Поздравляем! Вы выиграли 10 рейтингов.\n👑 Ваш рейтинг: ${utils.sp(message.user.rating)}`);
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		return bot(`Поздравляем! Вы выиграли 2 рейтинга.\n👑 Ваш рейтинг: ${utils.sp(message.user.rating)}`);
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		return bot(`Поздравляем! Вы выиграли 3 рейтинга.\n👑 Ваш рейтинг: ${utils.sp(message.user.rating)}`);
	}
	if(prize === 8)
	{
		message.user.rating += 4;
		return bot(`Поздравляем! Вы выиграли 4 рейтинга\n👑 Ваш рейтинг: ${utils.sp(message.user.rating)}`);
	}
	if(prize === 9)
	{
		message.user.bank += 1000000;
		return bot(`Поздравляем! Вы выиграли 1.000.000₽ на свой банковский счёт.\n💳 В банке: ${utils.sp(message.user.bank)}₽`);
	}
	if(prize === 10)
	{
		message.user.bank += 5000000;
		return bot(`Поздравляем! Вы выиграли 5.000.000₽ на свой банковский счёт.\n💳 В банке: ${utils.sp(message.user.bank)}₽`);
	}

	if(prize === 11)
	{
		message.user.bank += 10000000;
		return bot(`Поздравляем! Вы выиграли 10.000.000₽ на свой банковский счёт.\n💳 В банке: ${utils.sp(message.user.bank)}₽`);
	}

	if(prize === 12)
	{
		message.user.bank += 50000000;
		return bot(`Поздравляем! Вы выиграли 50.000.000₽ на свой банковский счёт.\n💳 В банке: ${utils.sp(message.user.bank)}₽`);
	}
});

/* |                        | */
/* | А тут уже идут - Браки | */
/* V                        V */

cmd.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.marriage.partner) return bot(`Вы уже в браке с ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`Мы Вас понимаем, но нужно бороться за свое счастье!`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`Неверный UID. Попробуйте ввести UID персонажа!`);

	if(user.marriage.partner) return bot(`Этот человек уже состоит в браке. Ищите другую пару!`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`Вы уже делали предложение этому игроку!`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`Поздравляем! Вы вступили в брак с "${user.tag}"`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`Вы сделали предложение "${user.tag}"`);
});

cmd.hear(/^(?:Мои предложения)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.marriage.partner) return bot(`Вы уже состоите в браке!`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от "${users[x].tag}" (UID: ${x})`).join('\n')}`);
});

cmd.hear(/^(?:развод)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.marriage.partner) return bot(`вы и так свободны!`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`Вы развелись. Удачи!;)`);
});

/* |                          | */
/* | А тут уже идут - Репорты | */
/* V                          V */

cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.isChat) return bot(`команда работает только в ЛС.`);

       let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(🥃|👨‍|🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|😀|😃|😄|😁|😆|😅|😂|🤣|☺|😊|😇|🙂|🙃|😉|😌|😍|😘|😗|😙|😚|😋|😜|😝|😛|🤑|🤗|🤓|😎|🤡|🤠|😏|😒|😞|😔|😟|😕|🙁|☹|😣|😖|😫|😩|😤|😠|😡|😶|😐|😑|😯|😦|😧|😮|😲|😵|😳|😱|😨|😰|😢|😥|🤤|😭|😓|😪|😴|🙄|🤔|🤥|😬|🤐|🤢|🤧|😷|🤒|🤕|😈|👿|👹|👺|💩|👻|💀|☠|👽|👾|🤖|🎃|😺|😸|😹|😻|😼|😽|🙀|😿|😾|👐|🙌|👏|🙏|🤝|👍|👎|👊|✊|🤛|🤜|🤞|✌|🤘|👌|👈|👉|👆|👇|☝|✋|🖐|🖖|👋|🤙|💪|🖕|✍|🤳|💅|🖖|💄|💋|👄|👅|👂|👃|👤|👣|👁|👀|🗣|👥|👶|👦|👧|👨|👩|👱‍♀️|👱|👴|👵|👲|👳‍♀️|👳|👮‍♀️|👮|👷‍♀️|👷|💂‍♀️|💂|🕵‍♀️|🕵|👩‍⚕️|👨‍⚕️|👩‍🌾️|👨‍🌾️|👩‍🍳️|👨‍🍳️|👩‍🎓️|👨‍🎓️|👩‍🎤️|👨‍🎤️|👩‍🏫️|👨‍🏫️|👩‍🏭️|👨‍🏭️|👩‍💻️|👨‍💻️|👩‍💼️|👨‍💼️|👩‍🔧️|👨‍🔧️|👩‍🔬️|👨‍🔬️|👩‍🎨️|👨‍🎨️|👩‍🚒️|👨‍🚒️|👩‍✈️|👨‍✈️|👩‍🚀️|👨‍🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|🎓|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
    return message.reply(`☒ -> Отказ отправление репорта!

    	⚠ >> Причина:
    	Прости, но нельзя использовать символы и маты в репортах.`);
}

	vk.api.messages.send({ user_id: 521344632, forward_messages: message.id, message: `<<☐>> Чтобы отправить ответ пользователю, вы должны написать - Ответ ${message.user.uid} (Ваш ответ) <<☐>>` }).then(() => {
		return bot(`ваше сообщение на стадии расмотрения.`);
	}).catch((err) => {
		return message.send(`☒ -> Отказ отправление репорта!
			
			⚠ >> Причина:
			Кажись, одмен, который купил етого бота, не правильно настроил его.
			Вы можете написать НАСТОЯЩЕМУ администратору бота - [id425433519|Никите] (Vk.com/lightning_foxxx)`);
	});
});


cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
			if(message.user.right < 3) return;

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `
	<- &#4448;Moderator&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
❜${message.args[2]}❜` });
});

cmd.hear(/^(?:купить номер)$/i, async (message, bot) => {
	message.user.foolder += 1;

	const operator1 = utils.random(2, 6);
	if(message.user.number > 9) return bot(`Вы уже имеете номер!`);
	if(!message.user.misc.phone) return message.send(`📱 >> У вас нет телефона.`);
	{
var result = '';
   var words = '0123456789';
   var max_position = words.length - 1;
       for( i = 0; i < 9; ++i ) {
            position = Math.floor ( Math.random() * max_position );
            result = result + words.substring(position, position + 1);
            }
message.user.balance -= 300,
message.user.number = result;
message.user.numberss = true;
message.user.operator = operator1;
return message.send(`📱 || Вы успешно получили телефонный номер: +79${result} || Оператор: ${message.user.operator.toString().replace(/2/gi, "Теле2").replace(/3/gi, "Мегафон").replace(/4/gi, "Билайн").replace(/5/gi, "Yota").replace(/5/gi, "Vk mobile").replace(/6/gi, "Мтс")}`);
}
});

cmd.hear(/^(?:!русский)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.user.language += 1;

	return bot(`успешно! Вы сменили язык на русский.`);
});

cmd.hear(/^(?:шахта)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.exp < 1) return bot(`мало опыта!`);
if(message.user.right <= 1) {
	if(message.user.timers.mine) return bot(`прости, но ты уже работал(а) на шахте!
		Шахта будет доступна в течении 30 минут.`);

	setTimeout(() => {
		message.user.timers.mine = false;
	}, 1800000);
	message.user.timers.mine = true;
}
	const coals = utils.random(500);
	const irons = utils.random(150);
	const golds = utils.random(100);
	const emeralds = utils.random(20);
	const diamondss = utils.random(10);

	message.user.coal += coals;
	message.user.iron += irons;
	message.user.gold += golds;
	message.user.diamonds += diamondss;
	message.user.emeralds += emeralds;

	return bot(`в шахте, вы нашли:
			&#128488; Угля: ${utils.sp(coals)}
		&#11036; Железа: ${utils.sp(irons)}
		&#128155; Золото: ${utils.sp(golds)}
		&#128142; Алмазов: ${utils.sp(diamondss)}
		&#128160; Изумрудов: ${utils.sp(emeralds)}`);
});

/* |                         | */
/* | А тут уже идёт - Работа | */
/* V                         V */

cmd.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут.` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу, недостаточно опыта.`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`Вас приняли на работу - "${work.name}"
		👔 Введите команду "Работать"`);
	}
});



cmd.hear(/^(?:работа)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	👔 1. Дворник || Зарплата ~2.000₽ || Левел: 1
	👔 2. Сторож || Зарплата ~3.750₽ || Левел: 3
	👔 3. Продавец || Зарплата ~4.000₽ || Левел: 5
	👔 4. Няня || Зарплата ~6.000₽ || Левел: 8
	👔 5. Курьер || Зарплата ~7.500₽ || Левел: 10
	👔 6. Слесарь || Зарплата ~9.000₽ || Левел: 14
	👔 7. Охранник -|| Зарплата ~10.000₽ || Левел: 22
	👔 8. Библиотекарь || Зарплата ~12.500₽ || Левел: 25
	👔 9. Воспитатель || Зарплата ~14.500₽ || Левел: 35
	👔 10. Педагог || Зарплата ~16.000₽ || Левел: 49
	👔 11. Повар || Зарплата ~17.500₽ || Левел: 65
	👔 12. Грузчик || Зарплата ~19.500₽ || Левел: 95
	👔 13. Парикмахер || Зарплата ~23.500₽ || Левел: 105
	👔 14. Врач || Зарплата ~24.500₽ || Левел: 125
	👔 15. Торговый представитель || Зарплата ~26.500₽ || Левел: 145
	👔 16. Специалист по валютным операциям || Зарплата ~55.500₽ || Левел: 200
	👔 17. Юрист по налоговому праву || Зарплата ~70.500₽ || Левел: 250
	👔 18. Программист PHP || Зарплата ~90.500₽ || Левел: 300

	[💡] » Для усройства на работу - Работа [номер] 
    [💡] » Для для того, чтобы уволиться - уволиться
	
    [💰] || Зарплату можно получать в течении 10 мин.
    [💰] | Командой - Работать`);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);
if(message.user.right <= 1) {
	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;
}
	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}₽`);
});

cmd.hear(/^(?:уволиться|уволится)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы - "${work.name}"`);
});

/* |                       | */
/* | А тут уже идут - Игры | */
/* V                       V */

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию "Модератор".\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000;
		return bot(`вы угадали! Приз 2.000.000₽`);
	} else return bot(`не угадали 
	🎲 Выпало число ${int}`);
});



cmd.hear(/^(?:казино)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию "Модератор".\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.5, 0.50, 0.75, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return message.send(`[🎰] >> Вам выпала комбинация [${['🍒🍊🍓','💰🍊🍒', '🍊🍊💰', '🍋🍊🍊', '💰🍓💰'].random()}]
		[${['😐','🤐', '😝', '😰', '🤧'].random()}] >> ${multiply === 1 ? `Ваши деньги остаются при вас` : `${multiply < 1 ? `Вы проиграли ${utils.sp(message.args[1] * multiply)}₽` : `Вы выиграли ${utils.sp(message.args[1] * multiply)}₽`}`}
		[❤] >> На этот раз, мы умножили вашу сумму на -> x${multiply}
		
		[💰] || Ваш баланс: ${utils.sp(message.user.balance)}₽`);
	}
});

cmd.hear(/^(?:ловушка)\s(.*)$/i, async (message, bot) => {
  if(!message.args[1]) return message.send(`укажите ставку`);	
  let text = parserInt(message.args[1]); 
  if(!Number(text)) return bot(`ставка должна быть целым числом. Например: ловушка 200.`); 
  if(!text) return bot("укажите ставку!");
  if(!message.args[1]) return bot(`Вы не указали ставку`);
  if(text > message.user.balance || text <= 0) return bot(text <= 0 ? `ставка не может быть меньше 0 или равна 0` : `ставка не может превышать баланс`);
{
 	if(rand(1,100) > 50) {
        let win = text * 2;
        message.user.balance += Math.round(win);   
	    if(message.user.balance <= 0){
	    	message.user.balance = 0;
	    }
        return bot(`Вы засунули руку в коробку...\n[😎] >> Из нее вы достали -> [${['💶','💍', '💎', '💰', '🎁', '⚽'].random()}] \n💴 >> Вы выиграли:  ${spaces(win)}₽`);
    }else{
        let win = text;
        message.user.balance -= Math.round(win);  
	    if(message.user.balance <= 0){
	    	message.user.balance = 0;
	    }
        return bot(`Вы засунули руку в коробку...\n[💀] >> Какая неудача... Вы повредили руку -> [${['ловушкой','мышеловкой', 'капканом'].random()}] \n[💴] >> Вы проиграли:  ${spaces(win)}₽`);
   
    } 		

}
})

cmd.hear(/^(?:тир)\s(.*)\s(.*)$/i, async (message, bot) => {

		if(!message.args[1]) return bot(`укажите ID мишени (от 1 до 3)`)
		if(!message.args[2]) return bot(`укажите ставку.`)
		let stavka = parserInt(message.args[2]); 
  		if(!Number(stavka)) return bot(`ставка должна быть целым числом. Например: тир 2 200`); 
		if(stavka > message.user.balance) return bot(`у вас нет столько денег`);
		let text = message.args[1];   
		if(message.args[1] > 3) return bot(`укажите ID мишени (от 1 до 3)`)
		if(message.args[1] < 1) return bot(`укажите ID мишени (от 1 до 3)`)
		if(stavka > message.user.balance || stavka <= 0) return bot(stavka <= 0 ? `ставка не может быть меньше 0 или равна 0` : `ставка не может превышать баланс`);

 	if(rand(1,100) > 50){
	    message.user.balance += stavka;
	    if(message.user.balance <= 0){
	    	message.user.balance = 0;
	    }
	    return bot(`поздравляю! Вы попали прямо в цель!!\n[👤] >> Вы забираете ваш выигрыш :3`, {attachment: win});
	  }else{
	    message.user.balance -= stavka;
	    if(message.user.balance <= 0){
	    	message.user.balance = 0;
	    }

    return bot(`Вы промохнулись...\n[💀] >> Вы теряете всю свою ставку.`, {attachment: lose});
  	}
	   
});

cmd.hear(/^(?:рр|русская рулетка)$/i, async (message, bot) => {


    if(message.user.balance == 0) return message.reply("🔔 Играть в игры можно с балансом выше 0! 🔔");
    if(message.user.pp == 1) return message.reply(`${message.user.tag}, ты уже в игре!`);
	message.reply(`[💀] | ${message.user.tag}, Вы начали игру в "Русскую Рулетку"\n\n [🤤] | Задача этой игры: Вам дано 3 выстрела... Если в Вас не попала пуля, то мы дадим на ваш баланс 1.000.000.000.000₽, а если в вас попала пуля, то весь ваш баланс обнуляется.\n\n[⚠] » Чтобы сделать выстрел, то отправьте боту - 🔫`);
	return message.user.pp = 1;
});

cmd.hear(/^(?:🔫|выстрел)$/i, async (message, bot) => {

	let balance = message.user.balance;
	let pp = message.user.pp;
	let p = 3 - pp;
		let ran =  ["неуспешно","уcпешно"];
		let rand = ran.random();

	if(message.user.pp == 0) return;
	if(message.user.pp > 0){
		if(rand != "неуспешно"){
			message.user.pp += 1;
			if(message.user.pp == 4){
			message.user.pp = 0;
			message.user.balance += 1000000000000;
			return message.reply(`[😅] >> ${message.user.tag}, поздравляем! Вы выжили в этой страшной игре!\n[☺] » Мы подарили вам - 1.000.000.000.000₽`);
			}
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			return message.reply(`[😎] >> Пуля не попала вам в голову\n[🍀] » Вам повезло. Стреляйте дальше!\n[😧] » Осталось выстрелов: ` + p);

		}
		if(rand != "успешно"){
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			message.reply(`[🤕] >> Пуля попала вам в голову\n[😞] » Удача повернулась к вам спиной.\n[😶] » Вы проиграли. Баланс анулирован. `);
			message.user.balance = 5000;
			return message.user.pp = 0;
				}
			}


});


cmd.hear(/^(?:монетка)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {


    if(!message.args[1]) return message.reply(`Ⓜ » Проверьте вводимые данные:\nⓂ »  монетка ставка орел/решка`);
    let user = message.user;
    if(message.args[1] > message.user.balance || message.args[1] <= 0) return message.reply(message.args[1] <= 0 ? `Ставка не может быть меньше 0 или равна 0` : `Ставка не может превышать баланс`);
   	
	let a = rand(1,100);
    if(a > 50) {
    	if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}₽\n[₽] » Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}₽\n[₽] » Баланс: ${spaces(user.balance)}`);
    }
    }
    if(a < 50) {
       if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}₽\n[₽] » Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}₽\n[₽] » Баланс: ${spaces(user.balance)}`);
    		}
   		 }
	return message.reply(`[Подсказка] » монетка [ставка] [орел/решка]`);
});

cmd.hear(/^(?:Фортуна)$/i, async (message, bot) => {
	message.user.foolder += 1;
			if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию "Модератор".\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
		return message.reply(`
    [👾]: Призы рулетки :[👾]
    💠 | Алмазы.
    💠 | Уголь.
    💠 | Валюта.
    💠 | БитКоины.

    [✳] >> Цена прокрутки: 20 БитКоинов.
    [✳] >> Команда, чтобы начать играть "Крутить"
    `, {attachment: fortyn});
	});
 
cmd.hear(/^(?:Крутить)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию "Модератор".\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
		let user = message.user
		   	if (message.user.btc < 20) return message.reply(`[🍏] >> Прокрутка рулетки стоит 20 БитКоинов.`, {attachment: fortyn});
			message.user.btc -= 20;

		let balan = rand(350000, 550000);
		let win = rand(1, 6);
		if (win == 1) {
			let win2 = rand(1, 3);
			if (win2 == 1) {
				let win3 = rand(1, 3);
				if (win3 == 3) {
					if (message.user.level > 1) {
						message.user.balance += 500000;
						return message.reply(`[🔆] >> Вы выиграли 500.000₽!`, {attachment: fortyn});
					}
			        message.user.balance += 100000;
					return message.reply(`[✨] >> Вы выиграли 100.000₽!`, {attachment: fortyn});
				}
			} else {
				message.user.balance += balan;
				return message.reply(`[🍀] >> Вы выиграли ${spaces(balan)}₽!`, {attachment: fortyn});
			}
			if (win2 > 1) {
				message.user.balance += balan;
				return message.reply(`[⚡] >> Вы выиграли ${spaces(balan)}₽!`, {attachment: fortyn});
			}
		}
		if (win == 2) {
			message.user.balance += balan;
			return message.reply(`[🎉] >> Вы выиграли ${spaces(balan)}₽!`, {attachment: fortyn});
		}
		if (win == 3) {
			let balenc = balan - 5000;
			message.user.balance += balenc;
			return message.reply(`[🎄] >> Вы выиграли ${spaces(balenc)}₽!`, {attachment: fortyn});
		}
		if (win == 4) {
			let don = rand(5, 16);
			message.user.btc += don;
			return message.reply(`[💥] >> Вы выиграли ${spaces(don)} БитКоинов.`, {attachment: fortyn});
		}
		if (win == 5) {
			let exs = rand(135, 160);
			message.user.coal += exs;
			return message.reply(`[💣] >> Вы выиграли ${spaces(exs)} угля.`, {attachment: fortyn});
		}
		if (win == 6) {
			let bit = rand(3, 7);
			message.user.diamond += bit;
			return message.reply(`[🔥] >> Вы выиграли ${spaces(bit)} алмазов.`, {attachment: fortyn});
		}
	});

cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию "Модератор".\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`Курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}₽
			✅ Вы заработали +${message.args[2] * multiply}₽
			💰 Баланс: ${message.user.balance}₽`);
		} else {
			return bot(`Курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}₽
			❌ Вы потеряли ${message.args[2]}₽ 
			💰 Баланс: ${message.user.balance}₽`);
		}
	}
});

cmd.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию "Модератор".\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`Вы угадали! Приз ${message.args[2] * multiply}`);
		} else {
			return bot(`Вы не угадали, это был ${cup} стаканчик`);
		}
	}
});

cmd.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.right <= 1) {
	if(message.user.timers.commands) return message.send(`[🤕] || [id${message.user.id}|${message.user.tag}], нельзя флудить командами.\n[😎] | Чтобы играть без ограничений, ты должен иметь привилегию "Модератор".\n\n[😴] || Через 3 сек, Вы сможете ещё раз написать команду.`);

	setTimeout(() => {
		message.user.timers.commands = false;
	}, 3000);

	message.user.timers.commands = true;
}
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 10000000000;
		return bot(`Вау! Невероятно! Вы угадали число - ${int}!!!
	    Вам начислено 10.000.000.000₽ 😎`);
	} else if(int !== message.args[1])
	{
		return bot(`к сожалению, вы не угадали число. Правильно число, это - "${int}"
		❤ Не отчаивайтесь, ведь количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 10.000.000.000₽`);
	}
});

/* |                         | */
/* | А тут уже идёт - Бизнес | */
/* V                         V */

cmd.hear(/^(?:купить бизнес|бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`Все бизнесы:
${message.user.business === 1 ? '🔸' : '🔹'} 1. Шаурмичная - 50.000₽
⠀ ⠀ ⠀ Прибыль: 400₽/час
${message.user.business === 2 ? '🔸' : '🔹'} 2. Ларёк - 100.000₽
⠀ ⠀ ⠀ Прибыль: 700₽/час
${message.user.business === 3 ? '🔸' : '🔹'} 3. Ресторан - 300.000₽
⠀ ⠀ ⠀ Прибыль: 2.500₽/час
${message.user.business === 4 ? '🔸' : '🔹'} 4. Магазин - 500.000₽
⠀ ⠀ ⠀ Прибыль: 3.800₽/час
${message.user.business === 5 ? '🔸' : '🔹'} 5. Завод - 1.500.000₽
⠀ ⠀ ⠀ Прибыль: 8.000₽/час
${message.user.business === 6 ? '🔸' : '🔹'} 6. Шахта - 25.000.000₽
⠀ ⠀ ⠀ Прибыль: 70.000₽/час
${message.user.business === 7 ? '🔸' : '🔹'} 7. Офис - 80.000.000₽
⠀ ⠀ ⠀ Прибыль: 220.000₽/час
${message.user.business === 8 ? '🔸' : '🔹'} 8. Разработка игр - 150.000.000₽
⠀ ⠀ ⠀ Прибыль: 300.000₽/час
${message.user.business === 9 ? '🔸' : '🔹'} 9. Нефтевышка - 500.000.000₽
⠀ ⠀ ⠀ Прибыль: 700.000₽/час
${message.user.business === 10 ? '🔸' : '🔹'} 10. Атомная электростанция - 800.000.000₽
⠀ ⠀ ⠀ Прибыль: 1.000.000₽/час
${message.user.business === 11 ? '🔸' : '🔹'} 11. Компания программирования новичков - 50.000.000.000₽
⠀ ⠀ ⠀ Прибыль: 50.000.000₽/час
Для покупки введите "Купить бизнес [номер]"`);
	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;

		return bot(`Поздравляем! Вы купили бизнес "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:бизнес)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.business) return bot(`у вас нет бизнеса.`);
	const biz = businesses.find(x=> x.id === message.user.business);

	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(biz.earn)}₽/час
	💰 На счёте: ${utils.sp(message.user.biz)}₽`);
});

cmd.hear(/^(?:бизнес)\s(?:снять)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.business) return bot(`Оууу... Прости, но у вас нет бизнеса.`);
	if(!message.user.biz) return bot(`У вас нет денег на счёте этого бизнеса!`);

	const biz_balance = message.user.biz;

	message.user.balance += message.user.biz;
	message.user.biz = 0;

	return bot(`Вы сняли со счёта своего бизнеса ${utils.sp(biz_balance)}₽`);
});

/* |                        | */
/* | А тут уже идёт - Ферма | */
/* V                        V */

cmd.hear(/^(?:ферма)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.misc.farm) return bot(`у вас нет фермы`);
	if(!message.user.farm_btc) return message.send(`${message.user.tag}, похоже, на вашей ферме пусто, новые биткоины появятся в течении 1 часа.`);

	const btc_ = message.user.farm_btc;

	message.user.btc += message.user.farm_btc;
	message.user.farm_btc = 0;

	return bot(`вы собрали ${utils.sp(btc_)}₿, следующие биткоины появятся через час
	🌐 Биткоинов: ${utils.sp(message.user.btc)}฿`);
});

cmd.hear(/^(?:Купить ферму|фермы)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`Все майнинги ферм: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 20₿/час (20.500.000₽)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 100₿/час (100.000.000₽)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 1000₿/час (900.000.000₽)

Для покупки введите "Купить ферму [номер]"`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.farm) return bot(`У Вас уже есть ферма (${farms[message.user.misc.farm - 1].name}), введите "Продать ферму"`);

	if(message.user.balance < sell.cost) return bot(`Недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.farm = sell.id;

		return bot(`Поздравляем! Вы купили ферму "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

/* |                          | */
/* | А тут уже идёт - Реферал | */
/* V                          V */

cmd.hear(/^(?:реф|реферал)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`вы пригласили: ${users.filter(x=> x.referal === message.user.uid).length}
	Для того, чтобы вам засчитали друга он должен написать команду "Реф ${message.user.uid}"
	
	За каждого друга вы получаете 100.000.000₽ (100 миллионов)
	Если друг активирует вашу рефералку, то он получит 50.000.000₽ (50 миллионов)`);
});

cmd.hear(/^(?:реф|реферал)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.referal !== null) return bot(`вы уже активировали рефералку!`);
	let user = users.find(x=> x.uid === Number(message.args[1]));

	if(!user) return bot(`неверный UID`);
	if(user.id === message.senderId) return bot(`неверный UID`);

	user.balance += 100000000;
	message.user.balance += 50000000;

	message.user.referal = Number(message.args[1]);

	vk.api.messages.send({ user_id: user.id, message: `
	[👋🏻] || Привет, ${user.tag}!

	[🎉] >> Спасибо за приглашение [id${message.user.id}|друга] в бота!
	[💸] >> Вам начислено 100.000.000₽ на баланс.` });
	return bot(`вы успешно активировали рефералку игрока - [${user.id}|${user.tag}]!.
	[💲] >> За это, вам начислено 50.000.000₽`);
});


cmd.hear(/^(?:бот)$/i, async (message, bot) => {
	message.user.foolder += 1;

const percent = utils.random(100);
const ping = utils.random(300);
	await message.send(`[📖] » Техническая информация:

     👾 || Мой проект: [id185203195|+|FoxLight Игровой Бот|+]
     &#4448;⚙ » OC: NodeJS
	 &#4448;🔐 » Версия бота: 1.0
	 &#4448;❤ » Нагрузка: ${percent}%
	 &#4448;📡 » Пинг: ${ping}

	 😎 || Мой создатель - [id425433519|Никита Романов]
	 &#4448;🕳 » Практически отвечает на все вопросы.
`);
});	

/* |                                       | */
/* | А тут уже идут - Чат команды (Беседа) | */
/* V                          
             V */
cmd.hear(/^(?:обнять себя)/i, async (message, bot) => {
	message.user.foolder += 1;
	message.send(`🤗 |[id${message.user.id}|${message.user.realname}] обнял(а) [id${message.user.id}|себя]|🤗`);
});

cmd.hear(/^(?:кто)/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.isChat) return bot(`команда работает только в беседе!`);
    let { profiles } = await vk.api.messages.getConversationMembers({
        peer_id: message.peerId
    });
    let profile = getRandomElement(profiles);
    await message.send(
        getRandomElement(['Это точно', 'Я уверен, что это', 'Твоя мама говрит, что это', 'Кнч, это', 'Думаю, что это', 'Наверное, это', 'Википедия говорит, что это', 'Сотку даю, что это']) + ' -- @id' + profile.id + '(' + profile.first_name + ')'
    );
});

cmd.hear(/^(?:бутылочка)$/i, async (message, bot) => { 
	message.user.foolder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
let { profiles } = await vk.api.messages.getConversationMembers({ 
peer_id: message.peerId 
}); 
let profile = utils.pick(profiles); 
let profile2 = utils.pick(profiles); 
message.send(`[🍷]: Бутылочка :[🍷]

[id${profile.id}|${profile.first_name}] и [id${profile2.id}|${profile2.first_name}] — ваше действие: ` + utils.pick(['Заняться сексом!', 'Поцеловаться', 'Сесть на бутылочку', 'Начать встречаться', '*Вы пропускаете ход*', 'Раздеться', 'Бухнуть', 'Пожениться'])); 
});

cmd.hear(/^(?:кто онлайн|в онлайне|онлайн)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "online"
    }).then(async function (response) {
        let text = `[😎] || Список людей, которые сейчас находятся онлайн:\n\n`;
        await response.profiles.map(e => {
            if(e.id < 1) return;
            if(e.online != 0) text += `${['😍', '😎', '😏', '🙂', '🙃', '😌', '🤤', '😇', '😳', '😂', '😝', '🙄', '😝', '😘', '😗', '😙', '😛', '🤑'].random()} || *id${e.id} (${e.first_name.slice(0,1)}. ${e.last_name})\n`;
			})
        return message.reply(text)
    })
});

cmd.hear(/^(?:убрать сообщения)$/i, async (message, bot) => {
	message.user.foolder += 1;
				if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		return message.send("&#4448;\n".repeat(1000) + "");
});

/* |                              | */
/* | А тут уже идут - Чат команды | */
/* V                              V */

cmd.hear(/^(?:погода|weather)/i, async (message, bot) => {
	message.user.foolder += 1;
    let args = message.text.match(/^(?:погода|weather)\s?(.*)/i);
    if(args[1].toLowerCase() == "") return message.send(nope)
    rq("http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(args[1]) + "&appid=fe198ba65970ed3877578f728f33e0f9&units=metric")
        .then((res) => {
    let Utils = {
    	filter: (text) => { 
    	text = text.replace(/^(RU)/i, 'Россия')
        text = text.replace(/^(UA)/i, 'Украина')
        text = text.replace(/^(BY)/i, 'Беларусь')
        text = text.replace(/^(KZ)/i, 'Казахстан')
        text = text.replace(/^(AE)/i, 'Объединенные Арабские Эмираты')
        return text;
    }};
    function TempTo () {
    	if(res.main.temp < -10) return 'очень холодно'
    	else if(res.main.temp < -5) return 'холодно'
    	else if(res.main.temp < 5) return 'холодновато'
    	else if(res.main.temp < 20) return 'комфортно'
    	else if(res.main.temp < 25) return 'тепло'
    	else if(res.main.temp < 30) return 'жарко'
        else if(res.main.temp < 50) return 'Очень жарко'
    };
    function Timer () {
    	let now = new Date(res.dt*1000).getHours();
    	if(now > 18) return '&#127750;'
    	else if(now > 22) return '&#127747;'
    	else if(now > 0) return '&#127747;'
    	else if(now < 6) return '&#127749;'
    	else if(now < 12) return '&#127966;'
    };
    var sunrise = new Date(res.sys.sunrise*1000);
    var sunset = new Date(res.sys.sunset*1000);
    function sunmin () {
    	if(sunrise.getMinutes() < 10) "0" + sunrise.getMinutes();
    	return sunset.getMinutes();
    };
    function sunsmin () {
    	if(sunset.getMinutes() < 10) "0" + sunset.getMinutes();
    	return sunset.getMinutes();
    };
    function daterh () {
    	if(date.getHours() < 10) "0" + date.getHours();
    	return date.getHours()
    };
    function daterm () {
    	if(date.getMinutes() < 10) "0" + date.getMinutes();
    	return date.getMinutes();
    };
    var date = new Date(res.dt*1000);
    return message.reply(`${Timer()} ${res.name}, ${Utils.filter(res.sys.country)}

➖ Сейчас там ${TempTo()}: ${res.main.temp}°С
➖ Рассвет: ${sunrise.getHours()}:${sunmin()}
➖ Закат: ${sunset.getHours()}:${sunsmin()}
➖ Скорость ветра: ${res.wind.speed} м/с`)})
});


cmd.hear(/^(?:гиф)/i, async (message, bot) => {
	message.user.foolder += 1;
       vk.api.call('docs.search', {q: utils.pick(['ржака', 'игры', 'каваи', 'лайфхаки', 'тян', 'крафт', 'любовь', 'аниме', 'животные', '5 minute', 'пиздец', 'смешно', 'мем', 'классно', 'ня', 'пикча', 'авария']) + '.gif', count: 1})
        .then(response => {
            let items = response.items.map(x => `doc${x.owner_id}_${x.id}`).join(',');
            let item = utils.pick(response.items);
            message.send({attachment: items})
        })
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи : "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:когда|when)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
    let times = {
    60: ['секунду', 'секунды', 'секунд'], 
    60: ['минуту', 'минуты', 'минут'], 
    24: ['час', 'часа', 'часов'], 
    365: ['день', 'дня', 'дней'], 
    2018: ['год', 'года', 'лет']
};
    let item = utils.pick(Object.keys(times));
    let time = utils.random(Number(item));
    let date = await nDay(time, times[item]);
    return await bot(`событие произойдет, через ${time} ${date}`);

function nDay(n, titles) {
    return titles[(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)];
};
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['шанс этого', 'данная информация достоверна на', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

cmd.hear(/^(?:анекдот)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let filter = (text) => { 
			text = text.replace('&quot;', '"');
			text = text.replace('!&quot;', '"');
			text = text.replace('?&quot;', '"');
			text = text.replace(/(&quot;)/ig, '"');
			return text;
		}

    let anek = await getAnek();
    return bot(`держи:\n\n ${filter(anek)}\n\n🤤 >> Понравилось? Напиши команду "Анекдот" ещё раз!`);

function getAnek() {
    return rq('https://www.anekdot.ru/random/anekdot/').then(body => {
        		let res = body.match(/(?:<div class="text">([^]+)<\/div>)/i);
        		res = res[0].split('</div>');
        		return res[0].split(`<div class="text">`).join('').split('<br>').join('\n');
        	});
   
	}
});

cmd.hear(/^(?:Кот,)/i, async (msg, bot) => { 
	msg.user.foolder += 1;
	rq("https://isinkin-bot-api.herokuapp.com/1/talk?q=" + encodeURIComponent(msg.text))
	.then(res => {
		return msg.send(res.text)
	})
});

cmd.hear(/^(?:Время|time)/i, async (msg, bot) => { 
	message.user.foolder += 1;
    await bot(`время сейчас:

⏰ | Москва: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏳ | Азия/Токио: ${new Date().getHours()+6}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏰ | Лондон: ${new Date().getHours()-7}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏳ | Дубаи: ${new Date().getHours()+3}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏰ | Берлин/Мюнхен: ${new Date().getHours()-1}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏳ | Екатеринбург: ${new Date().getHours()+5}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏰ | Баку: ${new Date().getHours()+4}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
});

cmd.hear(/^(?:оцени)/i, async (message, bot) => {
	message.user.foolder += 1;
message.send(`мне кажется, что эта картинка идёт на: ` + utils.random(1, 10) + `/10`);
})

cmd.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	return bot(`ваша дата регистрации в [В]Контакте - ${user.tag}: ${user.regDate}`);
});


cmd.hear(/^(?:реши)\s([0-9]+)\s(\+|\-|\/|\*)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const result = eval(`${message.args[1]} ${message.args[2]} ${message.args[3]}`);
	return bot(`${message.args[1]} ${message.args[2]} ${message.args[3]}=${result}`);
});

cmd.hear(/^(?:wiki|вики)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
    let args = message.text.match(/^(?:wiki|вики)\s?(.*)/i);
    function isEmpty( str ) { if (str.trim() == '') return true; return false; }
        rq("https://ru.wikipedia.org/w/api.php?action=opensearch&search="+encodeURIComponent((args[1] ? args[1] : "ВКонтакте"))+"&meta=siteinfo&rvprop=content&format=json")
        .then((res) => {
            if(isEmpty(res[2][0])) {
                if(isEmpty(res[2][1])) {
                    if(isEmpty(res[2][2])) return message.reply('Статья не полная, либо отсутствует.\n\nСсылка: ' + res[3][0]);
                } else {
                    return message.reply(`Я нашел то, что Вы попросили найти! \n\nСсылка: ${res[3][1]}`);
                }
            } else {
                return message.reply(`Я нашел то, что Вы попросили найти!\n\nСсылка: ${res[3][0]}`);
            }
        });
});

/* |                               | */
/* | А тут уже идут - Чат Менеджер | */
/* V                               V */

cmd.hear(/^(?:!стата)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`
			[🎉] » ID беседы: ${message.chatId}
			[🎉] » Сообщений собрано: ${chats[message.chatId].flood}

			** - Здесь показана вся информация о беседе.`);
	}); 

cmd.hear(/^(?:!правило|!правила)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return bot(`Вот правило беседы:

		 ${chats[message.chatId].rules}`);
	}); 

cmd.hear(/^(?:!новыеправила)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
let argses = message.text.split("!новыеправила ");
			chats[message.chatId].rules = argses[1];
			return message.send(`Новое правило установлено!`);
	});

cmd.hear(/^(?:!роль)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`
Ваша роль в беседе — ${chats[message.chatId].users[message.user.id].group.toString().replace(/0/gi, "Пользователь").replace(/1/gi, "Модератор").replace(/2/gi, "Администратор").replace(/3/gi, "Помощник Создателя Беседы").replace(/4/gi, "Создатель беседы")}`);
	}); 

cmd.hear(/^(?:!снять)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
		let argses = message.text.split("!снять ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 4) return message.send(`❌ Данный пользователь имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 0;
			return message.send('@id' + user.object_id + ', вы теперь пользователь.');
	});

cmd.hear(/^(?:!moder|!модер|!модератор)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
		let argses = message.text.split("!модер ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 1) return message.send(`❌ Данный пользователь уже может рекламировать или даже имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 1;
			return message.send('@id' + user.object_id + ', вы теперь Moder.');
	});

cmd.hear(/^(?:!admin|!админ|!администратор)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
		let argses = message.text.split("!админ ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 2) return message.send(`❌ Данный пользователь уже может рекламировать или даже имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 2;
			return message.send('@id' + user.object_id + ', вы теперь Админ.');
	});

cmd.hear(/^(?:!хелпер|!helper)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 4) return;
		let argses = message.text.split("!хелпер ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 3) return message.send(`❌ Данный пользователь уже может рекламировать или даже имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 3;
			return message.send('@id' + user.object_id + ', вы теперь Помощник Создателя Беседы.');
	});

cmd.hear(/^(?:!unban)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 4) return;
		let argses = message.text.split("!unban ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(!chats[message.chatId].users[user.object_id].isBanned && chats[message.chatId].users[user.object_id].permanently) return message.send('@id' + user.object_id + ' не забанен.')
			chats[message.chatId].users[user.object_id].isBanned = true;
		    chats[message.chatId].users[user.object_id].permanently = false;
		    chats[message.chatId].users[user.object_id].group = 0;
		    chats[message.chatId].users[user.object_id].reason = "";
		    vk.api.call("messages.addChatUser", {chat_id: chatid, user_id: user.object_id})
			return message.send('@id' + user.object_id + ' - разбанен.');
	});

cmd.hear(/^(?:бан)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 4) return;
	    let argses = message.text.split("бан");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			if(user.object_id == 425433519) return message.reply('пошол нах');
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
								if(chats[message.chatId].users[user.object_id].group == 1) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 2) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 3) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 4) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
			if(chats[message.chatId].users[user.object_id].account.ban && chats[message.chatId].users[user.object_id].account.ban) return message.send('@id' + user.object_id + ' уже забанен.')
			chats[message.chatId].users[user.object_id].account.ban = false;
		    chats[message.chatId].users[user.object_id].account.ban = true;
		    chats[message.chatId].users[user.object_id].group = 0;
		    vk.api.call("messages.account.ban", {chat_id: chatid, user_id: user.object_id, owner_id: account.ban});
			return message.send('@id' + user.object_id + ' - забанен навсегда.');
});

cmd.hear(/^(?:!kick|!кик)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;
	if(chats[message.chatId].users[message.user.id].group < 0) return;
		let argses = message.text.split("!kick ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
								if(chats[message.chatId].users[user.object_id].group == 1) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 2) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 3) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 4) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(user.object_id == 425433519) return message.reply('пошол нах');
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id, member_id: chats[message.chatId].removeChatUser});
});

cmd.hear(/^(?:!warn|пред)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let chatid = message.chatId;
	if(chats[message.chatId].users[message.user.id].group < 0) return;
		let argses = message.text.split("Пред");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
					if(chats[message.chatId].users[user.object_id].group == 1) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
		if(chats[message.chatId].users[user.object_id].group == 2) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
		if(chats[message.chatId].users[user.object_id].group == 3) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
		if(chats[message.chatId].users[user.object_id].group == 4) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
			if(user.object_id == 425433519) return message.reply('пошол нах');
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			
			if(chats[message.chatId].users[user.object_id].isBanned == true) {
				return message.send('Пользователь и так уже заблокирован!');
			}
			if(chats[message.chatId].users[user.object_id].isBanned == false) {
									if(chats[message.chatId].users[user.object_id].warns >= 2) {
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id})
		message.send(`@id` + user.object_id + `, был кикнут из беседы за большое количество нарушений.`)
		chats[message.chatId].users[user.object_id].reason = "Ссылки на подозрительные ресурсы";
		chats[message.chatId].users[user.object_id].isBanned = true;
		chats[message.chatId].users[user.object_id].warns = 0;
	}
	if(chats[message.chatId].users[user.object_id].isBanned == false) {
				chats[message.chatId].users[user.object_id].warns += 1
			return message.send('@id' + user.object_id + ', Вы получили предупреждение ' + chats[message.chatId].users[user.object_id].warns + '/3. Впредь ведите себя адекватнее, иначе можете быть кикнуты из чата.');
}}});

cmd.hear(/^(?:Рег|регистрация)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(chats[message.chatId].activate == true) return bot(`Беседа зарегистрирована!`);
	if(!message.isChat) return;
return [chats[message.chatId].activate = true, 
chats[message.chatId].users[message.user].group = 4]
});

cmd.hear(/^(?:!erazessssss)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!chats[message.chatId]) {
		chats[message.chatId] = {
			activate: false,
			name: 0,
			flood: 0,
			rules: "Бла-бла-бла, историк херов",
			title: "",
			banned: [],
			users: {}
		}
	}
	if(!chats[message.chatId].users[message.user.id])
	{
		chats[message.chatId].users[message.user.id] = {
			warns: 0,
			isBanned: false,
			permanently: false,
			group: 0
		}
	}
	if(!settings[message.chatId]) settings[message.chatId] = {};
	if(!chatslist.includes(message.chatId)) chatslist.push(message.chatId);
	if(!base[message.user]) {
		await vk.api.call('users.get', {
			user_ids: message.user.id,
			fields: "photo_max,city,verified,status,domain,photo_id,sex,last_seen"
		}).then(res => {
			base[message.user] = {
				prefix: `${message.user.realname}`
			}
		})

	};
});

cmd.hear(/^(?:изменить название)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(chats[message.chatId].group < 3) return;
	if(!chats[message.chatId].activate) return;
	if(!message.isChat) return;
			let args = message.text.split("Изменить название")
			let chatid = message.chatId;
			chats[message.chatId].title = args[1];
				if(message.args[1].length >= 51) return bot(`максимальная длина ника 50 символов\n\n[😉] » Чтобы убрать блокировку, Вы можете купить привилегию Модератор`);
			vk.api.call("messages.editChat", {chat_id: chatid, title: chats[message.chatId].editChat})
			return message.send(`[id${message.user.id}|${message.user.realname}] || Я успешно изменил название беседы!!!`)
		});

/* |                                | */
/* | А тут уже идут - Админ команды | */
/* V                                V */

cmd.hear(/^(?:раздача)$/i, async (message, bot) => {
	message.user.foolder += 1;
			if(message.user.right < 4) return bot(`доступно с привилегии - Разработчик.`);
	if(giving) return bot(`серьёзно? СЕРЬЁЗНО?! Создавать по 500 постов с раздачей я также не могу. Пойди посмотри канал "Тарелка"`);
	giving = true;
	user.api.wall.post({
		owner_id: -425433519,
		message: `
        🔥 >> Эй! Няшечка, а вот мы проводим раздачу, поэтому, лучше сделай репост и получи 5.000.000₽ на свой баланс! 

		📢 >> Предупреждение:
		⚠ || Перед тем, как репостить, Вы должны написать любое сообщение в ЛС нашему сообществу. Так же необходимо, чтобы у Вас был открыт профиль. 
		(Наш бот для раздачи проверяет репост на вашей стене)

		💥 >> Ограничение по времени:
		⏰ || Внимание! Раздача будет проходить ТОЛЬКО 12 часов.

		UPD: Деньги на баланс будут выданы по окончанию акции.`,
		attachments: 'photo-174226458_456239388'
	}).then((response) => {
		user.api.wall.openComments({
				owner_id: -425433519,
				post_id: response.post_id
			});
		user.api.wall.createComment({
				owner_id: -425433519,
				post_id: response.post_id,
				from_group: 185203195,
				message: '😜 >> Приветствую вас! Здесь, Вы можете комментарировать эту запись, но только... Тебе нельзя использовать маты, ведь за них, мы тебя забаним.\n\n[🤤] Также, тут отвечают админы на ваши вопросы/пожелания/идеи, ну или просто можно с ними пообщаться.'
			});
		setTimeout(() => {
			user.api.call('wall.getReposts', { owner_id: -425433519, post_id: response.post_id, count: 1000 }).then((res) => { 
				res.items.map(x=> {
					if(x.from_id < 0) return;
					let user = users.find(a => a.id === x.from_id);
					if(!user) return; 
					user.balance +=5000000; 
					vk.api.messages.send({ user_id: user.id, message: `Приветик!!!\n\n[id${user.id}|${user.tag}], спасибо за участие в нашей раздаче! Вы получили +${utils.sp(5000000)}₽, поэтому ваш баланс составляет сейчас - ${user.balance}₽! \n\nС уважением,\nВаш виртуальный помощник [id185203195|FoxLight | Игровой Бот №1]` });
					vk.api.messages.send({ user_id: 425433519, message: `[😜] >> [id425433519|Одмэн], я выдал игроку ([id${user.id}|${user.tag}]) - ${utils.sp(5000000)} на баланс.\n\nНа данный момент, его баланс составляет:\n${user.balance}₽`})
				});
			});
			user.api.wall.openComments({
				owner_id: -425433519,
				post_id: response.post_id
			});
			user.api.wall.createComment({
				owner_id: -425433519,
				post_id: response.post_id,
				from_group: 185203195,
				message: 'Ебаттт... Люди, с вами всё норм?\n\nЛадно, ща окончу раздачу.'
			});
			user.api.wall.createComment({
				owner_id: -425433519,
				post_id: response.post_id,
				from_group: 185203195,
				message: 'ВСЁ! Раздача закончена!'
			});
			user.api.wall.closeComments({
				owner_id: -425433519,
				post_id: response.post_id
			});
			giving = false;
		}, 43200000);
	});
});

cmd.hear(/^(?:!Стоп)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.senderId !== 474668811) return;
	await bot(`идёт отключение бота, подождите...`);
	await message.send(`База сохранена на - 10%`);
	await message.send(`База сохранена на - 20%`);
	await message.send(`База сохранена на - 30%`);
	await message.send(`База сохранена на - 40%`);
	await message.send(`База сохранена на - 50%`);
	await message.send(`База сохранена на - 60%`);
	await message.send(`База сохранена на - 70%`);
	await message.send(`База сохранена на - 80%`);
	await message.send(`База сохранена на - 90%`);
	await message.send(`База сохранена на - 100%`);
    await message.send(`Вы успешно отключили бота!`);

	await saveUsers();
	process.exit(-1);
});

cmd.hear(/^(?:запись)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
			if(message.user.right < 4) return bot(`доступно с привилегии - Разработчик.`);
				let photos = ['photo-174226458_456239040',
	'photo-174226458_456239041',
	'photo-174226458_456239042',
	'photo-174226458_456239043',
	'photo-174226458_456239044',
	'photo-174226458_456239045',
	'photo-174226458_456239046',
	'photo-174226458_456239047',
	'photo-174226458_456239048',
	'photo-174226458_456239049',
	'photo-174226458_456239050',
	'photo-174226458_456239051',
	'photo-174226458_456239052']
	user.api.wall.post({
		owner_id: -425433519,
		message: `${message.args[1]}`,
		attachments: `${utils.pick(atts)}`
	}).then((response) => {
		user.api.wall.closeComments({
			owner_id: -425433519,
			post_id: response.post_id
		});
	});
});

cmd.hear(/^(?:промокодд)$/i, async (message, bot) => {
	if(message.user.right < 4) return bot(`доступно с привилегии - Разработчик.`);
	let answers = ['Опа! Новые промокод! Быстрее активируй его :3',
	'Быстрее активируй промо, а то его другие разберут!',
	'Держи промокод, пока его другие не разобрали',
	'Что насчёт нового прома?)',
	'Ыыыыы, новый промокод',
	'Че не ставишь лайки?)',
	'КРЯЯЯЯЯЯ!!! Новый промокод ниже ↓↓↓']
	let rullka = ['За 50 лайков, сделаем раздачу денег',
	'Го за 20 лайков, я сделаю новое КРУТОЕ обновление?)',
	'Набёрем 10 лайков, для следующего промо?']
				var result       = '';
		        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
		        var max_position = words.length - 1;
		            for( i = 0; i < 8; ++i ) {
		                position = Math.floor ( Math.random() * max_position );
		                result = result + words.substring(position, position + 1);
		            }
		if(!promo[result]){
		            	promo[result] = {
		            		balance: 500000000,
		            		activ: 75,
		            		users: {}
		            	}
		}else{
		}
			user.api.wall.post({
		owner_id: -425433519,
		message: `[☺] | ${utils.pick(answers)}

		[📝] >> Промокод ${result}
		[🗝] >> Активаций в этом промокоде - 75
		[💰] >> Валюты в этом промокоде - 500.000.000₽ 

		[🤴] || ${utils.pick(rullka)}`,
		attachments: 'photo-174226458_456239378'
	}).then((response) => {
		user.api.wall.closeComments({
			owner_id: -425433519,
			post_id: response.post_id
		});
		});
});

cmd.hear(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
 			if(message.user.right < 4) return;
 			 users.filter(x=> x.id !== 1).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`}); 
 }); 
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `${message.args[1]}` });
        }
        return message.send(`💬 || Я успешно сделал рассылку! Посмотрите, как будет видно другим:\n\n[id185203195|FoxLight | Игровой Бот №1], Сегодня в ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n"${message.args[1]}"`);
 
})

cmd.hear(/^(?:пострассылка)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
 			if(message.user.right < 4) return;
 			 users.filter(x=> x.id !== 1).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `[👮] >> Быстро посмотрел запись:`, attachment: `${message.args[1]}`}); 
 }); 
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `[👮] >> Быстро посмотрел запись:`,
              attachment: `${message.args[1]}` });
        }
        return message.send(`💬 || Я успешно сделал рассылку!`);
 
})

cmd.hear(/^(?:Смс)\s([0-9]+)\s([^]+)$/i, async (message, bot) => { 
	message.user.foolder += 1;
		if(message.user.numberss == false) return bot(`доступно при номере телефона!.\nЧтобы приобрести номер, напишите: Купить номер`);

const user = await users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`такого игрока не существует. Вероятно, вы ошиблись.`); 

vk.api.messages.send({ user_id: user.id, message: `Вам пришло сообщение!` }); 

vk.api.messages.send({ user_id: user.id, message: `Сообщение открывается...` }); 

vk.api.messages.send({ user_id: user.id, message: `
<- &#4448;Administrator&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
❜${message.args[2]}❜` }); 

message.user.balance -= 134;
	return message.send(`Сообщение успешно отправлено! С вас списано - 134₽`);
});

cmd.hear(/^(?:вбаланс)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		if(message.args[2] <= 0) return;
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.balance += message.args[2];
	return bot(`Успешно! Вы накрутили пользователю (${user.tag}) -> ${utils.sp(message.args[2])}₽`);
}
	});

cmd.hear(/^(?:збаланс)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.balance = 5000;
	return bot(`Успешно! Вы убрали весь баланс у пользователя -> (${user.tag})`);
}
	});

cmd.hear(/^(?:збит)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.btc = 0;
	return bot(`Успешно! Вы убрали все БитКоины у пользователя -> (${user.tag})`);
}
	});

cmd.hear(/^(?:вбит)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	let amount = parserInt(message.args[2]); 
		if(message.args[2] <= 0) return;
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.btc += message.args[2];
	return bot(`Успешно! Вы накрутили пользователю (${user.tag}) -> ${utils.sp(message.args[2])}$`);
}
	});

cmd.hear(/^(?:бан)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.ban = true;
		vk.api.messages.send({ 
			user_id: user.id, 
			attachment: 'photo-174226458_456239146',
			message: `
[😵] >> [id${user.id}|${user.tag}], к сожалению, Вы забанены. 
[💣] || Вас забанил: [id425433519|+ АДМИНИСТРАТОР +] :с
[⚠] || Вы забанены с ${new Date().getHours()}:${new Date().getMinutes()} - НАВЕЧНО` }); 

	return bot(`Вы забанили пользователя (${user.tag}) - навечно.`);
}
	});


cmd.hear(/^(?:разбан)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Администратор.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.ban = false;
		vk.api.messages.send({ 
			user_id: user.id, 
			attachment: 'photo-174226458_456239145',
			message: `
[😜] >> [id${user.id}|${user.tag}], ВЫ РАЗБАНЕНЫ!!!! :D
[❤] || Вас разабанил: [id425433519|+ АДМИНИСТРАТОР +] ` }); 

	return bot(`Вы разбанили пользователя -> (${user.tag})`);
}
	});

function getRandomElement(array) { 
return array[getRandomInt(array.length - 1)]; 
}

function getRandomInt(x, y) { 
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x); 
}

function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
Array.prototype.random = function() {  
	return this[Math.floor(this.length * Math.random())];
}

	var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));


		setInterval(() => {
			fs.writeFileSync("./base/promo.json", JSON.stringify(promo, null, "\t"));
			fs.writeFileSync("./base/clans.json", JSON.stringify(clans, null, "\t"));
			fs.writeFileSync("./base/botinfo.json", JSON.stringify(botinfo, null, "\t"));
		}, 15000);



	Array.prototype.random = function() {  
		return this[Math.floor(this.length * Math.random())];
	}

	function rand(min, max) {
		return Math.round(Math.random() * (max - min)) + min
	}

		function spaces(string) {
		if (typeof string !== "string") string = string.toString();
		return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
	};
		setTimeout(() => {
	let answers = ['Опа! Новые промокод! Быстрее активируй его :3',
	'Быстрее активируй промо, а то его другие разберут!',
	'Держи промокод, пока его другие не разобрали',
	'Что насчёт нового прома?)',
	'Ыыыыы, новый промокод',
	'Че не ставишь лайки?)',
	'КРЯЯЯЯЯЯ!!! Новый промокод ниже ↓↓↓']
	let rullka = ['За 20 лайков, сделаем раздачу денег',
	'Го за 50 лайков, я сделаю новое КРУТОЕ обновление?)',
	'Набёрем 10 лайков, для следующего промо?']
				var result       = '';
		        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
		        var max_position = words.length - 1;
		            for( i = 0; i < 8; ++i ) {
		                position = Math.floor ( Math.random() * max_position );
		                result = result + words.substring(position, position + 1);
		            }
		if(!promo[result]){
		            	promo[result] = {
		            		balance: 500000000,
		            		activ: 75,
		            		users: {}
		            	}
		}else{
		}
			user.api.wall.post({
		owner_id: -174226458,
		message: `[☺] | ${utils.pick(answers)}

		[📝] >> Промокод ${result}
		[🗝] >> Активаций в этом промокоде - 75
		[💰] >> Валюты в этом промокоде - 500.000.000₽ 

		[🤴] || ${utils.pick(rullka)}`,
		attachments: 'photo-174226458_456239378'
	}).then((response) => {
		user.api.wall.closeComments({
			owner_id: -174226458,
			post_id: response.post_id
		});
		});
	}, 86400000);

setInterval(() => {
	let fs = require("fs");
	fs.writeFileSync("./base.json", JSON.stringify(base, null, "\t"));
	fs.writeFileSync("./settings.json", JSON.stringify(settings, null, "\t"));
	fs.writeFileSync("./chats.json", JSON.stringify(chats, null, "\t"));
}, 1000)


setInterval(() => {
let chatid = 0;
let fs = require("fs");
for (key in base)
{
	if(chats.users[key].isBanned)
	{
		chats.users[key].isBanned == false
		chats.users[key].reason == ""
	}
}}, 604800000);

function Manager(access_token) {
	vk.longpoll.on('message', async function(message) {
	let chatid = message.chat;
	if(message.hasFlag('outbox')) return;
		vk.longpoll.start();
	if(!chats[message.chatId]) {
		chats[message.chatId] = {
			activate: false,
			name: 0,
			flood: 0,
			rules: "Бла-бла-бла, историк херов",
			title: "",
			banned: [],
			users: {}
		}
	}
	if(!chats[message.chatId].users[message.user])
	{
		chats[message.chatId].users[message.user] = {
			warns: 0,
			isBanned: false,
			permanently: false,
			group: 0
		}
	}
	if(!settings[message.chatId]) settings[message.chatId] = {};
	if(!chatslist.includes(message.chatId)) chatslist.push(message.chatId);
	if(!base[message.user]) {
		await vk.api.call('users.get', {
			user_ids: message.user,
			fields: "photo_max,city,verified,status,domain,photo_id,sex,last_seen"
		}).then(res => {
			base[message.user] = {
				prefix: `${res[0].first_name}`
			}
		})
	};
	setInterval(() => {
		chatslist.map(chatid => {
			vk.api.call("messages.getChat", {chat_id: chatid})
			.then((res) => {
				if(res.title !== settings[message.chatid].title) {
				vk.api.call("messages.send", {chat_id: chatid, message: ``})
				vk.api.call("messages.editChat", {chat_id: chatid, title: chats[message.chatid].title})}
			})
		})
	}, 15000);
	var args = message.text.split(" ");
})}
