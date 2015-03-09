Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: '/auth'
  scope '/api' do
    resources :rides, except: [:new, :edit]
    resources :users, except: [:new, :edit]
  end

end
