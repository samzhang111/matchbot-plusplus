include BotClient 
class BotController < ApplicationController
    def say
        if params.key?(:msg) 
            response = BotClient.send(params[:msg], 0)
            render :text => response
        else 
            render :text => "merp"
        end
    end
end
