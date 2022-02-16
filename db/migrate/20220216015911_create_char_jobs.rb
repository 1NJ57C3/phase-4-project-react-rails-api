class CreateCharJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :char_jobs do |t|

      t.references :character, null: false, foreign_key: true
      t.references :job, null: false, foreign_key: true

      t.timestamps
    end
  end
end
