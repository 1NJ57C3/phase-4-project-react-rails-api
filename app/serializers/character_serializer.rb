class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :char_name, :job, :atk, :acc, :vit, :luk, :def

  has_many :equipment
end
