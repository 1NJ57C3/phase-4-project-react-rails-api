class ApplicationController < ActionController::API
    before_action :authorize
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_404
    rescue_from ActiveRecord::RecordInvalid, with: :render_422

  private
  
    def authorize
      User.find_by(id: session[:user_id])
      render json: {errors: ["Not Authorized"]}, status: 401 unless session.include? :user_id
    end
  
    def render_404 e
      render json: { error: "#{e.model} not found" }, status: 404
    end

    def render_422 (e)
      render json: { errors: e.record.errors.full_messages }, status: 422
    end  
end