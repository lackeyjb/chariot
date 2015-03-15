class AddEndLatitudeAndEndLongitudeToRides < ActiveRecord::Migration
  def change
    add_column :rides, :end_latitude, :float
    add_column :rides, :end_longitude, :float
  end
end
