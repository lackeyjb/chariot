class RenameColumnNameInRides < ActiveRecord::Migration
  def change
    rename_column :rides, :rider, :driver
  end
end
