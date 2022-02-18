class EquipmentController < ApplicationController
    def index
        render json: Equipment.all
    end

    # ? Stretch Goal: Equipment Viewer
    def show
        render json: Equipment.find(params[:id])
    end
end
