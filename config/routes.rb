Rails.application.routes.draw do
  namespace :api do
      resources :users,  except: [:new, :edit]
      resources :rides,  except: [:new, :edit] 
      resources :sessions, only: [:index, :create] 

      delete '/sessions', to: 'sessions#destroy'
  end  
end
