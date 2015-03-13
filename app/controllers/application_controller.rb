class ApplicationController < ActionController::Base
  rescue_from ActiveRecord::RecordNotFound,  with: :record_not_found
  rescue_from ActiveRecord::RecordNotUnique, with: :unprocessable_entity

  # protect_from_forgery with: :null_session
  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

  include SessionsHelper

  private

  def record_not_found(error)
    render json: { error: error.message }, status: :not_found
  end

  def unprocessable_entity(error)
    render json: { error: error.message }, status: :unprocessable_entity
  end
end
