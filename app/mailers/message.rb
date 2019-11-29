class Message include ActiveModel::Model
 
  attr_accessor :name, :email, :content
 
  validates :name, presence: true, length: { maximum: 255 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }
  validates :content, presence: true, length: { maximum: 400 }
end