require 'dbus'
require 'unpickle'

bus = DBus::SessionBus.instance
bot_service = bus.service("com.chatbot.Chatbot")
bot = bot_service.object("/Chatbot")
bot.introspect


def chat(input, session_id)
    return bot.chat(input, session_id)
end
