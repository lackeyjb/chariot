Rails.application.routes.draw do
  namespace :api do

    resources :sessions, only: [:index, :create] 
    delete '/sessions', to: 'sessions#destroy'

    resources :users,  except: [:new, :edit] 
    resources :rides,  except: [:new, :edit] 
  

  end  
end
