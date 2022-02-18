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
c1 = Character.create!(user: u1, char_name: 'Injustice', job: j2.job_name, atk:13, acc:12, vit:10, luk:4, arm:0)
c2 = Character.create!(user: u2, char_name: 'The Poon Tangler', job: j2.job_name, atk:13, acc:12, vit:10, luk:4, arm:0)
c3 = Character.create!(user: u3, char_name: 'Lint Licker', job: j1.job_name, atk:13, acc:12, vit:10, luk:4, arm:0)
c4 = Character.create!(user: u3, char_name: 'BillyJiggles', job: j3.job_name, atk:13, acc:12, vit:10, luk:4, arm:0)
c5 = Character.create!(user: u3, char_name: 'The Layruponya', job: j1.job_name, atk:13, acc:12, vit:10, luk:4, arm:0)

puts "⚔🛡 Generating Equipment... 🛡⚔"
w1 = Equipment.create!(item_name:'rusty spork', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w2 = Equipment.create!(item_name:'rusty spoon', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w3 = Equipment.create!(item_name:'rusty fork', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w4 = Equipment.create!(item_name:'rusty butter knife', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w5 = Equipment.create!(item_name:'rusty chopsticks', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w6 = Equipment.create!(item_name:'wet towel', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w7 = Equipment.create!(item_name:'moldy guitar', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
w8 = Equipment.create!(item_name:'broken hockey stick', stat: 'atk', mod: 1, is_positive: true, item_type:'s_weapon')
Equipment.create!(item_name:'detached peg leg', stat: 'atk', mod: 3, is_positive: true, item_type:'m_weapon')
Equipment.create!(item_name:'floppy computer gelpad', stat: 'atk', mod: 3, is_positive: true, item_type:'m_weapon')
Equipment.create!(item_name:'Jerry\'s violin', stat: 'atk', mod: 3, is_positive: true, item_type:'m_weapon')
Equipment.create!(item_name:'anime waifu body pillow', stat: 'atk', mod: 3, is_positive: true, item_type:'m_weapon')
Equipment.create!(item_name:'$500 Mechanical Keyboard with Black Switches', stat: 'atk', mod: 5, is_positive: true, item_type:'r_weapon')
Equipment.create!(item_name:'Dual-Wield Credit Cards', stat: 'atk', mod: 5, is_positive: true, item_type:'r_weapon')

a1 = Equipment.create!(item_name:'tattered shirt', stat: 'arm', mod: 4, is_positive: true, item_type:'s_armor')
a2 = Equipment.create!(item_name:'torn panties', stat: 'arm', mod: 4, is_positive: true, item_type:'s_armor')
a3 = Equipment.create!(item_name:'worn trousers', stat: 'arm', mod: 4, is_positive: true, item_type:'s_armor')
a4 = Equipment.create!(item_name:'ripped undershirt', stat: 'arm', mod: 4, is_positive: true, item_type:'s_armor')
a5 = Equipment.create!(item_name:'rusty breastplate', stat: 'arm', mod: 4, is_positive: true, item_type:'s_armor')
a6 = Equipment.create!(item_name:'Daniel\'s Mustache', stat: 'arm', mod: 4, is_positive: true, item_type:'s_armor')
a7 = Equipment.create!(item_name:'pirate hat', stat: 'arm', mod: 4, is_positive: true, item_type:'s_armor')
a8 = Equipment.create!(item_name:'knee pads', stat: 'arm', mod: 4, is_positive: true, item_type:'s_armor')
Equipment.create!(item_name:'body harness', stat: 'arm', mod: 7, is_positive: true, item_type:'m_armor')
Equipment.create!(item_name:'Razer Gaming Headset with Cat Ears', stat: 'arm', mod: 7, is_positive: true, item_type:'m_armor')
Equipment.create!(item_name:'size 14 Air Jordans', stat: 'arm', mod: 7, is_positive: true, item_type:'m_armor')
Equipment.create!(item_name:'Hipster Beard', stat: 'arm', mod: 7, is_positive: true, item_type:'m_armor')
Equipment.create!(item_name:'Robe and Wizard Hat', stat: 'arm', mod: 15, is_positive: true, item_type:'r_armor')
Equipment.create!(item_name:'I paid $17,000 to study Software Engineering at Flatiron and all I got was this stupid T-shirt', stat: 'arm', mod: 15, is_positive: true, item_type:'r_armor')

puts "🗡🏹 Distributing Starter Gear... 🏹🗡"
c1.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_weapon').sample.id))
c1.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_armor').sample.id))
c2.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_weapon').sample.id))
c2.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_armor').sample.id))
c3.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_weapon').sample.id))
c3.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_armor').sample.id))
c4.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_weapon').sample.id))
c4.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_armor').sample.id))
c5.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_weapon').sample.id))
c5.character_equipment.create(equipment_id:(Equipment.where(item_type: 's_armor').sample.id))


puts "🌳 Seeding Protocol Complete. 🌳"