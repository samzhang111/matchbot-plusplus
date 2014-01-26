class BotController < ApplicationController
    def say
        render :text => "Huh?"
    end
end
