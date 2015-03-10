require 'jwt'

module AuthToken
  def self.issue_token(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base, 
               claims: { exp: 86400 })
  end

  def self.valid?
    begin
      JWT.decode(token, Rails.application.secrets.secret_key_base)
    rescue  
      false
    end
  end
end
  
  