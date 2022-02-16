class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :job_name
      t.integer :atk
      t.integer :acc
      t.integer :vit
      t.integer :luk

      t.timestamps
    end
  end
end
