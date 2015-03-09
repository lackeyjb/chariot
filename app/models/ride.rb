class Ride < ActiveRecord::Base

  geocoded_by :start_address
  after_validation :geocode


end
