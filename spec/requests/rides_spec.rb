require 'rails_helper'

RSpec.describe "Rides", type: :request do
  describe "GET /rides" do
    it "works! (now write some real specs)" do
      get rides_path
      expect(response).to have_http_status(200)
    end
  end
end
