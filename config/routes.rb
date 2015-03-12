Rails.application.routes.draw do
  namespace :api do
      resources :users, only: [:show]
      resources :rides, except: [:new, :edit]  
  end

  post '/auth/register',     to: 'auth#register'     
  post '/auth/authenticate', to: 'auth#authenticate'
  get '/auth/token_status',  to: 'auth#token_status'
end
