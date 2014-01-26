class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :nonstoplist_freq, :text
    remove_column :users, :nonstoplist_freqs
  end
end
