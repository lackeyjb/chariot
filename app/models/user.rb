class User < ActiveRecord::Base
  has_many :rides
  before_save { email.downcase! }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(?:\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :email, presence: true, length: { maximum: 254 },
            format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }

  has_secure_password

  def as_json(options={})
    options[:except] ||= [:password_digest, :created_at, :updated_at]
    super(options)
  end

end