
class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user #todo: where do we want to redirect?
    else
      render 'new'
    end
  end
  def destroy

  end
  def show
    @user = User.find(params[:id])
    @matches = find_matches(@user)
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:email, :freqs, :avg_length, :total_words)
  end

  def find_matches(user)
    matches = []
    @users = User.all
    @users.each do |u|
      if u == user
          next
      end
      likeness = similarity(user,u)   # returns float in [0,1]
      snippet = "default snippet"
      email = (u.email).split('@')[0]

      if matches.size >= 3
        if matches[0][1] < likeness
          matches[0]=[u.id, likeness*100, email, snippet]
        elsif matches[1][1] < likeness
          matches[1]=[u.id, likeness*100, email, snippet]
        elsif matches[2][1] < likeness
          matches[3]=[u.id, likeness*100, email, snippet]
        end
      elsif matches.size < 3
        matches.append([u.id, likeness*100,email,snippet])
      end
    end
  
    matches

  end

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
    one_freqs = JSON[one.freqs]
    two_freqs = JSON[two.freqs]
    words = one_freqs.keys

    words.each do |word, value|
      if two_freqs.has_key? word
        score += [one_freqs[word], two_freqs[word] ].min
      end
    end
    # puts one_freqs, two_freqs
    # normalize score by higher total_words
    # if we don't do this, people who talk A LOT will
    # tend to have higher scores
    score /= [one.total_words, two.total_words].max


    # penalize pairs with different average sentence lengths
    smaller = [one.avg_length, two.avg_length].min
    larger = [one.avg_length, two.avg_length].max

    score *= smaller/larger

  end

end
