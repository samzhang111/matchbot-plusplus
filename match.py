one = {
	freqs: {
		"sea": 1,
		"salt": 1,
		"I": 1,
		"the": 1,
		"love": 1,
		"chocolate": 1
	},
	avg_len: 0,
	total_words: 0
}

two = {
	freqs: {
		"sea": 1,
		"salt": 1,
		"I": 1,
		"the": 1,
		"love": 1,
		"chocolate": 1
	},
	avg_len: 0,
	total_words: 0
}

class User:
	def __init__(self, freqs, avg_len):
		self.freqs = freqs
		self.avg_len = avg_len

	def get_total_words(self):
		return sum(self.freqs.values())

	def get_words(self):
		return self.freqs.keys()

def similarity(one, two):
"""
	Given the statistics for two people, calculate their similarity metric.
	Inputs ('one', 'two') are objects 
]
"""
	score = 0.0
	words = one['freqs'].keys()
	for word in words:
		if word in two['freqs']:
			score += min(one['freqs'][word], two['freqs'][word])

	# normalize score by higher total_words
	# if we don't do this, people who talk A LOT will
	# tend to have higher scores

	score /= max(one['total_words'], two['total_words'])

	# reward pairs with similar lengths
	small = min(one['avg_len'], two['avg_len'])
	large = max(one['avg_len'], two['avg_len'])
	score *= min/max

	return score