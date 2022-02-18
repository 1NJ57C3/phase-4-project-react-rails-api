class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :char_name, :job, :atk, :acc, :vit, :luk, :arm, :u_atk, :u_arm

  has_many :equipment
end
