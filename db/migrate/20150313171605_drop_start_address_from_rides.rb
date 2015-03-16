class DropStartAddressFromRides < ActiveRecord::Migration
  def change
    remove_column :rides, :start_address
    remove_column :rides, :end_address
    add_column    :rides, :start_location, :float, array: true
    add_column    :rides, :end_location,   :float, array: true
  end
end
