class Response < ActiveRecord::Base
  belongs_to :user     , :inverse_of => :responses
  validates_presence_of :content #todo: validate user?
end
