class Ride < ActiveRecord::Base
  belongs_to :user, dependent: :destroy

  reverse_geocoded_by :latitude, :longitude,
    address: :start_address
  after_validation :reverse_geocode

  def self.lat_long_to_s
    "#{ latitude }, #{ longitude }"
  end
end
