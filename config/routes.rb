Rails.application.routes.draw do
  resources :char_jobs, only: [:index]
  resources :jobs, only: [:index, :show]
  resources :character_equipments, only: [:show, :update]
  resources :equipment, only: [:index, :show]
  resources :characters
  resources :users, only: [:show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup" , to: "users#create"
  get "/me", to: "users#show"
  post "/login",to: "sessions#create"
  delete "/logout",to: "sessions#destroy"
end
