# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Create a logger
Rails.logger =  Logger.new("${Rails.root}/log/mylog.log")

# Initialize the Rails application.
Matchbot::Application.initialize!
