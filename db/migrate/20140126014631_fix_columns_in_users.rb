class FixColumnsInUsers < ActiveRecord::Migration
  def change
      add_column :users, :avg_length, :integer
  end
end
