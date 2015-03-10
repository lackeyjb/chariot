require "rails_helper"

RSpec.describe RidesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "api/rides").to route_to("rides#index")
    end

    it "routes to #show" do
      expect(:get => "api/rides/1").to route_to("rides#show", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "api/rides").to route_to("rides#create")
    end

    it "routes to #update" do
      expect(:put => "api/rides/1").to route_to("rides#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "api/rides/1").to route_to("rides#destroy", :id => "1")
    end

  end
end
