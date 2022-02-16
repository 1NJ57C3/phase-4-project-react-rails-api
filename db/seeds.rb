# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Seeding Protocol Initialized. 🌱"

puts "💻 Generating User(s)... 💻"
u1 = User.create!(username: 'user1', password: 'password')
u2 = User.create!(username: 'user2', password: 'password')
u3 = User.create!(username: 'user3', password: 'password')

puts "💪🔪🔥 Generating Jobs... 💪🔪🔥"
j1 = Job.create!(job_name: 'warrior', atk:10, acc:8, vit:8, luk:4)
j2 = Job.create!(job_name: 'thief', atk:8, acc:10, vit:6, luk:6)
j3 = Job.create!(job_name: 'wizard', atk:10, acc:10, vit:5, luk:5)

puts "🧙 Generating Character(s)... 🧙"
c1 = Character.create!(user: u1, char_name: 'Injustice', job: j2.job_name, atk:13, acc:12, vit:10, luk:4, def:0)
c2 = Character.create!(user: u2, char_name: 'The Poon Tangler', job: j2.job_name, atk:13, acc:12, vit:10, luk:4, def:0)
c3 = Character.create!(user: u3, char_name: 'Lint Licker', job: j1.job_name, atk:13, acc:12, vit:10, luk:4, def:0)
c4 = Character.create!(user: u3, char_name: 'BillyJiggles', job: j3.job_name, atk:13, acc:12, vit:10, luk:4, def:0)
c5 = Character.create!(user: u3, char_name: 'The Layruponya', job: j1.job_name, atk:13, acc:12, vit:10, luk:4, def:0)

puts "⚔🛡 Generating Equipment... 🛡⚔"
w1 = Equipment.create!(item_name:'rusty spork', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w2 = Equipment.create!(item_name:'rusty spoon', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w3 = Equipment.create!(item_name:'rusty fork', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w4 = Equipment.create!(item_name:'rusty butter knife', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w5 = Equipment.create!(item_name:'rusty chopsticks', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
a1 = Equipment.create!(item_name:'tattered shirt', stat: 'def', mod: 4, is_positive: true, item_type:'s_armor')
a2 = Equipment.create!(item_name:'torn panties', stat: 'def', mod: 4, is_positive: true, item_type:'s_armor')
a3 = Equipment.create!(item_name:'worn trousers', stat: 'def', mod: 4, is_positive: true, item_type:'s_armor')
a4 = Equipment.create!(item_name:'ripped undershirt', stat: 'def', mod: 4, is_positive: true, item_type:'s_armor')
a5 = Equipment.create!(item_name:'rusty breastplate', stat: 'def', mod: 4, is_positive: true, item_type:'s_armor')

puts "🗡🏹 Distributing Starter Gear... 🏹🗡"
c1.character_equipment.create(equipment_id:(Equipment.all.sample.id))
c2.character_equipment.create(equipment_id:(Equipment.all.sample.id))
c3.character_equipment.create(equipment_id:(Equipment.all.sample.id))
c4.character_equipment.create(equipment_id:(Equipment.all.sample.id))
c5.character_equipment.create(equipment_id:(Equipment.all.sample.id))

puts "🌳 Seeding Protocol Complete. 🌳"