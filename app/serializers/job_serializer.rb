class JobSerializer < ActiveModel::Serializer
  attributes :id, :job_name, :atk, :acc, :vit, :luk
end
