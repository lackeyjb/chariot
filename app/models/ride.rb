class Ride < ActiveRecord::Base
  belongs_to :user, dependent: :destroy

  reverse_geocoded_by :latitude, :longitude,
    address: :start_address
  after_validation :reverse_geocode

  def self.lat_long_to_s
    "#{ latitude }, #{ longitude }"
  end

  # def self.nearby_start_and_end(ride) 
  #   start       = Ride.near([ride.latitude, ride.longitude])
  #   destination = Ride.near([ride.end_latitude, ride.end_longitude])
  #   { 'nearby_start' => self.nearby_format(start),
  #     'nearby_end'   => 'blob'
  #   }
  # end

  # def self.nearby_format(rides)
  #   format = []
  #   rides.each do | ride |
  #     gon = ride
  #     gon['email'] = ride.user.email
                     # User.find(ride.user).email
  #     format << gon
  #   end
  #   put format
  #   format
  # end
  
# end

  # @rides = Ride.last
  def self.nearby_start(ride) 
    start       = Ride.near([ride.latitude, ride.longitude])
    destination = Ride.near([ride.end_latitude, ride.end_longitude])
    {
      start:      self.nearby_format(start),
      detination: self.nearby_format(destination)
    }
  end

  def self.nearby_format(rides)
    format = []
    rides.each do | ride |
      gon = {
        'ride'  => ride,
        'email' => ride.user.to_json    #User.find(1).email
#    

      }
      format << gon
    end
    format
  end

end