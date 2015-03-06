Rails.application.routes.draw do
  scope '/api' do
    resources :users, except: [:new, :edit]
  end

end
