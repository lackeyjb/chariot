Rails.application.routes.draw do
  scope '/api' do
    resources :rides, except: [:new, :edit]   
  end

  match '/auth/register',     to: 'auth#register',     via: 'post'
  match '/auth/authenticate', to: 'auth#authenticate', via: 'post'
  match '/auth/token_status', to: 'auth#token_status', via: 'get'
end
