class User < ActiveRecord::Base

  before_save { self.email = email.downcase }
  
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[A-Za-z\d\-.]+\.[A-Za-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX } ,
            uniqueness: {case_sensitive: false};
  
  validates :freqs, exclusion: {in: ["{}"]}
end
