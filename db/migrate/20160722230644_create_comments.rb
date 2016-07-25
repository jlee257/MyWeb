class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :name,       null: false
      t.string :contact
      t.string :ip_address, null: false
      t.string :body,       null: false

      t.timestamps
    end
  end
end
