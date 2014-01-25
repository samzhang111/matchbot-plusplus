=begin
# This is an example data structure that will be passed into similarity:
one = {
	:freqs => {
		"sea"=> 1,
		"salt"=> 1,
		"I"=> 1,
		"the"=> 1,
		"love"=> 1,
		"chocolate"=> 1
	},
	:avg_len => 0,
	:total_words => 0
}
=end

def similarity(one, two)
	score = 0.0

	words = one[:freqs].keys

	words.each do |word, value|
		if two[:freqs].has_key? word
			score += [value, two[:freqs][word]].min
		end
	end

	# normalize score by higher total_words
	# if we don't do this, people who talk A LOT will
	# tend to have higher scores
	score /= [one[:total_words], two[:total_words]].max


	# penalize pairs with different average sentence lengths
	smaller = [one[:avg_len], two[:avg_len]].min
	larger = [one[:avg_len], two[:avg_len]].max

	score *= smaller/larger

	score
end