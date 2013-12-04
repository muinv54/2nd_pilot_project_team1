DeviseExample::Application.routes.draw do
  root 'home#index'
  devise_for :users
  devise_scope :user do
    get "sign_in", :to => "devise/sessions#new"
  end
  resources :users do
 	  resources :statuses
  end
end
