Rails.application.routes.draw do
  resources :rides, except: [:new, :edit]
  scope '/api' do
    resources :users, except: [:new, :edit]
  end

end
