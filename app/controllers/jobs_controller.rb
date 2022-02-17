class JobsController < ApplicationController
    def index
        render json: Job.all
    end

    def show
        render json: Job.find_by(job_name: params[:id])
    end
end
