class AddRiderToRides < ActiveRecord::Migration
  def change
    add_column :rides, :rider, :boolean
  end
end
