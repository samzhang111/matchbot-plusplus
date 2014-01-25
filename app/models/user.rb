class User < ActiveRecord::Base
  has_many :responses, :dependent => :destroy
  accepts_nested_attributes_for :responses#, :reject_if => lambda { |a| a[:content].blank? }, :allow_destroy => true

  before_save { self.email = email.downcase }

  validates :username,  presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX } ,
            uniqueness: {case_sensitive: false};

  validates_associated :responses, presence: true
end
