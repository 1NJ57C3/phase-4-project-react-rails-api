class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :char_name, :job, :atk, :acc, :vit, :luk, :arm

  has_many :equipment
end
