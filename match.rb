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
	:nonstoplist_freqs => {
		"lol" => 1,
		"omg" => 2
	},
	:avg_len => 0,
	:total_words => 0
}



similarity(one, two) returns a result object

result = {
	:score => 0.0 #(0 to 1)
	:matchUser => userName
}
=end

def similarity(one, two)

	score = 0.0
        score2 = 0.0

	words = one[:freqs].keys
	words2 = two[:freqs].keys

	words.each do |word, value|
		if two[:freqs].has_key? word
			score += [value, two[:freqs][word]].min
		end
	end

        #normalize unique word count by dividing by the total number of words 
        unique1 = words.length().to_f / one[:total_words]
        unique2 = words.length().to_f / two[:total_words]

        score2 = (unique1 - unique2) ** 2

	# normalize score by higher total_words
	# if we don't do this, people who talk A LOT will
	# tend to have higher scores
	score /= [one[:total_words], two[:total_words]].max


	# penalize pairs with different average sentence lengths
	smaller = [one[:avg_len], two[:avg_len]].min
	larger = [one[:avg_len], two[:avg_len]].max

	score *= smaller/larger
        
        #now penalize pairs with differing average unique number of words
	smaller = [unique1, unique2].min
	larger = [unique1, unique2].max

	score *= smaller/larger
        
	return score
end
