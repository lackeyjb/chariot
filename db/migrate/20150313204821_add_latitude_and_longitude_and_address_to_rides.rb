class AddLatitudeAndLongitudeAndAddressToRides < ActiveRecord::Migration
  def change
    add_column :rides, :latitude, :float
    add_column :rides, :longitude, :float
    add_column :rides, :address, :string
  end
end
