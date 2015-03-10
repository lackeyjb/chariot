class RidesController < ApplicationController
  before_action :set_ride, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /rides
  # GET /rides.json
  def index
    # if params[:search].present?
    #   @rides = Geocoder.search(params[:search])
    # else
      @rides = Ride.all
    # end
   render json: @rides
  end

  # GET /rides/1
  # GET /rides/1.json
  def show
    render json: @ride
  end

  # POST /rides
  # POST /rides.json
  def create
    
    
    raw_data = params['ride']
    format_address = Geocoder.search(raw_data[0][:latitude] + "," + raw_data[0][:longitude] )
    params[:ride] = { 
                user_id:       raw_data[0][:user_id],
                start_address: format_address.data['formatted_address'],
                end_address:   'Ponce City Market, Ponce De Leon Avenue Northeast, Atlanta, GA 30308, USA'
             }
   
    @ride = Ride.new(params)

    if @ride.save
      render json: @ride, status: :created, location: @ride
    # else
    #   render json: @ride.errors, status: :unprocessable_entity
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
      params.require(:ride).permit(:user_id, :start_address, :end_address)
    end
end
