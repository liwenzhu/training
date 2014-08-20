'use strict';

var bosonnlp = require("bosonnlp");

var nlp = new bosonnlp.BosonNLP("59G4ZvQp.2193.0YmDde8uiv3e");

var text = "近日，上海地铁一乘客晕倒，引起前后3节车厢乘客惊慌逃散，引人关注。近期，国内多地都出现类似逃散事件，且因乘客反应过度造成次生灾害发生。乘客反应过度，折射出哪些问题？避免恐慌事件发生，你有何建议？请留言，或登陆腾讯微信“中国之声”语音留言。调查结果今日晚高峰19：45揭晓。";
nlp.ner(text, function(result){
	result = result.slice(1, result.length - 1);
	// console.log(result);
	result = JSON.parse(result);
	// console.log("word:", result.word);
	var entity;
	for (var i = 0; i < result.entity.length; i++) {
		entity = result.entity[i];
		console.log(result.word.slice(entity[0], entity[1]).join(''), entity[2]);
	}
	process.exit(0);
});