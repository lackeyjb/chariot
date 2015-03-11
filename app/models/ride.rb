class Ride < ActiveRecord::Base

  belongs_to :user, dependent: :destroy

  


end
