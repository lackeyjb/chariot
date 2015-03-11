class RidesController < ApplicationController
  before_action :set_ride, only: [:show, :update, :destroy]
  
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

    puts "RidesController.create"
    @ride = Ride.new(ride_params)
    
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
      # if params['lat_long']
        params[:ride] = { user_id: 1, 
                          start_lat: params['position'],
                          start_long: 0.415
                        }
      # elsif params['address']
      #   params['ride'][:start_address] = Geocoder.search(params['address'])
      # end
      params.require(:ride).permit(:user_id, :start_lat, :start_long, :end_lat, :end_long) 
    end
end
