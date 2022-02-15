class ApplicationController < ActionController::API
    before_action :authorize
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :response_unprocessable_entity
    
  
  
  private  
  
    def authorize
      User.find_by(id: session[:user_id])     
      render json: {errors: ["Not Authorized"]}, status: 401 unless session.include? :user_id
    end
  
    def response_unprocessable_entity(e)
      render json: {errors: e.record.errors.full_messages},status: 422
    end  
end
