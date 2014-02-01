require 'xmlrpc/client'

module BotClient 
    @bot = XMLRPC::Client.new("localhost", "/", 8000)
    
    def self.send(input, session_id)
        @bot.call("respond", input, session_id)
    end

end
      
