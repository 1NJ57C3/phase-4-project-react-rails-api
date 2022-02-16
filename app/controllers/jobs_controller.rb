class JobsController < ApplicationController
    def index
        render json: Jobs.all
    end

    def show
        render json: Jobs.find(params[:id])
    end
end
