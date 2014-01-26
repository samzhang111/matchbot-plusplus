require 'dbus'
require 'unpickle'

connected = false
$bot = 0

def intialize()
    system("python2.7 matchbot.py")
end

def chat(input, session_id)
    if connected != true
      return false
    end
    return bot.chat(input, session_id)
end

def connect()
    bus = DBus::SessionBus.instance
    bot_service = bus.service("com.chatbot.Chatbot")
    bot = bot_service.object("/Chatbot")
    bot.introspect
    $bot = bot
    connected = true
end

def get_answers(session_id)
    if connected != true
      return false
    end
    bot = $bot
 
    answers = bot.get_answers(3)
    answers = answers[0]
    answers = answers.to_s()

    answers = answers.split("\n",-1)
    pairs = Hash.new()

    answers.each do |line|
      q = line.split("||")[0]
      a = line.split("||")[1]
      pairs[q] = a
    end
    return answers
end

  
=begin
connect()
bot = $bot
puts "enter something to say"
for i in 0 .. 10
  puts "> "
  input = gets.chomp()
  response = bot.chat(input, 3)

  response = response[0]
  puts response
end
=begin
answers = bot.get_answers(3)
answers = answers[0]
answers = answers.to_s()

answers = answers.split("\n",-1)
pairs = Hash.new()

answers.each do |line|
  q = line.split("||")[0]
  a = line.split("||")[1]
  pairs[q] = a
end

puts "\n\n"

pairs.each do |key, value|
  puts key
  puts value
end
=end

