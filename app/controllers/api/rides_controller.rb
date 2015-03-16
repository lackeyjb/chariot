 class Api::RidesController < ApplicationController
  before_action :check_permission
  before_action :set_ride, only: [:show, :update, :destroy]
   
  # GET /rides
  # GET /rides.json
  def index
    start_location = current_user.rides.last.start_location
    end_location   = current_user.rides.last.end_location   
    rides          = Ride.close_to(current_user, start_location, end_location)
    render json: rides
  end

  # GET /rides/1
  # GET /rides/1.json
  def show
    @ride = current_user.rides.find(params[:id])
    render json: @ride
    # render json: Geocoder.address(@ride.end_location)     
  end

  # POST /rides
  # POST /rides.json
  def create
    puts "RidesController.create"
    ride    = current_user.rides.create!(ride_params)
    ride_id = current_user.rides.last
    @ride   = Ride.new(ride_params)

    if ride.save
      render json: ride, status: :created
    else
      render json: ride.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rides/1
  # PATCH/PUT /rides/1.json
  def update
    @ride = Ride.find(params[:id])

    if @ride.update(ride_params)
      head :no_content
    else
      render json: @ride.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rides/1
  # DELETE /rides/1.json
  def destroy
    @ride.destroy

    head :no_content
  end

  private

    def set_ride
      @ride = Ride.find(params[:id])
    end

    def ride_params
      params.require(:ride).permit(:user_id, :driver, start_location: [], end_location: [])
    end

    def check_permission
      render json: { error: "Can't touch this" }, status: :unauthorized unless current_user
    end

end

