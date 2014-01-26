namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    make_users
  end
end

def make_users
  99.times do |n|
    email = "example-#{n+1}@example.com"
    freqs = "{"the":8,"night":5,"lol":1}
    avg_length = 20
    total_words = 500
  end
end