class AddUserToUsers < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
  end
end
