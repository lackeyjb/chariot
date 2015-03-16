 class Api::RidesController < ApplicationController
  before_action :check_permission
  before_action :set_ride, only: [:show, :update, :destroy]
   
  # GET /rides
  # GET /rides.json
  def index
    @ride = Ride.last
    @rides_near= { 
      'near_start' => Ride.near([@ride.latitude, @ride.longitude]),
      'near_end' =>  Ride.near([@ride.end_latitude, @ride.end_longitude])
    }
    render json: @rides_near
  end

  # GET /rides/1
  # GET /rides/1.json
  def show
    render json: @ride
  end

  # POST /rides
  # POST /rides.json
  def create
    puts "RidesController.create"
    @ride = Ride.new(ride_params)
    if @ride.save
      render json: @ride, status: :created
    else
      render json: @ride.errors, status: :unprocessable_entity
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
      params.require(:ride).permit(:user_id, :address, :latitude, :longitude, :end_latitude, :end_longitude, :end_address)
    end

    def check_permission
      render json: { error: "Can't touch this" }, status: :unauthorized unless current_user
    end

end

