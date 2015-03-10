class Ride < ActiveRecord::Base

  belongs_to :user, dependent: :destroy

  geocoded_by :start_address
  after_validation :geocode


end
