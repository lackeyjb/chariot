require "rails_helper"

RSpec.describe RidesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/rides").to route_to("rides#index")
    end

    it "routes to #new" do
      expect(:get => "/rides/new").to route_to("rides#new")
    end

    it "routes to #show" do
      expect(:get => "/rides/1").to route_to("rides#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/rides/1/edit").to route_to("rides#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/rides").to route_to("rides#create")
    end

    it "routes to #update" do
      expect(:put => "/rides/1").to route_to("rides#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/rides/1").to route_to("rides#destroy", :id => "1")
    end

  end
end
