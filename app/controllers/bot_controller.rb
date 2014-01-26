include BotDaemon
class BotController < ApplicationController
    def say
        if params.key?(:msg) 
            response = BotDaemon.send(params[:msg], 0)
            render :text => response
        else 
            render :text => "merp"
        end
    end
end
