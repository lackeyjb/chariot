Rails.application.routes.draw do
  scope '/api' do
    resources :rides, except: [:new, :edit]
    resources :users, except: [:new, :edit]
  end

end
