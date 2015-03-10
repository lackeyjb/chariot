Rails.application.routes.draw do
  scope '/api' do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :rides, except: [:new, :edit]
    
  end

end
