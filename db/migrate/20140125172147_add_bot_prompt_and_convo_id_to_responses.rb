class AddBotPromptAndConvoIdToResponses < ActiveRecord::Migration
  def change
    add_column :responses, :bot_prompt, :string
    add_column :responses, :convo_id, :integer
  end
end
